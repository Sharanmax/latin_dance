"use client";

import "swiper/css";
import "swiper/css/effect-cards";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/router";

const HireCard = ({
  title,
  description,
  subtitles,
  imageSrc,
  buttonText,
  ctaTextColor,
  backgroundColor,
  imageSize,
  pathname,
}) => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div
      className="flex flex-row items-center justify-center relative overflow-hidden  p-12 h-[450px] "
      style={{ background: backgroundColor }}
    >
      <div className="max-w-[60%]">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-sm font-medium text-white mb-3">{description}</p>
        {Object.entries(subtitles).map(([subtitle, subdescription], index) => (
          <div key={index} className="mb-3 max-w-[95%]">
            <h4 className="text-md font-semibold text-white">{subtitle}</h4>
            <p className="text-xs font-normal text-white">{subdescription}</p>
          </div>
        ))}
        {isHome && (
          <Link href={pathname}>
            <button
              className="flex justify-center items-center space-x-2 text-sm font-bold bg-white rounded-lg py-3.5 w-[200px] mt-8"
              style={{ color: ctaTextColor }}
              aria-label={buttonText}
            >
              <span>{buttonText}</span>
              <FiArrowRight size={24} />
            </button>
          </Link>
        )}
      </div>

      <div className="flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={imageSize}
          height={imageSize}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

const HiringCarousel = ({ maxWidth = 650 }) => {
  const cards = [
    {
      title: "One Day Job",
      description:
        "Need a chef or hospitality expert for a single-day event? Our One Day Job feature connects you with professionals for birthdays, festivals, and more.",
      subtitles: {
        "Affordable Rates":
          "Access skilled chefs and staff at competitive prices, ensuring quality service that fits your budget.",
        "Verified Professionals":
          "Rest easy knowing all professionals are vetted to ensure quality and safety in your home.",
      },
      imageSrc: "/assets/home/images/homeFood.png",
      buttonText: "Hire for One Day",
      ctaTextColor: "#F57A2B",
      backgroundColor: "linear-gradient(270deg, #FAB005 0%, #F47620 100%)",
      imageSize: 435,
      pathname: "/horecah/vc-list/jobseeker",
    },
    {
      title: "Niche Job Titles",
      description:
        "Find specialized professionals not available on other platforms, from pastry chefs to inventory managers.",
      subtitles: {
        "Bulk Hiring Made Easy":
          "Need a large team fast? Reach out to us for streamlined bulk hiring solutions",
      },
      imageSrc: "/assets/home/images/homeAllJobs.png",
      buttonText: "Post Job",
      ctaTextColor: "#8E6BEA",
      backgroundColor: "linear-gradient(180deg, #D397FA 0%, #8364E8 100%)",
      imageSize: 434,
      pathname: "/users/role-selection",
    },
    {
      title: "Access to Global Suppliers",
      description:
        "Join a marketplace where you can connect with suppliers from around the world,",
      subtitles: {},
      imageSrc: "/assets/home/images/homeglobe.png",
      buttonText: "Find Supplier",
      ctaTextColor: "#4390D3",
      backgroundColor: "linear-gradient(180deg, #87EA9A 0%, #367FDE 100%)",
      imageSize: 457,
      pathname: "/horecah/vc-list/supplier",
    },
    {
      title: "Promote Yourself",
      description:
        "Maximize your reach by running targeted ads directly within the platform, boosting visibility to potential clients and staff in the hospitality industry.",
      subtitles: {},
      imageSrc: "/assets/home/images/homeAds.png",
      buttonText: "Run Ads",
      ctaTextColor: "#FF6D6B",
      backgroundColor: "linear-gradient(180deg, #FF8999 0%, #FBCB98 100%)",
      imageSize: 144,
      pathname: "/users/role-selection",
    },
  ];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      className="select-none"
      style={{ maxWidth: `${maxWidth}px` }}
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
  );
};

export default HiringCarousel;