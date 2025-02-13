import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "ASHRAF",
      position: "CEO",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987050/ashrafceo_n2bbx0.jpg",
    },
    {
      id: 2,
      name: "Akhil",
      position: "OPERATION HEAD",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987044/arunOperationHead_tncqso.jpg",
    },
    {
      id: 3,
      name: "HIBA",
      position: "PRODUCTION MANAGER",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987042/hibaProductionManager_skotsv.jpg",
    },
    {
      id: 4,
      name: "SHEETHAL",
      position: "CRM",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987041/sheethalCrm_idgo2q.jpg",
    },
    {
      id: 5,
      name: "ARUN",
      position: "CREATIVE HEAD",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987045/arunCreativeHead_poywrm.jpg",
    },
    {
      id: 6,
      name: "ASHIQ",
      position: "WEB DEVELOPER",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987069/ashiqWebdeveloper_whdfj4.jpg",
    },
    {
      id: 7,
      name: "SAFNA",
      position: "ACCOUNTS",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987072/safnaAccounts_trhozu.jpg",
    },
    {
      id: 8,
      name: "NIYAS",
      position: "VIDEO EDITOR",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987066/niyasVideoEditor_k0ewdb.jpg",
    },

    {
      id: 9,
      name: "NIKHIL",
      position: "SR. GRAPHIC DESIGHNER",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987044/nikhilsrGraphicDesigner_huq3tr.jpg",
    },

    {
      id: 10,
      name: "SHAHAL",
      position: "CONTENT CREATOR",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987045/shahalContentCreator_u8ic7h.jpg",
    },

    {
      id: 11,
      name: "SHAHID",
      position: "GRAPHIC DESIGNER",
      image:
        "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987042/shahidGraphicDesigner_idecbb.jpg",
    },
  ];

  return (
    <div className="meet" aria-label="Meet the team section">
      <h2 className="meet-head" aria-label="Meet the team title">
        Meet the team
      </h2>
      <article className="swiper-container" aria-label="Swiper container">
        <Swiper
          slidesPerView={4}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
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
              slidesPerView: 3.5,
              spaceBetween: 100,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {teamMembers.map((member) => (
            <SwiperSlide
              key={member.id}
              aria-label={`Team member ${member.name}`}
            >
              <div className="team-member" aria-label="Team member">
                <img
                  src={member.image}
                  alt={member.name + " " + member.position}
                  aria-label={`Team member ${member.name}`}
                />
              </div>
              <h3 aria-label={`Team member name ${member.name}`}>
                {member.name}
              </h3>
              <p aria-label={`Team member position ${member.position}`}>
                {member.position}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </div>
  );
};
