// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../supabaseClient";
import Navbar from "./Navbar";
import "./Home.css"

function Home() {
  const [posts, setPosts] = useState([]);
  const [sortBy, setSortBy] = useState("created_at");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select("*");
      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data);
      }
    };

    fetchPosts();
  }, []);

  const sortPosts = (a, b) => {
    if (sortBy === "created_at") {
      return new Date(b.created_at) - new Date(a.created_at);
    } else if (sortBy === "upvotes") {
      return b.upvotes - a.upvotes;
    }
  };

  return (
    <div>
      <Navbar showAddPost={true} />
      <div className="home-top">

        <input className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Find content based on the Title"
        />
        <div className="sorting">
        <button onClick={() => setSortBy("created_at")}>Arrange by Chronological Order</button>
        <button onClick={() => setSortBy("upvotes")}>Arrange by popularity</button>
        </div>

        {posts
          .filter((post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort(sortPosts)
          .map((post) => (
            <div className="card" key={post.id}>
              <Link to={`/post/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <div>Created at: {new Date(post.created_at).toLocaleString()}</div>
              <div>Upvotes: {post.upvotes}</div>
            </div>
          ))}

      </div>
    </div>
  );
}

export default Home;
