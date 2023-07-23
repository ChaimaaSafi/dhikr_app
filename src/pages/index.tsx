import Dhikr from "@/components/dhikr";
import Hadith from "@/components/hadith";
import Verse from "@/components/verse";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import contact from "@/public/assets/mail.png";
import DropDown from "@/components/core/DropDown";
import { getViews, updatViews } from "./api/views";
import { useQuery } from "@tanstack/react-query";
import View from "@/icons/View";

export default function Home() {
  const [type, setType] = useState<string>("Verse");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data: views, isLoading } = useQuery(["Views"], getViews);
  const buttRef = useRef<any>(null);


  return (
    <section className="flex max-h-screen w-full flex-col">
      <div className={`absolute w-full lg:w-[58%] left-0 h-full bg`}></div>
      <div className="relative flex justify-end items-center px-3 md:px-10 w-full space-x-2 h-auto py-4 md:h-[80px]">
        <div className="flex w-full justify-between items-center  md:hidden">
          <h1 className="text-white text-sm md:text-base font-medium">
            Created by{" "}
            <a
              className="font-medium text-amber-100"
              href="https://www.chaimaasafi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chaimaa Safi
            </a>
          </h1>
          <a className="text-white text-sm" href="mailto:heychaimaa@gmail.com">
            Contact Me
          </a>
        </div>
        <div className="hidden md:flex md:items-center md:justify-end md:w-full h-[50px] py-5 ">
          <DropDown
            text="heychaimaa@example.ma"
            open={isOpen}
            closeDropDown={() => setIsOpen(!isOpen)}
            buttonRef={buttRef}
            className="w-[350px]"
          />
        </div>
        <div
          className="md:cursor-pointer hidden md:flex"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={contact}
            alt="contact-alt"
            className="w-10 h-10 hover:bg-brown-2 hover:bg-opacity-10 hover:rounded-full"
            ref={buttRef}
          />
        </div>
      </div>

      <div className="z-50 py-8 lg:mx-auto flex h-screen w-full lg:max-w-[950px] xl:max-w-[1300px] flex-col items-center justify-center lg:px-10 px-2 ">
        <div className="lg:relative lg:mx-auto flex  flex-col w-full h-[600px] md:max-h-[90%] bg-gray-1 rounded-2xl py-5 lg:py-10 shadow-lg justify-center items-center px-3">
          <div className="flex w-full items-center space-x-5  py-5 lg:hidden">
            <h1
              className={`text-brown-1 text-base font-semibold ${
                type === "Verse" && "border-brown-2 border-b-2"
              }`}
              onClick={() => setType("Verse")}
            >
              Verse
            </h1>
            <h1
              className={`text-brown-1 text-base font-semibold ${
                type === "Hadith" && "border-brown-2 border-b-2"
              }`}
              onClick={() => setType("Hadith")}
            >
              Hadith
            </h1>
            <h1
              className={`text-brown-1 text-base font-semibold ${
                type === "Dhikr" && "border-brown-2 border-b-2"
              }`}
              onClick={() => setType("Dhikr")}
            >
              Dhikr
            </h1>
          </div>
          <div
            className={`hidden lg:absolute lg:-right-14 hover:border-brown-2 hover:border-2 hover:shadow-brown-2 hover:shadow-lg lg:w-32 lg:h-32 lg:top-[35px] lg:rounded-full lg:flex lg:justify-center lg:items-center lg:bg-brown-1 lg:border 
          lg:border-black lg:cursor-pointer ${
            type === "Verse"
              ? "lg:border-brown-2 lg:border-2 shadow-lg  shadow-brown-2"
              : "lg:border-black lg:border"
          }`}
            onClick={() => setType("Verse")}
          >
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-white text-2xl">Verse</h1>
              <h1 className="text-white text-2xl font-Gulzar">آية</h1>
            </div>
          </div>
          <div
            className={`hidden  lg:absolute lg:top-[40%] hover:border-brown-2 hover:border-2 hover:shadow-brown-2 hover:shadow-lg lg:-right-14 lg:w-32 lg:h-32 lg:rounded-full lg:flex lg:justify-center lg:items-center lg:bg-brown-1 
           lg:cursor-pointer ${
             type === "Hadith"
               ? "lg:border-brown-2 lg:border-2 shadow-lg shadow-brown-2"
               : "lg:border-black lg:border"
           }`}
            onClick={() => setType("Hadith")}
          >
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-white text-2xl">Hadith</h1>
              <h1 className="text-white text-2xl font-Gulzar">حديث</h1>
            </div>
          </div>
          <div
            className={`hidden  lg:absolute hover:shadow-brown-2 hover:border-brown-2 hover:border-2 hover:shadow-lg lg:bottom-10 lg:-right-14 lg:w-32 lg:h-32 lg:rounded-full lg:flex lg:justify-center lg:items-center lg:bg-brown-1 lg:border
          lg:border-black lg:cursor-pointer  ${
            type === "Dhikr"
              ? "lg:border-brown-2 lg:border-2 shadow-lg shadow-brown-2"
              : "lg:border-black lg:border"
          }`}
            onClick={() => setType("Dhikr")}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-white text-2xl">Dhikr</h1>
              <h1 className="text-white text-2xl font-Gulzar mt-3">ذكر</h1>
            </div>
          </div>
          <div className="w-full flex flex-col lg:max-w-[700px] xl:max-w-[1000px] md:rounded-3xl  py-10  md:mt-0 lg:mx-auto overflow-scroll md:h-full">
            {type === "Verse" ? (
              <Verse />
            ) : type === "Hadith" ? (
              <Hadith />
            ) : (
              <Dhikr />
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:absolute md:block md:bottom-0 py-2 px-5 text-white text-sm md:text-base font-medium">
        <h1>
          Created by{" "}
          <a
            className="font-medium text-amber-100 px-1"
            href="https://www.chaimaa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chaimaa
          </a>
        </h1>
      </div>
    </section>
  );
}
