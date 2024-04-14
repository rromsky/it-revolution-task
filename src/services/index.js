export * from "./auth";
import axios from "axios";
import { API_URL } from "../http";

export const loadData = async (token) => {
  const data = await fetch(API_URL + "/aquarium/aquarium/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  const json = await data.json();
  return json;
};

export const addItem = async (token, itemName, itemNumber, is_male) => {
  await axios.post(
    API_URL + `/aquarium/${itemName}/`,
    {
      is_male,
      species: itemName,
      quantity: itemNumber,
    },
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
