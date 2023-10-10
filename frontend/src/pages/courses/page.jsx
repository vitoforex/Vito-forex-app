import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, {useState, useEffect} from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import {Spinner} from '../../components'



const Page = () => {
  const [courses, setCourses] = useState(null);
  useEffect(()=>{
    async function fetchCourses() {
      const response = await axios.get('/courses_api/');
      console.log(response)
      setCourses(response.data?.courses)
    }
    fetchCourses()
  }, [])

  console.log(courses)
  return (
    <main className="flex-grow">
      <div className="mx-auto w-[90%]">
        <h1 className="custom-underline text-center text-3xl font-semibold pt-20">
          Courses
        </h1>
        <div className="py-20">
          <div className="flex justify-center items-center">
            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
              {courses===null?<Spinner/>:courses.map((course, idx) => (
                <Link className="relative" key={idx} to={`/courses/${course.id}`}>
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
                    <h1 className="text-white capitalize text-center font-bold text-[15px]">
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

export default Page;
