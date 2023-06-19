import React from 'react';
import '../Assets/Css/Maincomponent.css';
import TaskBlockData from "../Assets/Json/taskblock.json";
import Block from "../Assets/Images/Block.png";
import Accept from "../Assets/Images/Accept.png";
const Task=()=>{
    const { tasks } = TaskBlockData;
    return(
            <div className="task-block">
  <span className="title-span">Tasks for review</span>
  {tasks.map((task) => (
    <div key={task.date}>
      <p className="title-date">{task.date}</p>
      <ul>
        {task.items.map((item, index) => (
          <li key={index}>
            <span className="john-name">{item.name}</span>
            <a href="#">Feature: {item.feature}</a>
            <div className="image-content">
              {item.images.map((image, imgIndex) => (
                <div key={imgIndex} className="image-container">
                  {image.isCorrect ? (
                    <img src={Accept} alt="Accept" className="side-by-side-image"  />
                  ) : (
                    <img src={Block} alt="Block" className="side-by-side-image" />
                  )}
                  {/* <img src={image.src} alt={image.alt} className="side-by-side-image"  id="side-by-side-image-content"/> */}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
    )
}
export default Task;