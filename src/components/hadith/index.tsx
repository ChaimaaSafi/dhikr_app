import { getHadith } from "@/pages/api";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/spinner";

const CACHE: any = {};

function Hadith() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (CACHE["hadiths"] !== undefined) {
      setData(CACHE["hadiths"]);
      setLoading(false);
    } else {
      getHadith()
        .then((response) => {
          setLoading(false);
          const randomNum = Math.floor(Math.random() * 25);
          CACHE["hadiths"] = response?.data.hadiths?.data[randomNum];
          setData(response?.data.hadiths?.data[randomNum]);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, []);

  return loading ? (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <div className="w-full h-auto lg:h-full flex flex-col items-center py-5">
      <div className="text-base lg:text-xl flex font-semibold font-Gulzar">
        Hadith
        <span className="text-brown-2 italic px-4"> - </span>
        <h2 className="text-2xl"> حديث</h2>
      </div>
      <div className="md:py-14 py-10 text-xl md:text-2xl mt-4 md:mt-8 text-center  font-medium items-center flex flex-col space-y-5 border border-brown-2 rounded-md md:border-2 md:rounded-xl px-3 md:px-5 w-full max-w-[1000px]">
        <p className="tracking-wide  font-Gulzar">{data?.hadithArabic}</p>
        <p className="tracking-wide ">{data?.hadithEnglish}</p>
      </div>
    </div>
  );
}

export default Hadith;
