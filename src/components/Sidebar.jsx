import "./Sidebar.css";

function Sidebar() {
  const trendingTopics = [
    "React Basics",
    "State Management",
    "Routing in React"
  ];

  return (
    <aside className="sidebar">
      <h2>Trending Topics</h2>
      <ul>
        {trendingTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
