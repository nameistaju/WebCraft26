import React from 'react';
import { assetMap } from '../assets/assetMap';

export default function ShowcaseSlider() {
  const items = [
    {
      id: 1,
      image: assetMap.showcase.shot6GummyCanister,
      title: "Vitabun",
      category: "Packaging & 3D",
      bg: "#E1FAEA",
    },
    {
      id: 2,
      image: assetMap.showcase.shot1Basketball,
      title: "Street Culture",
      category: "Photography & Film",
    },
    {
      id: 3,
      image: assetMap.showcase.shot2Dining,
      title: "Dining Stories",
      category: "Illustration & Brand",
    },
    {
      id: 4,
      image: assetMap.showcase.shot4Skate,
      title: "Urban Motion",
      category: "Art Direction",
    },
    {
      id: 5,
      image: assetMap.showcase.shot5Urban,
      title: "Sound Identity",
      category: "Brand Expression",
    },
  ];

  return (
    <section className="relative w-full bg-[#F8EEE8] py-8 overflow-hidden">
      {/* 3-Column Desktop / Horizontal Scrolling Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.slice(0, 3).map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: item.bg || 'transparent' }}
              className="group relative aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-sm transition-transform duration-500 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
