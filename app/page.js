'use client';
import React, { useEffect, useState } from 'react';

const page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, desc }]);
    // setTasks([...tasks, { title: 'Aayus', desc: 'Jain' }]);
    setTitle('');
    setDesc('');
  };

  let renderTasks = <h2 className="text-xl font-medium">No tasks available</h2>;
  if (tasks.length > 0) {
    renderTasks = tasks.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-semibold">{t.desc}</h6>
          </div>
          <button
            onClick={() => handleDelete(i)}
            className="bg-red-400 text-white px-4 py-2 rounded font-semibold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  const handleDelete = (i) => {
    let copyTask = [...tasks];
    copyTask.splice(i, 1);
    setTasks(copyTask);
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border-zinc-800 border-4 m-8 py-2 px-4"
          placeholder="Enter Tasks Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="border-zinc-800 border-4 m-8 py-2 px-4"
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderTasks}</ul>
        {tasks.length > 0 && (
          <div className="flex items-center justify-center ">
            <button
              onClick={handleDeleteAll}
              className="bg-red-600 text-white px-4 py-2 rounded font-semibold "
            >
              Delete All
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
