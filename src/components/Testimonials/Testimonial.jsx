import React from "react";
import styles from "./testimonial.module.css";
import { testimonials } from "./data";
const Testimonial = () => {
  return (
    <div className="my-10 container mx-auto">
      <h1 className="text-center text-5xl font-semibold ">Testimonials</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-5 mt-7">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="border-[1px]  px-3 py-2 rounded-lg shadow-sm shadow-white mt-5 bg-gradient-to-r from-blue-950 opacity-90"
          >
            <div>
              <img
                className="w-12 h-12 rounded-full mb-2"
                src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg?w=740&t=st=1693672096~exp=1693672696~hmac=b58bdac810cee4546a733d65c040254bbb51071519dba93f694d949c3802d0af"
                alt=""
              />
            </div>
            <h1 className="text-lg underline underline-offset-2	">
              {item.name}
            </h1>
            <p className="text-sm font-sans tracking-wide">{item.detail}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonial;
