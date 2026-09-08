'use client';

import { useEffect, useState } from "react";
import sliderData from "@/lib/sliderData";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import DotButtons from "@/lib/dotButtons";

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
      }),
    ]
  );

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(
        emblaApi.selectedScrollSnap()
      );
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index) => {
    emblaApi?.scrollTo(index);
  };

  const openModal = (item) => {
  setSelectedItem(item);

  setTimeout(() => {
    setModalOpen(true);
  }, 10);
};

const closeModal = () => {
  setModalOpen(false);

  setTimeout(() => {
    setSelectedItem(null);
  }, 300);
};

  return (
    <div
      className="
        relative
        left-1/2
        -translate-x-1/2
        w-[130%]
        max-w-none
      "
    >
      {/* CAROUSEL */}
      <div
        ref={emblaRef}
        className="
          w-full
          overflow-hidden
        "
      >
        {/* CONTENEDOR DE SLIDES */}
        <div className="flex -ml-3">
          {sliderData?.map((item) => (
            /* SLIDE */
            <div
              key={item.id}
              className="
                min-w-0
                shrink-0
                basis-1/3
                pl-3
              "
            >
              {/* CARD */}
              <div
                className={`
                  relative
                  h-64
                  overflow-hidden
                  rounded-3xl
                  border
                  ${item.bgColor}
                  `}
                
              >
                {/* IMAGEN */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-[45%]
                    h-full
                    object-cover
                    p-5
                  "
                />

                {/* INFORMACIÓN */}
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    w-[55%]
                    h-full
                    p-5
                    flex
                    flex-col
                    justify-center
                  "
                >
                  {/* TÍTULO */}
                  <h3
                    className={`
                      text-xl
                      font-extrabold
                      mb-3
                    ${item.titleColor}`}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPCIÓN */}
                  <p
                    className="
                      text-gray-700
                      text-lg
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* BOTÓN */}
                <button
                  onClick={() => openModal(item)}
                  className="
                    absolute
                    bottom-4
                    right-4
                    w-11
                    h-11
                    rounded-full
                    bg-gray-800
                    text-white
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    hover:bg-teal-700
                    transition
                  "
                >
                  ›
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <DotButtons
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        scrollTo={scrollTo}
      />

      {selectedItem && (
      <div
        className={`
          fixed
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          z-50
          
          w-1/3
          p-8

          bg-white
          rounded-3xl
          shadow-2xl

          transition-all
          duration-300
          ease-in-out

          ${
            modalOpen
              ? "-translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
              : "-translate-x-1/2 -translate-y[-45%] scale-90 opacity-0"
            }
        `}
      >
        <button
            onClick={closeModal}
            className="
              absolute
              top-4
              right-5
              text-3xl
              text-black
              cursor-pointer
            "
          >
            ×
          </button>
              <h1 className="
                text-black 
                font-bold 
                text-3xl 
                text-center
                p-5
              ">
                {selectedItem.descriptionTitle}
              </h1>

               <p className="
                  text-black 
                  leading-relaxed 
                  text-xl 
                  text-center
                  p-5
                  ">
                {selectedItem.longDescription}
              </p>
       </div> 
    )}
    </div>
  );
}