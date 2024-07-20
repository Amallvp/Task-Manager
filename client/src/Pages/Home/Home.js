import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <button>Add Task</button>
        <div className="home-task-searchbar">
          <div className="search-input">
            <label htmlFor="">Search : </label>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="sort-input">
            <span>Sort By:</span>
            <span>dropdown</span>
          </div>
        </div>

        <div className="todo-task-wrapper">
          <div className="todo-tasks">
            <div className="todo-main-title">TODO</div>
            <div className="todo-tasks-container-scroll">
                <div className="todo-task-container">
                    <div className="todo-tasks-title">
                      <h3>Task 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus excepturi tempora accusantium consequatur alias quam corporis iste distinctio quibusdam unde incidunt debitis error, velit autem ducimus officia, est, asperiores dolor.</p>
                    </div>
                    <span>time created</span>
                    <div className="todo-tasks-buttons">
                      <button className="btn1">Delete</button>
                      <button className="btn2">Edit</button>
                      <button className="btn3">View Details</button>
                    </div>
                </div>
            </div>
          </div>


          <div className="todo-tasks inprogress-tasks">
          <div className="todo-main-title">In Progress</div>
          <div className="todo-tasks-container-scroll">
                <div className="todo-task-container">
                    <div className="todo-tasks-title">
                      <h3>Task 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus excepturi tempora accusantium consequatur alias quam corporis iste distinctio quibusdam unde incidunt debitis error, velit autem ducimus officia, est, asperiores dolor.</p>
                    </div>
                    <span>time created</span>
                    <div className="todo-tasks-buttons">
                      <button className="btn1">Delete</button>
                      <button className="btn2">Edit</button>
                      <button className="btn3">View Details</button>
                    </div>
                </div>

                <div className="todo-task-container">
                    <div className="todo-tasks-title">
                      <h3>Task 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus excepturi tempora accusantium consequatur alias quam corporis iste distinctio quibusdam unde incidunt debitis error, velit autem ducimus officia, est, asperiores dolor.</p>
                    </div>
                    <span>time created</span>
                    <div className="todo-tasks-buttons">
                      <button className="btn1">Delete</button>
                      <button className="btn2">Edit</button>
                      <button className="btn3">View Details</button>
                    </div>
                </div>

                <div className="todo-task-container">
                    <div className="todo-tasks-title">
                      <h3>Task 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus excepturi tempora accusantium consequatur alias quam corporis iste distinctio quibusdam unde incidunt debitis error, velit autem ducimus officia, est, asperiores dolor.</p>
                    </div>
                    <span>time created</span>
                    <div className="todo-tasks-buttons">
                      <button className="btn1">Delete</button>
                      <button className="btn2">Edit</button>
                      <button className="btn3">View Details</button>
                    </div>
                </div>

                <div className="todo-task-container">
                    <div className="todo-tasks-title">
                      <h3>Task 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus excepturi tempora accusantium consequatur alias quam corporis iste distinctio quibusdam unde incidunt debitis error, velit autem ducimus officia, est, asperiores dolor.</p>
                    </div>
                    <span>time created</span>
                    <div className="todo-tasks-buttons">
                      <button className="btn1">Delete</button>
                      <button className="btn2">Edit</button>
                      <button className="btn3">View Details</button>
                    </div>
                </div>
            </div>
          </div>




          <div className="todo-tasks completed-tasks">

          <div className="todo-main-title">Done</div>
            <div className="todo-task-container">
                <div className="todo-tasks-title">
                  <h3>Task 1</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Delectus excepturi tempora accusantium consequatur alias quam corporis iste distinctio quibusdam unde incidunt debitis error, velit autem ducimus officia, est, asperiores dolor.</p>
                </div>
                <span>time created</span>
                <div className="todo-tasks-buttons">
                  <button className="btn1">Delete</button>
                  <button className="btn2">Edit</button>
                  <button className="btn3">View Details</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
