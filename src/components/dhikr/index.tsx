import { getDhikr } from "@/pages/api";
import React, { useEffect, useState } from "react";
import Spinner from "@/components/spinner";

const CACHE: any = {};

function Dhikr() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (CACHE["dhikr"] !== undefined) {
      setData(CACHE["dhikr"]);
      setLoading(false);
    } else {
      getDhikr()
        .then((response) => {
          setLoading(false);
          CACHE["dhikr"] = response;
          setData(response);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, []);

  return loading ? (
    <div className="w-full  h-full flex justify-center items-center">
      <Spinner />
    </div>
  ) : (
    <div className="w-full content h-auto lg:h-full flex flex-col justify-center items-center">
      <div className="text-xl flex font-semibold font-Gulzar">
        Dhikr
        <span className="text-brown-2 italic px-4"> - </span>
        <h2 className="text-2xl"> ذكر</h2>
      </div>
      <div className="md:py-14 py-10 text-xl md:text-2xl mt-4 md:mt-8 text-center font-medium items-center flex flex-col space-y-5 border border-brown-2 rounded-md md:border-2 md:rounded-xl px-3  md:px-5 w-full max-w-[1000px]">
        <p className="tracking-wide  font-Gulzar">{data?.zekr}</p>
        <p className="tracking-wide ">{data?.translate}</p>{" "}
      </div>
    </div>
  );
}

export default Dhikr;
