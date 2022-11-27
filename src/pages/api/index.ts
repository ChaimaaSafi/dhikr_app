import axios from "axios";

export const getVerses = async () => {
  const random = Math.floor(Math.random() * 6230 + 1);
  const response = await axios.get(
    `https://api.alquran.cloud/v1/ayah/${random}/editions/quran-uthmani,en.pickthall`
  );

  return response;
};

export const getHadith = async () => {
  const response = await axios.get(
    "https://hadithapi.com/public/api/hadiths?apiKey=$2y$10$K9tqK2GWPBqpeQREHlcPHudlBOXNdhNBPU3z6wEKMvY7YDoTMPt6"
  );

  return response;
};
