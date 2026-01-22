"use client";

import { useEffect, useState } from "react";

const images = [
  "/hero/hero-bg.png",
  "/hero/hero-bg1.png",
  "/hero/hero-bg2.png",
];

export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 секунд

    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
}