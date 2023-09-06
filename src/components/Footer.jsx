import React from "react";
import { BsFacebook } from "react-icons/bs";
import { Facebook } from "./Icons/Facebook";
import { Instagram } from "./Icons/Instagram";
import { Youtube } from "./Icons/Youtube";
import { Pintrest } from "./Icons/Pintrest";

const Footer = () => {
  return (
    <>
      {/* <hr /> */}
      <div className="mt-16  ">
        <h1 className="text-center text-5xl font-semibold py-3">
          Lets Connect
        </h1>
        <div className="container flex justify-between items-center gap-2 py-3 px-5 ">
          <div className="flex gap-2 p">
            <a href="#" className="text-base sm:text-lg font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-base sm:text-lg font-medium">
              | Terms And Conditions
            </a>
          </div>
          <div className="grid gap-x-2">
            <h1 className="text-base sm:text-lg font-medium underline underline-offset-2 whitespace-nowrap">
              CONTACT US
            </h1>
            <div className="flex gap-x-2">
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Instagram />
              </a>
              <a href="#">
                <Youtube />
              </a>
              <a href="#">
                <Pintrest />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
