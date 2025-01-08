import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";

export const MeetTheTeam = () => {
  // Add this team members data array
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      image: "/path/to/image2.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Lead Developer",
      image: "/path/to/image3.jpg",
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "UX Designer",
      image: "/path/to/image4.jpg",
    },
    {
      id: 5,
      name: "David Brown",
      position: "Product Manager",
      image: "/path/to/image5.jpg",
    },
    {
      id: 6,
      name: "Emily Davis",
      position: "Marketing Director",
      image: "/path/to/image6.jpg",
    },
    {
      id: 7,
      name: "Alex Turner",
      position: "Senior Developer",
      image: "/path/to/image7.jpg",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      position: "UI Designer",
      image: "/path/to/image8.jpg",
    },
  ];

  return (
    <div className="meet">
      <h1 className="meet-head">Meet the team</h1>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={100}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-member">
                <img
                  src={member.image}
                  alt={member.name + " " + member.position}
                />
              </div>
              {/* <h3>{member.name}</h3>
              <p>{member.position}</p> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};
