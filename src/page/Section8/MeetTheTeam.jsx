import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Team1 from "../../assets/team/arunCreativeHead.jpg";
import Team2 from "../../assets/team/ashiqWebdeveloper.jpg";
import Team3 from "../../assets/team/ashrafceo.jpg";
import Team4 from "../../assets/team/arunOperationHead.jpg";
import Team5 from "../../assets/team/hibaProductionManager.jpg";
import Team6 from "../../assets/team/niyasVideoEditor.jpg";
import Team7 from "../../assets/team/safnaAccounts.jpg";
import Team8 from "../../assets/team/sheethalCrm.jpg";
import Team9 from "../../assets/team/shahalContentCreator.jpg";
import Team10 from "../../assets/team/shahidGraphicDesigner.jpg";
import Team11 from "../../assets/team/nikhilsrGraphicDesigner.jpg";

export const MeetTheTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ashraf",
      position: "CEO",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987050/ashrafceo_n2bbx0.jpg",
        Team3,
    },
    {
      id: 2,
      name: "Akhil",
      position: "OPERATION HEAD",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987044/arunOperationHead_tncqso.jpg",
        Team4,
    },
    {
      id: 3,
      name: "Hiba",
      position: "PRODUCTION MANAGER",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987042/hibaProductionManager_skotsv.jpg",
        Team5,
    },
    {
      id: 4,
      name: "Sheethal",
      position: "CRM",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987041/sheethalCrm_idgo2q.jpg",
        Team8,
    },
    {
      id: 5,
      name: "Arun",
      position: "CREATIVE HEAD",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987045/arunCreativeHead_poywrm.jpg",
        Team1,
    },
    {
      id: 6,
      name: "Ashiq",
      position: "WEB DEVELOPER",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987069/ashiqWebdeveloper_whdfj4.jpg",
        Team2,
    },
    {
      id: 7,
      name: "Safna",
      position: "ACCOUNTS",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987072/safnaAccounts_trhozu.jpg",
        Team7,
    },
    {
      id: 8,
      name: "Niyas",
      position: "VIDEO EDITOR",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987066/niyasVideoEditor_k0ewdb.jpg",
        Team6,
    },

    {
      id: 9,
      name: "Nikhil",
      position: "SR. GRAPHIC DESIGHNER",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987044/nikhilsrGraphicDesigner_huq3tr.jpg",
        Team11,
    },

    {
      id: 10,
      name: "Shahal",
      position: "CONTENT CREATOR",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987045/shahalContentCreator_u8ic7h.jpg",
        Team9,
    },

    {
      id: 11,
      name: "Shahid",
      position: "GRAPHIC DESIGNER",
      image:
        // "https://res.cloudinary.com/ddp7f64w0/image/upload/v1737987042/shahidGraphicDesigner_idecbb.jpg",
        Team10,
    },
    {
      id: 12,
      name: "Salman",
      position: "GRAPHIC DESIGNER",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1747458515/Img2_z2osnc.png",
    },
    {
      id: 13,
      name: "Shehin",
      position: "GRAPHIC DESIGNER",
      image:
        "https://res.cloudinary.com/dzuqczvb7/image/upload/v1747458516/Img_e3mrfx.png",
    },
  ];

  const swiperRef = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="meet" aria-label="Meet the team section">
      <h2 className="meet-head" aria-label="Meet the team title">
        Meet the team
      </h2>
      <article className="swiper-container" aria-label="Swiper container">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={4}
          spaceBetween={100}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          touchRatio={1.5}
          touchAngle={30}
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
              slidesPerView: 3,
              spaceBetween: 10,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 20,
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
              <div
                className={`team-member ${isHovered ? "can-hover" : ""}`}
                aria-label="Team member"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
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
