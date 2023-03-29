import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import posts from "../../posts.json";
import Classes from "./index.module.css";
const FeedPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState(posts);

  function PostList({ filteredPosts }) {
    var date = new Date("2013-03-10T02:00:00Z");
    date.toISOString().substring(0, 10);
    return (
      <div>
        
        {filteredPosts.map((post) => (
          <div className={Classes.wrapper} key={post.id}>
            <img className={Classes.img} src={post.userImage} alt={post.username} />
            <div>{post.username}</div>
            <div>{post.timestamp}</div>
            <div>{post.text}</div>
            <Link to={`/${post.id}`}>View post</Link>
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    const searchQuery = searchParams.get("search") || "";
    console.log(searchQuery);
    const filtered = posts.filter(
      (post) =>
        post.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchParams]);

  return (
    <div className={Classes.layout}>
      <PostList filteredPosts={filteredPosts} />
    </div>
  );
};

export default FeedPage;
