import React, { useState } from "react";
import styles from "./TaskAdd.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../../../Redux/taskSlice";

const TaskAdd = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (editId) {
      dispatch(updateTask({ id: editId, title, description }));
      setEditId(null);
    } else {
      dispatch(addTask({ title, description }));
    }
    setTitle("");
    setDescription("");
  };

  const handleEdit = (task) => {
    setTitle(task.title);
    setDescription(task.description);
    setEditId(task.id);
  };

  return (
    <div>
      <h1>Task Add</h1>
      <div>
        <form className={styles.formStyle}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className={styles.commonStyle}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className={styles.commonStyle}
          />
          <button onClick={handleAddOrUpdate}>Add Task</button>
        </form>

        {tasks?.map((item, index) => (
          <div
            key={item.id}
            style={{ marginTop: 20, padding: 10, backgroundColor: "#eee" }}
          >
            <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
            <h3>{item.description}</h3>
            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              <button
                onClick={() => handleEdit(item)}
                style={{ color: "blue" }}
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTask(item))}
                style={{ color: "red" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskAdd;
