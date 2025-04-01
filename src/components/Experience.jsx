import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// import { RxArrowTopRight } from "react-icons/rx";
// import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Experience = () => {

  const [selectedCard, setSelectedCard] = useState(null);
  const [isScaling, setIsScaling] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleContainerClick = (e) => {
    // Stop the propagation of the click event to prevent it from reaching the outside click handler
    e.stopPropagation();
  };

  // Toggle selected card and set scaling flag on click
  const handleCardClick = (index) => {
    if (selectedCard === index) {
      // If the same card is clicked again, reset selectedCard and set scaling flag
      setSelectedCard(null);
      setIsScaling(false); // Reset scaling flag
    } else {
      // Otherwise, select the clicked card
      setSelectedCard(index);
      setIsScaling(true); // Set scaling flag to trigger animation
    }
  };

  // const handleCardHover = (index) => {
  //   setHoveredCard(index);
  // };

  const teamHeads = [
    {
      name: "Ms. Shivani Koshtha",
      role: "Convener",
      council: "Literary Sub-Council",
      phone: "+91 8765123440",
      image: "./shivani_koshta.png",
      linkedin: "https://www.linkedin.com/in/shivani-koshtha-76a81523a",
      instagram: "https://www.instagram.com/koshthashivani"
    },
    {
      name: "Prachi Dwivedi",
      role: "Secretary",
      council: "Literary Sub-Council",
      phone: "+91 6387501988",
      image: "./prachi.png",
      linkedin: "https://www.linkedin.com/in/prachi-dwivedi-8335b7257/",
      instagram: "#"
    },
    {
      name: "Harsh Kapil",
      role: "Secretary",
      council: "Literary Sub-Council",
      phone: "+91 7895621728",
      image: "./harsh.png",
      linkedin: "https://www.linkedin.com/in/harsh-kapil-96b5a82aa/",
      instagram: "#"
    },
    {
      name: "Avinash Pal",
      role: "Co-ordinator",
      council: "Literary Sub-Council",
      phone: "+91 9026511156",
      image: "./avinash_pal.png",
      linkedin: "https://www.linkedin.com/in/avinash-pal-7789322a1/",
      instagram: "#"
    }
    
  ];

  
  const teamMembers = [
    {
      name: "Udit Kr Singh",
      role: "Fest Coordinator",
      council: "Literary Sub-Council",
      phone: "+91 7408859799",
      linkedin: "https://www.linkedin.com/in/udit-kumar-singh-2a241325a/",
      instagram: "https://www.instagram.com/Poetry_wizard_hbtu/",
      image: "./udit_kumar.jpg",
    },
    {
      name: "Rishabh Kushwaha",
      role: "Fest Coordinator",
      council: "Literary Sub-Council",
      phone: "+91 7355083996",
      linkedin: "https://www.linkedin.com/in/rishabh-kushwaha52/",
      instagram: "https://www.instagram.com/skyrish/",
      image: "./rishabh.jpg",
    },
    {
      name: "Kirti Chauhan",
      role: "Management Head",
      council: "Literary Sub-Council",
      phone: "+91 9528381016",
      linkedin: "https://www.linkedin.com/in/kirti-chauhan-894aab257/",
      instagram: "#",
      image: "./kirti_chauhan.jpg",
    },
    {
      name: "Riya Chaurasiya",
      role: "Events Head",
      council: "Literary Sub-Council",
      phone: "+91 8005358682",
      linkedin: "https://www.linkedin.com/in/riya-chaurasia-a747b9257/",
      instagram: "#",
      image: "./riya_chaurasiya.png",
    },
    {
      name: "Ujjwal Yaduvanshi",
      role: "Marketing Head",
      council: "Literary Sub-Council",
      phone: "+91 9315054187",
      linkedin: "https://www.linkedin.com/in/ujjwal-kumar-yadav-18989325b",
      instagram: "#",
      image: "./ujjwal_yaduvanshi.jpg",
    },
    {
      name: "Anas Aleem",
      role: "Events Head",
      council: "Literary Sub-Council",
      phone: "+91 8979637774",
      linkedin: "#",
      instagram: "#",
      image: "./anas_aleem.png",
    },
    {
      name: "Anoop Verma",
      role: "Chief Designer",
      council: "Literary Sub-Council",
      phone: "+91 9336854395",
      linkedin: "#",
      instagram: "#",
      image: "./anoop_verma.jpg",
    },
    {
      name: "Aashish Chandra",
      role: "Photography Head",
      council: "Literary Sub-Council",
      phone: "+91 9140625095",
      linkedin: "https://www.linkedin.com/in/ashish-chandra-2149b7257/",
      instagram: "https://www.instagram.com/ashishchandra444",
      image: "./aashish_chandra.jpg",
    },
    {
      name: "Priyanshu",
      role: "Hospitality",
      council: "Literary Sub-Council",
      phone: "+91 9336854395",
      linkedin: "#",
      instagram: "#",
      image: "./priyanshu.png",
    },
    {
      name: "Vaibhav Verma",
      role: "Editor in Chief",
      council: "Literary Sub-Council",
      phone: "+91 7860723834",
      linkedin: "#",
      instagram: "#",
      image: "./vaibhav_verma.jpg",
    },
    {
      name: "Shubham Tyagi",
      role: "Web Dev Head",
      council: "Literary Sub-Council",
      phone: "+91 9528631007",
      linkedin: "https://www.linkedin.com/in/shubham-tyagi-860542264/",
      instagram: "https://www.instagram.com/arise_404_/",
      image: "./shubham.jpg", // Placeholder for image
    },
    {
      name: "Prashant Singh",
      role: "Web Dev Head",
      council: "Literary Sub-Council",
      phone: "+91 7985417276",
      linkedin: "https://www.linkedin.com/in/prashant-singh-269050267/",
      instagram: "https://www.instagram.com/the_red_tshirt_guy/",
      image: "./prashant_singh.jpg", // Placeholder for image
    },
  ];
  

  const TeamHeadCard = ({ member }) => (
    <div className="lg:w-1/3 flex flex-col items-center">
      {/* Profile Image with Circular Glow Effect */}
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Glow Effect Only at the Edges */}
        <div className="absolute inset-0 w-full h-full rounded-full border-[6px] border-transparent bg-gradient-to-r from-gray-700 to-gray-900 blur-md"></div>
        {/* Circular Background */}
        <div className="relative w-40 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={member.image}
            className="w-full h-full object-cover object-top rounded-full"
            alt={member.name}
          />
        </div>
      </div>
  
      {/* Member Details */}
      <h1 className="text-2xl text-center mt-8 text-white">{member.name}</h1>
      <h3 className="text-xl text-center mt-2 text-teal-400">{member.role}</h3>
      <h3 className="text-l text-center mt-1 text-gray-300">{member.council}</h3>
      <p className="mt-2 text-gray-400">
        <a href={`tel:${member.phone}`} className="hover:text-teal-400 transition-colors">
          {member.phone}
        </a>
      </p>
  
      {/* Social Media Links */}
      <div className="flex flex-row mt-3 space-x-4">
        {member.linkedin !== "#" && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-400 hover:text-blue-600 transition-colors" size={24} />
          </a>
        )}
        {member.instagram !== "#" && (
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-400 hover:text-pink-600 transition-colors" size={24} />
          </a>
        )}
      </div>
    </div>
  );
  

  const TeamMemberCard = ({ member }) => (
    <div className="flex flex-col items-center p-6 bg-gray-800 shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300">
      {/* Profile Image */}
      <div className="w-40 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-teal-400">
        <img
          src={member.image}
          className="w-full h-full object-cover object-top"
          alt={member.name}
        />
      </div>
  
      {/* Member Details */}
      <h1 className="text-xl font-bold text-center mt-4 text-white">
        {member.name}
      </h1>
      <h3 className="text-lg text-center mt-2 text-teal-400">{member.role}</h3>
      <h3 className="text-sm text-center mt-1 text-gray-300">{member.council}</h3>
      <p className="mt-2 text-gray-400">
        <a
          href={`tel:${member.phone}`}
          className="hover:text-teal-400 transition-colors"
        >
          {member.phone}
        </a>
      </p>
  
      {/* Social Media Links */}
      <div className="flex flex-row mt-4 space-x-4">
        {member.linkedin !== "#" && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        )}
        {member.instagram !== "#" && (
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-600 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* <motion.div variants={textVariant()}> */}
      <p className={styles.sectionSubText}>The pillars of this Council...</p>
      <h2 className={styles.sectionHeadText}>
        <span className="select-none">Team</span>
      </h2>
      {/* </motion.div> */}

{/* Convener , Secretary , Secretary  */}


      <div className="flex lg:flex-row flex-col gap-8 mt-10 mb-20 m-10">
    {teamHeads.map((member, index) => (
      <TeamHeadCard key={index} member={member} />
    ))}
  </div>

{/* Team Lit */}



{/* with button scroll */}

<div className="mt-10 mb-20 mx-10">
  <Slider
    dots={true} // Show navigation dots
    infinite={true} // Enable infinite scrolling
    speed={500} // Transition speed
    slidesToShow={4} // Number of slides visible at once
    slidesToScroll={1} // Number of slides to scroll at a time
    autoplay={true} // Enable autoplay
    autoplaySpeed={1500} // Time interval between slides (in milliseconds)
    responsive={[
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // For screens smaller than 640px
        settings: {
          slidesToShow: 1,
        },
      },
    ]}
  >
    {teamMembers.map((member, index) => (
      <div key={index} className="p-4">
        <TeamMemberCard member={member} />
      </div>
    ))}
  </Slider>
