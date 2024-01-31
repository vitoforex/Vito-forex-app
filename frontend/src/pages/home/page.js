import { useEffect, useState } from "react"
import axios from "axios";
import { HeaderCarousel, TopBlogPosts, TopEvents } from "../../components";
import {
  GenericButton,
  FAQs,
  Testimonials,
  EventCard,
  BlogPostCard,
  Gallery,
} from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faSchool,
  faMoneyBill,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { ServiceCard } from "../../components";
import David from "../../assets/images/david.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const services = [  
  {
    name: "Online lessons",
    icon: faSchool,
    benefits: ["We provide webinars", "Full mentorship programs", " Supportive assistance", "Live trading sessions"],
  },
  {
    name: "Signals",
    icon: faSignal,
    benefits: ["We provide real time signals", "Daily market setups and insights", "Full market analysis"],
  },
 
  {
    name: "Physical classes",
    icon: faPersonChalkboard,
    benefits: ["Mentorship programs", "One on one discussions", "Live market analysis", "Supportive assistance"],
  },
];

const events = [
  {
    title: "Getting started in forex trading",
    image:
      "https://cdn.pixabay.com/photo/2022/01/10/04/37/event-6927353_1280.jpg",
    date: "September 20th 2023",
    venue: "Uma grounds, Lugogo, Kampala",
  },
  {
    title: "Networking for forex traders",
    image:
      "https://cdn.pixabay.com/photo/2020/06/08/16/19/woman-5275027_1280.jpg",
    date: "October 20th 2023",
    venue: "Nile Gardens, Jinja City",
  },
  {
    title: "Market anaysis 101",
    image:
      "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg",
    date: "November 20th 2023",
    venue: "Speke Resot, Muyonyo",
  },
];

const posts = [
  {
    image:
      "https://cdn.pixabay.com/photo/2016/11/06/17/17/north-america-1803504_1280.jpg",
    title: "Best places to live in as a forex trader.",
    author: " David",
    author_image: David,
    caption:
      "Choosing where you live as a trader can break or make your career. Consider this articleas the ultimate guide to choose your business location",
    date: "Aug, 15, 2023",
    read_time: "10",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg",
    title: "How to do proper market analysis",
    author: " David",
    author_image: David,
    caption:
      "Market analysis is crucicial to understand for every trader because it saves you the pain of dealing with could be prevented losses.",
    date: "May, 15, 2023",
    read_time: "20",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2017/12/17/14/12/bitcoin-3024279_1280.jpg",
    title: "Is forex trading more profitable than bitcoin?",
    author: " David",
    author_image: David,
    caption:
      "Market analysis is crucicial to understand for every trader because it saves you the pain of dealing with could be prevented losses.",
    date: "Oct, 15, 2021",
    read_time: "15",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactFormHandler = async () => {
    if (!email || !subject || !message ){
      alert("field missing!")
      return "fields can't be empty!"
    }

    try {
      let response = await axios.post(
        "/pages-api/send_contact_form_email",
        JSON.stringify({
          email, 
          subject,
          message
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );

      toast("Your message was sent. Thank you!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast("We could not send your message. Try again!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  }

  return (
    <main className="flex-grow ">
      <HeaderCarousel />
      <div className="py-20 ">
        <div className="mx-auto md:w-[60%] sm:w-[90%] px-10">
        <div className="text-center">
          <h2 className="text-3xl text-center custom-underline font-semibold">
            What Is Vito Forex
          </h2>
        </div>
          <p className="text-center py-8">
          Vito forex is a trading brand that introduces Vito Forex academy(VFA). The vito forex academy is aimed at providing a dynamic and visionary approach to forex trading and suitable for beginner, intermediate and advanced traders. 
          Vito forex academy was founded in 2023 and we’ve helped a number of traders begin their careers and also improved beginners to advanced traders and develop their trading strategies.We specialize in providing a comprehensive trading guide and system to enable traders to stand in the forex market and also improve on their profitability in their forex careers. We also improve on your confidence and boost your mindset to help you strengthen your mental ability to keep in this business.
          Vito forex offers numerous services which include; providing real-time signals, daily market analysis and trade breakdown.
          We also provide mentorship programs for the different categories of traders. We offer support to our traders and help them grow their careers.

          </p>
          <div className="flex flex-wrap justify-center items-center">
          <Link to={"/signals"}>
            <GenericButton
              text={"Start Learning"}
              classes={"bg-gradient-to-r from-primary to-secondary text-white"}
            />
          </Link>
          </div>
        </div>
      </div>
      <div className="bg-black py-10 mb-20">
      <div className="text-center">

        <h2 className="text-center custom-underline py-10 text-white text-3xl font-semibold">
          Our Services
        </h2>
      </div>
        <div className="mx-auto w-[95%] flex justify-center items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {services.map((service, idx) => (
              <ServiceCard
                name={service.name}
                icon={service.icon}
                benefits={service.benefits}
              />
            ))}
          </div>
        </div>
      </div>

      <FAQs />

      {/*<Testimonials />*/}

      <div className="my-10">
        <div className="mx-auto w-[80%]">
        <div className="text-center">
          <h2 className="text-center text-3xl font-semibold custom-underline">
            Upcoming Events
          </h2>
        </div>
          <TopEvents/>
        </div>
      </div>

      <div className="my-10 py-10 bg-black">
        <div className="mx-auto w-[80%]">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-center text-white custom-underline">
            Latest Articles
          </h2>
        </div>
          <div className="flex justify-center items-center py-10">
              <TopBlogPosts/>
          </div>
        </div>
      </div>

      <section class="bg-white ">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="text-center">
          <h2 class="custom-underline mb-4 text-4xl tracking-tight font-extrabold text-center text-black">
            Contact Us
          </h2>
        </div>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3.5 "
                placeholder="elon@tesla.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <GenericButton
              onClick={contactFormHandler}
              text={"Send message"}
              classes={
                " font-bold bg-gradient-to-r px-4 from-primary to-secondary text-white mx-2"
              }
            />
          </form>
        </div>
      </section>


      <section className="bg-black p-10 cta-section">
            <div className="mx-auto w-[90%] flex justify-center items-center">
                <div className="text-white">
                  <h2 className="text-white text-center font-bold md:text-4xl text-3xl">
                    Ready To Start Forex Trading?
                  </h2>
                  <p className="text-lg text-gray-200 py-2 text-center">
                    Book a call with us to see how we can help you best!
                  </p>
                  <div className="flex justify-center items-center py-4">
                  <Link target="_blank" to="https://calendly.com/vitoforex/30min">
                  <GenericButton
                    text={"Book a Call"}
                    classes={
                      " font-bold bg-gradient-to-r px-4 from-primary to-secondary text-white mx-2"
                    }
                  />
                  </Link>
                  </div>
                </div>
            </div>
      </section>

      
    </main>
  );
}
