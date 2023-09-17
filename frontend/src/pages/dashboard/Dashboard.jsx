import React, {useState, useEffect} from "react";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import {
  GenericButton,
  Signals,
  TradeBreakdown,
  DailySetups,
  WinRate,
  CalculatedRisk,
} from "../../components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosError } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateUserIsLoggedIn } from "../../features/authSlice";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [name, setName] = useState('');
    function updateActiveTab(tabNum){
        setActiveTab(tabNum);
    }

    useEffect(()=>{
     async function getUserStatus(){
      try {
        const response = await axios.get('/auth/user_status');
        if (response.data.email){
          console.log(response)
          setName(response.data.first_name)
        }else{
          navigate('/login')
          // make a toast tell a user their session expired
        }
      }catch{
        console.log('Unexpected error has occured')
      }
     }
     getUserStatus();
    }, [])
    
    const  logoutHandler = async () => {
        const response = await axios.post('/auth/logout')
        try {
          if (response.status === 200){
            dispatch(updateUserIsLoggedIn(false));
            localStorage.setItem('isAuthenticated', 'false');
            navigate('/')
           }
        }catch{
          console.log('An error occured while logging you out!')
        }
       }
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="py-2 px-4 bg-black">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <Link to={"/"}>
              <img src={Logo} width={50} height={50} alt="logo" />
            </Link>
            <div className="pl-2 ">
              <Link to={"/"}>
                <span className="md:text-3xl text-[16px] font-bold text-secondary">
                  Vito Forex
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mx-2">
                <FontAwesomeIcon size="2xl" icon={faUserTie} style={{color:'#ddd'}}/>
            </div>
            <div className="mx-2">
                <span className="font-bold underline underline-offset-1 text-[13px] text-white">
                    Welcome {name}!
                </span>
            </div>
            <div className="ml-2">
              <GenericButton
                text={"Logout"}
                classes={"bg-primary text-white rounded-full"}
                onClick={()=>logoutHandler()}
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow bg-[#ddd]">
        <div className="flex ">
          <div className="bg-black h-[90vh]  w-44 border-t-2 border-white border-b-2">
            <div className="flex flex-col">
              <GenericButton
                text={"Siganals"}
                classes={"text-white bg-secondary rounded-[0px] py-4 mb-2"}
                onClick={()=>updateActiveTab(0)}
              />
              <GenericButton
                text={"Trade Breakdown"}
                classes={"text-white bg-secondary rounded-[0px] py-4 mb-2"}
                onClick={()=>updateActiveTab(1)}
              />
              <GenericButton
                text={"Daily setups"}
                classes={"text-white bg-secondary rounded-[0px] py-4 mb-2"}
                onClick={()=>updateActiveTab(2)}
              />
              <GenericButton
                text={"Exit"}
                classes={"text-white bg-secondary rounded-[0px] py-4 mb-2"}
                onClick={()=>navigate('/')}
              />
            </div>
          </div>
          <div className="mx-auto w-[90%] py-10 pb-20 pl-4 max-h-[90vh] overflow-auto">
                {activeTab===0 && <Signals/>}
                {activeTab===1 && <TradeBreakdown/>}
                {activeTab===2 && <DailySetups/>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
