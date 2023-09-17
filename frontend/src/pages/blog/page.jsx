import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pages = () => {
  const [posts, setPosts] = useState(null);
  useEffect(()=>{
    const getBlogPosts = async () => {
      try {
        const response = await axios.get("/blog_api/");
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error)
      }
    }
    getBlogPosts();
  }, []);
  return (
    <main className="flex-grow">
    <div className="md:w-80% w-90% py-10 mx-auto flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        {posts === null ? (
          "Loading..."
        ) : (
          posts.map((post, idx) => (
            <Link to={`${post.id}`} key={idx} className="w-full ">
              <div className="bg-white rounded-lg overflow-hidden shadow relative">
                <img
                  className="h-56 w-full object-cover object-center"
                  src={post.featured_image}
                  alt=""
                />
                <div className="p-4 h-auto md:h-40 lg:h-48">
                  <span
                
                    className="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg"
                  >
                   {post.title}
                  </span>
                  <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quidem blanditiis unde asperiores? Officia amet perspiciatis ad quibusdam incidunt eaque, nobis, eveniet neque porro id commodi quisquam debitis!
                  </div>
                  <div className="relative mt-2 lg:absolute bottom-0 mb-4 md:hidden lg:block">
                    <span className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" to="#">
                      #something
                    </span>
                    <span className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700" to="#">
                      #sky
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  </main>
  
  );
};

export default Pages;
