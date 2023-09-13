"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { GenericButton } from "../../../../components";
import './styles.css'

const page = () => {
  const [post, setPost] = useState(null);
  const pathname = usePathname();
  const url_parts = pathname.split("/");
  const id = url_parts[url_parts.length - 1];

  useEffect(async () => {
    const response = await axios.get(`/blog_api/${id}`);
    console.log(response);
    setPost(response.data.post);
  }, []);
  return <main className="flex-grow">
   <div className="w-[70%] mx-auto flex flex-col items-center justify-center py-10">
   {
        post === null?'Loading...': (
            <div className="article">
                <h2 className="font-bold text-4xl">{post.title}</h2>
                <div className="w-[100%] h-52 py-10">
                    <img src={post.featured_image} alt="" className="h-56 w-full object-cover object-center" />
                </div>
                <div className="py-6">

                </div>
                <div className="py-10 w-[70%]">
                    {ReactHtmlParser(post.content)}
                </div>
            </div>
        )
    }
   </div>
  </main>;
};

export default page;
