import axios from "axios";

export const getVerses = async () => {
  const random = Math.floor(Math.random() * 6230 + 1);
  const response = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${random}/editions/quran-uthmani,en.pickthall`
  );

  return response;
};
