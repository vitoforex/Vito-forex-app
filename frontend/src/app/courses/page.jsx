"use client"
import React, {useState, useEffect} from "react";
import "./styles.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const courses = [
  {
    image:
      "https://cdn.pixabay.com/photo/2014/10/23/10/10/dollars-499481_1280.jpg",
    name: "types of forex trading",
    id: "12",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2015/07/11/00/39/chart-840333_1280.jpg",
    name: "Become a signal master",
    id: "12",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/04/14/11/04/financial-advisor-3318769_1280.jpg",
    name: "Forex trading 101",
    id: "12",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2018/09/15/18/33/dollar-3680056_1280.jpg",
    name: "Become rich with forex trading",
    id: "12",
  },
  
];

const page = () => {
  const [courses, setCourses] = useState(null);
  useEffect(async () => {
    const response = await axios('/courses_api');
    console.log(response.data?.courses)
    setCourses(response.data?.courses)
  }, [])
  return (
    <main className="flex-grow">
      <div className="mx-auto w-[90%]">
        <h1 className="custom-underline text-center text-3xl font-semibold pt-20">
          Courses
        </h1>
        <div className="py-20">
          <div className="flex justify-center items-center">
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              {courses===null?'Loading...':courses.map((course, idx) => (
                <Link className="relative" key={idx} href={`/courses/${course.id}`}>
                  <img
                    src={course.image}
                    width={300}
                    height={300}
                    alt={course.title}
                    className="h-full w-full"
                  />
                  <div className="absolute top-[0%] left-[0%] bottom-0 bg-black w-full h-full opacity-50 ">
                    
                  </div>
                  <div className="absolute top-[40%] left-[50%] z-50 -translate-x-[50%] -translate-y-[40%] flex flex-col justify-center items-center">
                    <div className="w-full h-10 text-center">
                      <FontAwesomeIcon size="2xl" icon={faSchool} className="text-primary"/>
                    </div>
                    <h1 className="text-white capitalize text-center font-bold">
                      {course.title}
                    </h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
