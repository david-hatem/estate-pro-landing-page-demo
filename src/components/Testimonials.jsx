import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import TextGrey from "./TextGrey";
import Comment from "../assets/svg/bi_chat-quote-fill.svg";

const testimonials = [
  {
    text: "Estate Pro a totalement transformé notre façon de gérer les prospects et clients. Nous voyons déjà une amélioration significative dans nos taux de conversion",
    name: "Sarah Alaoui",
    title: "Marketing Manager",
    image: "https://via.placeholder.com/80", // Replace with actual image URLs
  },
  {
    text: "L'interface est tellement intuitive que même mes employés les moins technophiles l'ont adoptée rapidement",
    name: "Reda Mansouri",
    title: "Utilisateur Estate Pro",
    image: "https://via.placeholder.com/80", // Replace with actual image URLs
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const prevDesktopRef = useRef(null);
  const nextDesktopRef = useRef(null);

  useEffect(() => {
    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    prevRef.current.addEventListener("click", () => slider.prev());
    nextRef.current.addEventListener("click", () => slider.next());
    prevDesktopRef.current.addEventListener("click", () => slider.prev());
    nextDesktopRef.current.addEventListener("click", () => slider.next());

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section className="bg-[#F2F5F8] mx-auto max-w-7xl px-2 sm:px-16 lg:px-20">
      <div className="max-w-[1340px] py-12 lg:me-0 lg:py-16 lg:pe-0 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="mb-4">
              <TextGrey text="Testimonials" l={true} />
            </div>
            <h2 className="lg:text-5xl sm:text-4xl md:text-4xl font-bold mb-4 text-left">
              Ce Que Disent <br /> Nos{" "}
              <span className="text-orange-500">Clients</span>
            </h2>
            <p className="text-gray-500 mb-8 text-left">
              Lisez Plus de Témoignages
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                ref={prevDesktopRef}
                className="rounded-full border border-[#f97316] p-3 text-[#f97316] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                ref={nextDesktopRef}
                className="rounded-full border border-[#f97316] p-3 text-[#f97316] transition"
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((t) => (
                <div className="keen-slider__slide">
                  <blockquote className="flex h-full flex-col justify-between sm:p-8 lg:p-12">
                    <img src={Comment} className="w-10" />
                    <div>
                      <div className="mt-4">
                        <p className="mt-4 leading-relaxed text-gray-700 font-semibold">
                          {t.text}
                        </p>
                      </div>
                      <div className="flex items-center gap-5 mt-6">
                        {/* <div>
                          <img src={t.image} className="rounded-full" />
                        </div> */}
                        <div>
                          <p className="font-bold">{t.name}</p>
                          <p className="text-[#474747] font-medium">
                            {t.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </blockquote>
                </div>
              ))}

              {/* Add more slides as needed */}
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-8 flex gap-4 justify-center">
          <button
            aria-label="Previous slide"
            ref={prevRef}
            className="rounded-full border border-[#f97316] p-3 text-[#f97316] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            ref={nextRef}
            className="rounded-full border border-[#f97316] p-3 text-[#f97316] transition"
          >
            <svg
              className="size-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
