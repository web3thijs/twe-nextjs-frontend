import Title from "../../shared/Title";
import Image from "next/image";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../shared/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";
import React, { useRef } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function References() {
  const swiperSlideClass = "";
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="container">
        <div className="grid">
          <Title
            small={"Realisaties"}
            big={"Recente projecten"}
            outline="center"
          ></Title>
        </div>
        <div className="h-[12rem] max-w-[18rem] xs:h-[26rem] xs:max-w-[48rem] mx-auto">
          <Swiper
            spaceBetween={30}
            pagination={{
              type: 'fraction',
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="w-sm h-full flex overflow-x-hidden mt-6 rounded-lg"
          >
            <SwiperSlide className={swiperSlideClass}>
              <Image
                objectFit="cover"
                layout="fill"
                src={"/references/2.jpg"}
                alt="ref2"
              ></Image>
            </SwiperSlide>
            <SwiperSlide className={swiperSlideClass}>
              <Image
                objectFit="cover"
                layout="fill"
                src={"/references/1.jpg"}
                alt="ref1"
              ></Image>
            </SwiperSlide>
            <SwiperSlide className={swiperSlideClass}>
              <Image
                objectFit="cover"
                layout="fill"
                src={"/references/3.jpg"}
                alt="ref3"
              ></Image>
            </SwiperSlide>
            <SwiperSlide className={swiperSlideClass}>
              <Image
                objectFit="cover"
                layout="fill"
                src={"/references/4.jpg"}
                alt="ref4"
              ></Image>
            </SwiperSlide>
            <SwiperSlide className={swiperSlideClass}>
              <Image
                objectFit="cover"
                layout="fill"
                src={"/references/5.jpg"}
                alt="ref5"
              ></Image>
            </SwiperSlide>
            <SwiperSlide className={swiperSlideClass}>
              <Image
                objectFit="cover"
                layout="fill"
                src={"/references/6.jpg"}
                alt="ref6"
              ></Image>
            </SwiperSlide>
            <SwiperSlide className={swiperSlideClass}>
              <Image
                objectFit="cover"
                layout="fill"
                src={"/references/7.jpg"}
                alt="ref7"
              ></Image>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default References;
