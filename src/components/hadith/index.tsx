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
    <div className="w-full h-full flex flex-col justify-center  items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold tracking-wider">
          Hadith Of The Day{" "}
        </h1>
        <h1 className="text-2xl font-semibold tracking-wider">
          <span className="text-brown-1"> {data?.bookSlug}</span>
        </h1>
      </div>
      <div className="py-14 text-2xl mt-8 text-center font-medium items-center flex flex-col space-y-5 border-2 border-brown-2 rounded-xl px-5 w-full max-w-[1000px]">
        <p className="tracking-wide  font-Gulzar">{data?.hadithArabic}</p>
        <p className="tracking-wide ">{data?.hadithEnglish}</p>
      </div>
    </div>
  );
}

export default Hadith;
