"use client"
import React, {useState, useEffect} from 'react'
import { usePathname } from 'next/navigation'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser';
import './styles.css';
import { GenericButton } from '../../../../components';


const page = () => {
const [courseDetails, setCourseDetails] = useState(null)
const pathname = usePathname();
const url_parts = pathname.split('/');
const id = url_parts[url_parts.length - 1];

useEffect(async ()=> {
    const response = await axios.get(`/courses_api/course/${id}`)
    console.log(response)
    setCourseDetails(response.data)
}, [])



  return (
    <main className='flex-grow course_page'>
        {
            courseDetails===null?'Loading...': (<div className='px-10 w-[90%] overflow-hidden  flex flex-col justify-center items-center py-10'>
              <div className="">
              <h1 className='text-center'>{courseDetails.title}</h1>
                <div className="mx-auto max-w-[90%]  flex flex-col justify-center items-center">
                    {ReactHtmlParser(courseDetails.description)}
                </div>
                <div className="flex justify-center items-center">
                <GenericButton
            text={"Get Started"}
            classes={" font-bold bg-gradient-to-r from-primary to-secondary text-white mx-2"}
          />
                </div>
              </div>
            </div>)
        }
    </main>
  )
}

export default page