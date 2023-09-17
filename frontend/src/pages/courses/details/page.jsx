import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './styles.css';
import { GenericButton } from '../../../components';


const Page = () => {
const [courseDetails, setCourseDetails] = useState(null)
const params = useParams();
const id = params.id;

useEffect(()=>{
  const getCourseDetails = async ()=> {
    const response = await axios.get(`/courses_api/course/${id}`)
    console.log(response)
    setCourseDetails(response.data)
}
getCourseDetails();
}, [])



  return (
    <main className='flex-grow course_page'>
        {
            courseDetails===null?'Loading...': (<div className='px-10 w-[90%] overflow-hidden  flex flex-col justify-center items-center py-10'>
              <div className="">
              <h1 className='text-center'>{courseDetails.title}</h1>
                <div className="mx-auto max-w-[90%]  flex flex-col justify-center items-center" dangerouslySetInnerHTML={{ __html: courseDetails.description }}>
                    
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

export default Page