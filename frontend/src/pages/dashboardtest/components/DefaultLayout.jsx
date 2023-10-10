import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateUserIsLoggedIn } from "../../../features/authSlice";


const DefaultLayout = ({childeren}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [name, setName] = useState("");
    const [currentPlan, setCurrentPlan] = useState("no-plan");
    function updateActiveTab(tabNum) {
      setActiveTab(tabNum);
    }

    useEffect(() => {
      async function getUserStatus() {
        try {
          const response = await axios.get("http:localhost:8000/auth/user_status");
          if (response.data.email) {
            console.log(response);
            setName(response.data.first_name);
            setCurrentPlan(response.data.current_plan);
          } else {
            navigate("/login");
            // make a toast tell a user their session expired
          }
        } catch {
          console.log("Unexpected error has occured");
        }
      }
      getUserStatus();
    }, []);

    const logoutHandler = async () => {
      const response = await axios.post("http:localhost:8000/auth/logout");
      try {
        if (response.status === 200) {
          dispatch(updateUserIsLoggedIn(false));
          localStorage.setItem("isAuthenticated", "false");
          navigate("/");
        }
      } catch {
        console.log("An error occured while logging you out!");
      }
    };



    return (<div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
              ff
              {childeren}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>);
};
export default DefaultLayout;
