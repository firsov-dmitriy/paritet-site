"use client";

import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./styles.css";
import Box from "@mui/material/Box";

function Slider() {
  const images = ["beton.jpeg", "beton2.webp", "beton2.jpeg", "beton3.jpeg"];
  return (
    <Swiper
      pagination={{
        type: "bullets",
      }}
      navigation
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <Box
            sx={{
              padding: { xs: "30px 0", md: "50px" },
            }}
          >
            <Image
              alt={image}
              src={`/images/${image}`}
              width={500}
              height={500}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(Slider);
