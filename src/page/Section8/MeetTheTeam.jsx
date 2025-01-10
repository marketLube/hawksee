import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import Avatar from "../../assets/60111.jpg";

import { FreeMode, Pagination } from "swiper/modules";

export const MeetTheTeam = () => {
  // Add this team members data array
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO",
      image: "Avatar",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "CTO",
      image: "Avatar",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "Lead Developer",
      image: "Avatar",
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "UX Designer",
      image: "Avatar",
    },
    {
      id: 5,
      name: "David Brown",
      position: "Product Manager",
      image: "Avatar",
    },
    {
      id: 6,
      name: "Emily Davis",
      position: "Marketing Director",
      image: "Avatar",
    },
    {
      id: 7,
      name: "Alex Turner",
      position: "Senior Developer",
      image: "Avatar",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      position: "UI Designer",
      image: "Avatar",
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
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};
