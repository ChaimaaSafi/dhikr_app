import { getVerses } from "@/pages/api";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/spinner";

function Verse() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getVerses()
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <div className="w-full h-full flex flex-col justify-center  items-center">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold tracking-wider">
          Surat{" "}
          <span className="text-brown-1">
            {" "}
            {data?.data[0]?.surah.englishName}
          </span>
        </h1>
        <span className="text-xl font-bold px-4">-</span>
        <h1 className="text-2xl font-semibold tracking-wider font-Gulzar">
          {data?.data[0]?.surah.name}
        </h1>
      </div>
      <div className="py-3">
        <div className="text-xl flex font-semibold font-Gulzar">
          Verse
          <span className="text-brown-2 italic px-4">
            {data?.data[0]?.surah.numberOfAyahs}
          </span>
          <h2 className="text-2xl"> آية</h2>
        </div>
      </div>
      <div className="py-14 text-2xl mt-8 text-center font-medium items-center flex flex-col space-y-5 border-2 border-brown-2 rounded-xl px-5 w-full max-w-[1000px]">
        <p className="tracking-wide  font-Gulzar">{data?.data[0]?.text}</p>
        <p className="tracking-wide ">{data?.data[1]?.text}</p>
      </div>
    </div>
  );
}

export default Verse;
