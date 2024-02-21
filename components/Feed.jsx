"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout ">
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const handleTagClick = (tag) => {};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    // Fetch posts from the server or API
    const fetchPrompts = async () => {
      const response = await fetch("/api/prompts");
      const data = await response.json();

      setAllPosts(data);
    };
    fetchPrompts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center ">
        <input
          type="text"
          placeholder="Search for a tag or r username"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
          required
        />
      </form>
      <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
