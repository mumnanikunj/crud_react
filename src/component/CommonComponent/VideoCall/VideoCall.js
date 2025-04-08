import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');
// const socket = io('http:192.168.161.110:5000');

const VideoCall = () => {
  const [roomId, setRoomId] = useState('room1');
  const [connected, setConnected] = useState(false);
  const localVideo = useRef();
  const remoteVideo = useRef();
  const peerConnection = useRef();

  const servers = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
    ]
  };

  const joinRoom = async () => {
    peerConnection.current = new RTCPeerConnection(servers);

    // Local stream
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    stream.getTracks().forEach(track => peerConnection.current.addTrack(track, stream));
    localVideo.current.srcObject = stream;

    peerConnection.current.ontrack = event => {
      remoteVideo.current.srcObject = event.streams[0];
    };

    peerConnection.current.onicecandidate = event => {
      if (event.candidate) {
        socket.emit('ice-candidate', { roomId, candidate: event.candidate });
      }
    };

    socket.emit('join', roomId);

    socket.on('user-joined', async () => {
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      socket.emit('offer', { roomId, offer });
    });

    socket.on('receive-offer', async ({ offer }) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.current.createAnswer();
      await peerConnection.current.setLocalDescription(answer);
      socket.emit('answer', { roomId, answer });
    });

    socket.on('receive-answer', async ({ answer }) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on('receive-candidate', async ({ candidate }) => {
      try {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (error) {
        console.error('Error adding received ice candidate', error);
      }
    });

    setConnected(true);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <button onClick={joinRoom} disabled={connected}>Join Room</button>
      <video ref={localVideo} autoPlay playsInline muted={true} width="300" />
      <video ref={remoteVideo} autoPlay playsInline muted={true} width="300" />
    </div>
  );
};

export default VideoCall;
