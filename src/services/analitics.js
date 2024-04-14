import $api from "../http";

export const getAnalitics = async () => {
  return $api.get("/aquarium/aquarium/");
};
