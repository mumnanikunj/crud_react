import TaskAdd from "./Innercomponent/TaskAdd"
import styles from './Home.module.css'
import VideoCallPage from "../VideoCall/VideoCallPage"
import VideoCall from "../VideoCall/VideoCall"

const Home = () =>{
    return(
        <div>
            {/* <TaskAdd /> */}
            <h2>WebRTC Video Call</h2>
            <VideoCall />
            {/* <VideoCallPage /> */}
        </div>
    )
}

export default Home