import React, { useState } from "react";
import "./Forum.css";

function Forum() {
  const [search, setSearch] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const [discussions, setDiscussions] = useState([
    { id: 1, topic: "React Basics", details: "Discussion about React basics.", likes: 5, dislikes: 1, time: "5 mins ago", category: "Technology" },
    { id: 2, topic: "Health Tips", details: "Discussion about daily health tips.", likes: 3, dislikes: 0, time: "15 mins ago", category: "Health" },
  ]);

  const filteredDiscussions = discussions.filter(d =>
    d.topic.toLowerCase().includes(search.toLowerCase())
  );

  const addNewDiscussion = () => {
    if (newTopic.trim() && newDetails.trim()) {
      const newDiscussion = {
        id: discussions.length + 1,
        topic: newTopic,
        details: newDetails,
        likes: 0,
        dislikes: 0,
        time: "Just now",
        category: "User Added"
      };

      setDiscussions([newDiscussion, ...discussions]);
      setNewTopic("");
      setNewDetails("");
    } else {
      alert("Please fill both topic and content before adding!");
    }
  };

  return (
    <div className="forum">
      <h1>Discussion Board</h1>
      <p>Total Discussions: {discussions.length}</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* New Discussion Section */}
      <div className="add-discussion">
        <h3>Add New Discussion</h3>
        <textarea
          placeholder="Topic Name"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          rows="3" // 👈 Made this bigger like you asked
        ></textarea>
        <textarea
          placeholder="Add details about the topic..."
          value={newDetails}
          onChange={(e) => setNewDetails(e.target.value)}
          rows="6" // 👈 Already bigger like before
        ></textarea>
        <button onClick={addNewDiscussion}>Add Discussion</button>
      </div>

      {/* Discussion List */}
      <div className="discussion-list">
        {filteredDiscussions.map(d => (
          <div key={d.id} className="discussion">
            <h3>{d.topic}</h3>
            <p><strong>Category:</strong> {d.category}</p>
            <p>{d.details}</p>
            <p><small>Last updated: {d.time}</small></p>
            <button onClick={() => handleLike(d.id)}>👍 Like ({d.likes})</button>
            <button onClick={() => handleDislike(d.id)}>👎 Dislike ({d.dislikes})</button>
            <button className="comment-button">💬 Comment</button>
          </div>
        ))}
      </div>

      {/* Trending Topics */}
      <aside className="trending-topics">
        <h3>Trending Topics</h3>
        <ul>
          <li>Future of AI</li>
          <li>Best Coding Practices</li>
          <li>Healthy Lifestyle Tips</li>
          <li>Exam Preparation Tricks</li>
          <li>Latest Tech News</li>
        </ul>
      </aside>
    </div>
  );

  function handleLike(id) {
    setDiscussions(discussions.map(d =>
      d.id === id ? { ...d, likes: d.likes + 1 } : d
    ));
  }

  function handleDislike(id) {
    setDiscussions(discussions.map(d =>
      d.id === id ? { ...d, dislikes: d.dislikes + 1 } : d
    ));
  }
}

export default Forum;
