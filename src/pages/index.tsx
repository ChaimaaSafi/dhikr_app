import Dhikr from "@/components/dhikr";
import Hadith from "@/components/hadith";
import Verse from "@/components/verse";
import React, { useState } from "react";

export default function Home() {
  const [type, setType] = useState<string>("Verse");

  return (
    <section className="flex max-h-screen w-full flex-col">
      <div className={`absolute w-[58%] left-0 h-full bg`}></div>
      <div className="z-50 mx-auto flex h-screen w-full max-w-[1300px] flex-col items-center justify-center px-10">
        <div className="relative mx-auto flex w-full h-[700px] bg-gray-1 rounded-2xl py-10 shadow-lg">
          <div
            className="absolute -right-14 w-32 h-32 rounded-full flex justify-center items-center bg-brown-1 border 
          border-black cursor-pointer"
            onClick={() => setType("Verse")}
          >
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-white text-2xl">Verse</h1>
              <h1 className="text-white text-2xl font-Gulzar">آية</h1>
            </div>
          </div>
          <div
            className="absolute top-[40%] -right-14 w-32 h-32 rounded-full flex justify-center items-center bg-brown-1 border 
          border-black cursor-pointer"
            onClick={() => setType("Hadith")}
          >
            <div className="flex flex-col items-center space-y-2">
              <h1 className="text-white text-2xl">Hadith</h1>
              <h1 className="text-white text-2xl font-Gulzar">حديث</h1>
            </div>
          </div>
          <div
            className="absolute bottom-10 -right-14 w-32 h-32 rounded-full flex justify-center items-center bg-brown-1 border
          border-black cursor-pointer"
            onClick={() => setType("Dhikr")}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-white text-2xl">Dhikr</h1>
              <h1 className="text-white text-2xl font-Gulzar mt-3">ذكر</h1>
            </div>
          </div>
          <div className="w-full max-w-[1000px] rounded-3xl py-20 mx-auto overflow-scroll">
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
    </section>
  );
}
