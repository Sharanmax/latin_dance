"use client";

import "swiper/css";
import "swiper/css/effect-cards";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import Image from "next/image";
//import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import VideoUpload from "@components/videoUpload";

const HireCard = ({
  title,
  description,
  imageSrc,
  backgroundColor,
  imageSize,
}) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        background: backgroundColor,
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: 'center',
        color: '#fff',
        height: '100%',
        maxHeight: '498px',
        p: '46px'
      }}
    >
      {/* Title */}
      <Typography
        sx={{ fontFamily: "Montserrat", fontSize: "40px", fontWeight: "600", mb: '24px' }}
      >
        {title}
      </Typography>

      {/* Image/Icon */}
        <Image
          src={imageSrc}
          alt={title}
          width={imageSize}
          height={'100%'}
          objectFit="contain"
        />

      {/* Description */}
      <Typography
        sx={{ fontFamily: "Montserrat", fontSize: "24px", fontWeight: "500", mt: '24px' }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const HiringCarousel = ({ maxWidth = 650 }) => {
  const cards = [
    {
      title: "Upload Your Dance",
      description: "Share a video link or file of your dance performance.",
      imageSrc: "/assets/Subtract.png",
      imageSize: "234px",
      backgroundColor: "linear-gradient(90deg, #FF512F 0%, #DD2476 100%)",
    },
    {
      title: "Expert Review",
      description: "Reviewed by a Subject Matter Expert for insights.",
      imageSrc: "/assets/Group14.png",
      imageSize: "206px",
      backgroundColor: "linear-gradient(90deg, #36D1DC 0%, #5B86E5 100%)",
    },
    {
      title: "Detailed Feedback",
      description:
        "Receive a report card highlighting strengths and areas to improve.",
      imageSrc: "/assets/Group16.png",
      imageSize: "150px",
      backgroundColor: "linear-gradient(90deg, #205072 0%, #329D9C 100%)",
    },
    {
      title: "Tailored Growth Plan",
      description: "Discover your next steps with a customised dance roadmap.",
      imageSrc: "/assets/Group17.png",
      imageSize: "206px",
      backgroundColor: "linear-gradient(90deg, #AA076B 0%, #61045F 100%)",
    },
  ];

  return (
    <Box sx={{ px: '220px', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', py: '24px', }}>
      <Box sx={{ ml: '80px'}}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="select-none"
          style={{ maxWidth: `${maxWidth}px`, }}
          loop={true}
          autoplay={{ delay: 1200, pauseOnMouseEnter: true }}
        >
          {cards.map((card, index) => (
            <SwiperSlide
              key={index}
              style={{
                borderRadius: "32px",
              }}
            >
              <HireCard {...card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ mr: '80px'}}>
        <VideoUpload />
      </Box>
    </Box>
  );
};

export default HiringCarousel;