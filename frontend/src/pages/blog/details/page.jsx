import React, { useState, useEffect } from "react";
import axios from "axios";
import { GenericButton } from "../../../components";
import './styles.css'
import { useParams } from "react-router-dom";

const Page = () => {
  const [post, setPost] = useState(null);
  const params = useParams()
  const id = params.id;
  

  useEffect(()=>{
    const getPostDetails = async () => {
        const response = await axios.get(`/blog_api/${id}`);
        console.log(response);
        setPost(response.data.post);
      }
      getPostDetails();
  }, [id]);
  return <main className="flex-grow">
   <div className="w-[70%] mx-auto flex flex-col items-center justify-center py-10">
   {
        post === null?'Loading...': (
            <div className="article">
                <h2 className="font-bold text-4xl">{post.title}</h2>
                <div className="w-[100%] h-52 py-10">
                    <img src={post.featured_image} alt="Featured image" className="h-56 w-full object-cover object-center" />
                </div>
                <div className="py-6">

                </div>
                <div className="py-10 w-[70%]" dangerouslySetInnerHTML={{ __html: post.content }}/>
                   
    
            </div>
        )
    }
   </div>
  </main>;
};

export default Page;
