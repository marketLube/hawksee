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
      name: "ASHRAF",
      position: "CEO",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027272/ashrafceo_vup4vc.jpg",
    },
    {
      id: 2,
      name: "ARUN",
      position: "OPERATION HEAD",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027276/arunOperationHead_v8acfy.jpg",
    },
    {
      id: 3,
      name: "HIBA",
      position: "PRODUCTION MANAGER",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027271/hibaProductionManager_gq380p.jpg",
    },
    {
      id: 4,
      name: "SHEETHAL",
      position: "CRM",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027271/sheethalCrm_kfsuwv.jpg",
    },
    {
      id: 5,
      name: "ARUN",
      position: "CREATIVE HEAD",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027272/arunCreativeHead_asx7qz.jpg",
    },
    {
      id: 6,
      name: "ASHIQ",
      position: "WEB DEVELOPER",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027272/ashiqWebdeveloper_m7xdqo.jpg",
    },
    {
      id: 7,
      name: "SAFNA",
      position: "ACCOUNTS",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027272/safnaAccounts_g445k3.jpg",
    },
    {
      id: 8,
      name: "NIYAS",
      position: "VIDEO EDITOR",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027272/niyasVideoEditor_ympdqh.jpg",
    },

    {
      id: 9,
      name: "NIKHIL",
      position: "SR. GRAPHIC DESIGHNER",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027271/nikhilsrGraphicDesigner_sgjccg.jpg",
    },

    {
      id: 10,
      name: "SHAHAL",
      position: "CONTENT CREATOR",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027271/shahalContentCreator_cqqbjy.jpg",
    },

    {
      id: 11,
      name: "SHAHID",
      position: "GRAPHIC DESIGNER",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1737027271/shahidGraphicDesigner_lbzxts.jpg",
    },
  ];

  return (
    <div className="meet">
      <h1 className="meet-head">Meet the team</h1>
      <div className="swiper-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={100}
          // freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
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
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
