import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Trending Topics</h2>
      <ul>
        <li>#React</li>
        <li>#JavaScript</li>
        <li>#WebDevelopment</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
