"use client";
import React, { useEffect, useRef, useState } from "react";
import dataSlider from "./Slider.data.mocks";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { randomKey } from "@/utils/randomKey";
import Image from "next/image";

interface SliderProps {
  id?: string;
  arrow?: boolean;
  type?: "default" | "dots" | "dotsWithImage" | "text";
}

const Slider: React.FC<SliderProps> = ({
  id = "sliders",
  arrow = true,
  type = "default",
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sliderData, setSliderData] = useState(dataSlider.imgs[0]);
  const slideRef = useRef<HTMLDivElement>(null);

  // Slider geçiş efekti için sınıf ekleme
  const removeAnimation = () => {
    if (slideRef.current) {
      slideRef.current.classList.remove("slide-anim", "slide-out");
    }
  };

  useEffect(() => {
    const handleSlideTransition = () => {
      if (slideRef.current) {
        slideRef.current.addEventListener("animationend", removeAnimation);
        slideRef.current.addEventListener("mouseenter", pauseSlider);
        slideRef.current.addEventListener("mouseleave", startSlider);
      }
    };

    handleSlideTransition();
    startSlider();

    return () => {
      pauseSlider();
      if (slideRef.current) {
        slideRef.current.removeEventListener("animationend", removeAnimation);
        slideRef.current.removeEventListener("mouseenter", pauseSlider);
        slideRef.current.removeEventListener("mouseleave", startSlider);
      }
    };
  }, []);

  // Slider otomatik geçiş başlatma
  let slideInterval: NodeJS.Timeout;
  const startSlider = () => {
    slideInterval = setInterval(() => {
      sliderArrow(true);
    }, 5000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleClick = (index: number) => {
    const slider = dataSlider.imgs[index];
    setSliderData(slider);
    setCurrentIndex(index);
    if (slideRef.current) {
      slideRef.current.classList.add("fade-anim");
    }
  };

  const sliderArrow = (next: boolean) => {
    let index = next ? currentIndex + 1 : currentIndex - 1;
    if (index < 0) index = dataSlider.imgs.length - 1;
    if (index >= dataSlider.imgs.length) index = 0;

    setSliderData(dataSlider.imgs[index]);
    setCurrentIndex(index);

    if (slideRef.current) {
      slideRef.current.classList.add("fade-anim");
    }
  };

  return (
    <div id={id} className="my-4 relative">
      <div ref={slideRef} className="relative overflow-hidden rounded-md">
        <a href={sliderData.link}>
          <Image
            src={sliderData.value}
            height={300}
            width={1460}
            alt={sliderData.altIamgeText}
            className=" duration-1000 rounded-t-md"
            layout="intrinsic"
          />
        </a>
        {sliderData.title && (
          <div className="absolute top-1/2 left-14 transform -translate-y-1/2 bg-white p-4 rounded-md">
            <div className="text-lg">{sliderData.title}</div>
            <div className="text-sm">{sliderData.description}</div>
          </div>
        )}
      </div>

      {type === "dots" && (
        <div className="flex justify-center mt-2">
          {dataSlider.imgs.map((data, i) => (
            <button
              key={randomKey()}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentIndex === i ? "bg-orange-500" : "bg-gray-500"
              }`}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      )}

      {arrow && (
        <>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={() => sliderArrow(false)}
          >
            <FaArrowLeft size={30} />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={() => sliderArrow(true)}
          >
            <FaArrowRight size={30} />
          </button>
        </>
      )}
    </div>
  );
};

export default Slider;
