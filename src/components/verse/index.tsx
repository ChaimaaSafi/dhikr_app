import { getVerses } from "@/pages/api";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/spinner";

const CACHE: any = {};

function Verse() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (CACHE["verse"] !== undefined) {
      setData(CACHE["verse"]);
      setLoading(false);
    } else {
      getVerses()
        .then((response) => {
          setLoading(false);
          CACHE["verse"] = response.data;
          setData(response.data);
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
    <div className="w-full h-auto content lg:h-full flex flex-col justify-center  items-center">
      <div className="flex  items-center">
        <h1 className="text-base md:text-3xl font-semibold tracking-wider">
          Surat{" "}
          <span className="text-brown-1">
            {" "}
            {data?.data[0]?.surah.englishName}
          </span>
        </h1>
        <span className="text-xl font-bold px-4">-</span>
        <h1 className="text-sm md:text-2xl font-semibold tracking-wider font-Gulzar">
          {data?.data[0]?.surah.name}
        </h1>
      </div>
      <div className="py-3">
        <div className="text-base md:text-xl flex font-semibold font-Gulzar">
          Verse
          <span className="text-brown-2 italic px-4">
            {data?.data[0]?.surah.numberOfAyahs}
          </span>
          <h2 className="text-base md:text-2xl"> آية</h2>
        </div>
      </div>
      <div className="md:py-14 py-8 text-xl md:text-2xl mt-8 text-center overflow-scroll  font-medium items-center flex flex-col space-y-5  border border-brown-2 rounded-md md:border-2 md:rounded-xl px-3 md:px-5 w-full md:max-w-[950px]">
        <p className="tracking-wide  font-Gulzar">{data?.data[0]?.text}</p>
        <p className="tracking-wide ">{data?.data[1]?.text}</p>
      </div>
    </div>
  );
}

export default Verse;
