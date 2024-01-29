import React, { useState, useEffect } from "react";
import BlogPostCard from "../Cards/BlogPostCard";
import axios from "axios";
import Spinner from "../Loaders/Spinner";

const TopBlogPosts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const response = await axios.get("/blog_api/");
        setPosts(response.data.posts.slice(0,3));
      } catch (error) {
        console.log("couldn't fetch blog posts");
      }
    };
    getBlogPosts();
  }, []);

  if (Array.isArray(posts) && posts.length === 0){
    return <p className="text-white">
        No articles!
    </p>
  }

  return (
    <>
      {posts === null ? (
        <Spinner />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {posts.map((post, idx) => (
            <BlogPostCard
              image={post.featured_image}
              title={post.title}
              author={post.author}
              author_image={post.author_image}
              date={post.pub_date}
              key={idx}
              post_id={post.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TopBlogPosts;
