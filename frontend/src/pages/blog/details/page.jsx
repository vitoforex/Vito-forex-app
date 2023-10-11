import React, { useState, useEffect } from "react";
import axios from "axios";
import { GenericButton, Spinner } from "../../../components";
import "./styles.css";
import { useParams } from "react-router-dom";

const Page = () => {
  const [post, setPost] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getPostDetails = async () => {
      const response = await axios.get(`/blog_api/${id}`);
      console.log(response);
      setPost(response.data.post);
    };
    getPostDetails();
  }, [id]);
  return (
    <>
      {post === null ? (
        <Spinner />
      ) : (
        <div className="p-5 mx-auto sm:p-10 md:p-16  ">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img
              src={post.featured_image}
              alt=""
              className="w-full h-80 sm:h-96 "
            />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md ">
              <div className="space-y-2 bg-primary rounded-lg py-4 px-4">
                <h1
                 
                  className="inline-block text-2xl font-semibold sm:text-3xl text-white"
                >
                  {post.title}
                </h1>
                <p className="text-xs ">
                  {" "}
                  <span className="mr-2 text-gray-200">By</span>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline text-gray-200"
                  >
                    {post.author}
                  </a>
                </p>
              </div>
              <div className="bg-gray-100 py-4  rounded-lg">
                <div
                  className="py-10 w-[100%] article px-4"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                <div className="w-full  bg-primary border border-gray-200 rounded-lg shadow  mt-20">
                <h2 className="text-center text-white text-xl py-4">Author</h2>
                  <div className="flex flex-col items-center pb-10">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={post.author_image}
                      alt="author"
                    />
                    <h5 className="mb-1 text-xl font-medium text-white ">
                      {post.author}
                    </h5>
                    <span className="text-sm text-gray-200 ">
                      {post.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
