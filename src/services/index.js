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

export const cleanAquarium = async (token) => {
  await axios.post(
    API_URL + "/aquarium/clean-aquarium/",
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const feedFish = async (token1) => {
  const token = localStorage.getItem("token");
  await axios.post(
    API_URL + "/aquarium/feed-aquarium/",
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};

export const getAnalytics = async (token) => {
  const data = await fetch(API_URL + "/aquarium/analytics/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  });
  const json = await data.json();
  return json;
};
