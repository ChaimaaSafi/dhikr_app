import axios from "axios";

export const updatViews = async () => {
  const response = await axios.get(
    "https://api.countapi.xyz/update/daydhikr.us/dhikr/?amount=1"
  );
  return response;
};

export const getViews = async () => {
  const response = await axios.get(
    "https://api.countapi.xyz/get/daydhikr.us/dhikr"
  );
  return response.data.value;
};
