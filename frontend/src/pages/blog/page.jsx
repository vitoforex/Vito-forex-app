import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../../components";
import { formatDate } from "../../lib/utils";

const Pages = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/blog_api/");
        setPosts(response.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogPosts();
  }, []);
  console.log(posts);
  return (
    <>
      <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
        <div className="mx-auto container">
          <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900">
            Latest from our Blog
          </h1>
          <div className="mt-12 lg:mt-24">
            {posts === null ? (
              <Spinner />
            ) : (
              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
               <Link to={`/blog/${posts[0].id}`}>
               <div>
                  <img
                    className="w-full"
                    src={posts[0].featured_image}
                    alt="computer"
                  />
                  <div className="py-4 px-8 w-full flex justify-between bg-primary">
                    <p className="text-sm text-white font-semibold tracking-wide">
                      {posts[0].author}
                    </p>
                    <p className="text-sm text-white font-semibold tracking-wide">
                      {formatDate(posts[0].pub_date)}
                    </p>
                  </div>
                  <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                    <h1 className="text-4xl text-gray-900 font-semibold tracking-wider line-clamp-1">
                      {posts[0].title}
                    </h1>

                    <div className="w-full mt-4 justify-end flex items-center cursor-pointer">
                      <Link
                        to={`/blog/${posts[0].id}`}
                        className="text-base tracking-wide text-indigo-500"
                      >
                        Read more
                      </Link>
                      <svg
                        className="ml-3 lg:ml-6"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={18}
                        viewBox="0 0 20 18"
                        fill="none"
                      >
                        <path
                          d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                          stroke="#4338ca"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 8.53662H19"
                          stroke="#4338ca"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="h-5 w-2" />
                  </div>
                </div>
               </Link>

                {posts.length > 1 && (
                  <div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                      {posts.map(
                        (post, idx) =>
                          idx !== 0 && (
                           <Link to={`/blog/${post.id}`}>
                           <div>
                              <img
                                className="w-full"
                                src={post.featured_image}
                                alt="games"
                              />
                              <div className="py-2 px-4 w-full flex justify-between bg-primary">
                                <p className="text-sm text-white font-semibold tracking-wide">
                                  {post.author}
                                </p>
                                <p className="text-sm text-white font-semibold tracking-wide">
                                {formatDate(post.pub_date)}
                                </p>
                              </div>
                              <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                <h1 className="text-lg text-gray-900 font-semibold tracking-wider line-clamp-1">
                                {post.title}
                                </h1>
                               
                              </div>
                            </div>
                           </Link>
                          )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