</div>



      <div className="flex flex-wrap justify-center items-center gap-28 mt-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`flex flex-col gap-6 group relative shadow-lg text-white rounded-3xl p-4 w-full lg:w-[400px] lg:h-[400px] overflow-hidden cursor-pointer bg-white bg-opacity-5 backdrop-blur-sm  border-2 border-pink-300 hover:border-pink-400  ${
              selectedCard === index ? "" : ""
            } hover:scale-110 transition ease-in-out duration-1000 ${
              isScaling ? "scale-100" : ""
            }`}
            onClick={() => handleCardClick(index)} // Toggle selected card on click
          >
            <div className="absolute inset-0 bg-cover bg-center" />
            <div className="absolute inset-0 bg-blue opacity-10 group-hover:opacity-50" />
            <div className="relative flex flex-col gap-3 rounded-xl justify-center items-center">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-2xl font-semibold">{service.title}</h3>

              {/* Content inside the card */}
              <div
                className={`text-center ${
                  selectedCard === index ? "block" : "hidden"
                }`}
              >
                <h2 className="text-2xl text-teal-400">MEMBERS</h2>
                <div className="text-2xl hover:transition ease-in-out duration-1000 max-h-60 overflow-y-auto
                scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
  {service.data()}
</div>
                {/* You can customize the display of service data here */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard !== null && (
        <motion.div
          className=" rounded-lg w-6/12 h-6/12 z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleContainerClick}
        >
          {/* ... your existing code ... */}
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Experience, "team");
