import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles.css";
import { GenericButton, Spinner } from "../../../components";

const Page = () => {
  const [courseDetails, setCourseDetails] = useState(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const getCourseDetails = async () => {
      const response = await axios.get(
        `/courses_api/course/${id}`
      );
      setCourseDetails(response.data);
    };
    getCourseDetails();
  }, []);

  return (
    <main className="">
      {courseDetails === null ? (
        <Spinner />
      ) : (
        <div className="p-5 mx-auto sm:p-10 md:p-16  ">
          <div className="flex flex-col max-w-3xl mx-auto overflow-hidden ">
            <div className="w-[100%] rounded-lg  bg-gray-100">
              <div className="px-10 w-[100%] overflow-hidden  flex flex-col justify-center items-center py-10">
                <div className="">
                  <h1 className="text-center">{courseDetails.title}</h1>
                  <div
                    className="course_page px-4 mx-auto flex flex-col justify-center items-center"
                    dangerouslySetInnerHTML={{
                      __html: courseDetails.description,
                    }}
                  ></div>
                  <div className="flex justify-center items-center">
                    <GenericButton
                      text={"Get Started"}
                      classes={
                        " font-bold bg-gradient-to-r from-primary to-secondary text-white mx-2"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
