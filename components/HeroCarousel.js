"use client";
import { useState } from "react";

export default function HeroCarousel() {

  const slides = [
    {
      image: "/banner1.jpg",
      title: "SMART IT SOLUTIONS",
      text: "Lorem Ipsum is simply dummy text of the printing industry."
    },
    {
      image: "/banner2.jpg",
      title: "INNOVATIVE TECHNOLOGY",
      text: "We provide scalable and modern IT solutions."
    },
    {
      image: "/banner3.jpg",
      title: "DIGITAL TRANSFORMATION",
      text: "Helping businesses grow with technology."
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[520px] overflow-hidden">

      {/* Background */}
      <img
        src={slides[current].image}
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Box */}
<div className="absolute inset-0 flex items-center justify-start px-30">
  <div className="bg-white p-6 md:p-8 shadow-xl w-full max-w-xl md:max-w-2xl">

    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-4 leading-tight break-words">
      {slides[current].title}
    </h2>

    <p className="text-gray-600 mb-6">
      {slides[current].text}
    </p>

    <button className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition">
      Technology Solutions
    </button>

  </div>
</div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 shadow hover:bg-orange-500 hover:text-white transition"
      >
        ◀
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 shadow hover:bg-orange-500 hover:text-white transition"
      >
        ▶
      </button>

    </section>
  );
}