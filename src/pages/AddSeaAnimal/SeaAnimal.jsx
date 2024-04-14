import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addItem } from "../../services";
import { LogoutIcon, AliveIcon } from "../Home/ui";

const SeaAnimal = () => {
  const [isFish, setIsFish] = useState(false);
  const [isShrimp, setIsShrimp] = useState(false);
  const [isSnail, setIsSnail] = useState(false);

  const [fishMale, setFishMale] = useState(0);
  const [fishFemale, setFishFemale] = useState(0);

  const [shrimpMale, setShrimpMale] = useState(0);
  const [shrimpFemale, setShrimpFemale] = useState(0);

  const [snailMale, setSnailMale] = useState(0);
  const [snailFemale, setSnailFemale] = useState(0);

  const navigate = useNavigate();

  const handleSave = async () => {
    if (isFish) {
      if (fishMale)
        await addItem(localStorage.getItem("token"), "fish", fishMale, true);
      if (fishFemale)
        await addItem(localStorage.getItem("token"), "fish", fishFemale, false);
    }
    if (isShrimp) {
      if (shrimpMale)
        await addItem(
          localStorage.getItem("token"),
          "shrimp",
          shrimpMale,
          true
        );
      if (shrimpFemale)
        await addItem(
          localStorage.getItem("token"),
          "shrimp",
          shrimpFemale,
          false
        );
    }
    if (isSnail) {
      if (snailMale)
        await addItem(localStorage.getItem("token"), "algae", snailMale, true);
      if (snailFemale)
        await addItem(
          localStorage.getItem("token"),
          "algae",
          snailFemale,
          false
        );
    }
    navigate("/");
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };
  return (
    <>
      <div className="goOut">
        <div className="icon" onClick={handleLogOut}>
          <LogoutIcon />
        </div>

        <AliveIcon
          number={
            +fishFemale +
            fishMale +
            snailFemale +
            snailMale +
            shrimpFemale +
            shrimpMale
          }
        />
        <svg
          width="82"
          height="82"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.25 5.125H5.125V71.75C5.125 73.1092 5.66495 74.4128 6.62608 75.3739C7.5872 76.335 8.89077 76.875 10.25 76.875H76.875V71.75H10.25V5.125Z"
            fill="#C43E18"
          />
          <path
            d="M76.875 23.0625H58.9375V28.1875H68.1369L48.6875 47.6369L37.6944 36.6181C37.4562 36.3779 37.1727 36.1873 36.8605 36.0572C36.5482 35.9271 36.2133 35.8601 35.875 35.8601C35.5367 35.8601 35.2018 35.9271 34.8895 36.0572C34.5773 36.1873 34.2938 36.3779 34.0556 36.6181L15.375 55.3244L18.9881 58.9375L35.875 42.0506L46.8681 53.0694C47.1063 53.3096 47.3898 53.5002 47.702 53.6303C48.0143 53.7604 48.3492 53.8274 48.6875 53.8274C49.0258 53.8274 49.3607 53.7604 49.673 53.6303C49.9852 53.5002 50.2687 53.3096 50.5069 53.0694L71.75 31.8006V41H76.875V23.0625Z"
            fill="#C43E18"
          />
        </svg>
      </div>
      <div className="AddAnimalSeaBlock">
        <h2 className="AddAnimalSeaBlockH2">Додати нових мешканців</h2>
        <div className="blockAnimalSeaInfo">
          <div className="typeAnimalSea">
            <h2>Тип мешканця</h2>
            <div className="blockTypeInfo">
              <div className="blockTypeInfoFish">
                <input
                  type="checkbox"
                  className="orange-checkbox"
                  onChange={() => setIsFish((prev) => !prev)}
                />
                <img src="./img/fish.png" alt="" />
              </div>
            </div>
            <div className="blockTypeInfo">
              <div className="blockTypeInfoShrim">
                <input
                  type="checkbox"
                  className="orange-checkbox"
                  onChange={() => setIsShrimp((prev) => !prev)}
                />
                <img src="./img/shrimp.png" alt="" />
              </div>
            </div>
            <div className="blockTypeInfo">
              <div className="blockTypeInfoSnail">
                <input
                  type="checkbox"
                  className="orange-checkbox"
                  onChange={() => setIsSnail((prev) => !prev)}
                />
                <img src="./img/snail.png" alt="" />
              </div>
            </div>
          </div>
          <div className="countAnimalSea">
            <h2>Кількість</h2>
            <div className="countAnimalSeaBlock">
              <div className="countAnimalSeaBlockInfo">
                <p>Дівчина</p>
                <input
                  onChange={(e) => setFishFemale(e.target.value)}
                  value={fishFemale}
                  className="inputCount"
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="100"
                />
              </div>
              <div className="countAnimalSeaBlockInfo">
                <p>Хлопець</p>
                <input
                  onChange={(e) => setFishMale(e.target.value)}
                  value={fishMale}
                  className="inputCount"
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <div className="countAnimalSeaBlock">
              <div className="countAnimalSeaBlockInfo">
                <p>Дівчина</p>
                <input
                  onChange={(e) => setShrimpFemale(e.target.value)}
                  value={shrimpFemale}
                  className="inputCount"
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="100"
                />
              </div>
              <div className="countAnimalSeaBlockInfo">
                <p>Хлопець</p>
                <input
                  onChange={(e) => setShrimpMale(e.target.value)}
                  value={shrimpMale}
                  className="inputCount"
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="100"
                />
              </div>
            </div>
            <div className="countAnimalSeaBlock">
              <div className="countAnimalSeaBlockInfo">
                <p>Дівчина</p>
                <input
                  onChange={(e) => setSnailFemale(e.target.value)}
                  value={snailFemale}
                  className="inputCount"
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="100"
                />
              </div>
              <div className="countAnimalSeaBlockInfo">
                <p>Хлопець</p>
                <input
                  onChange={(e) => setSnailMale(e.target.value)}
                  value={snailMale}
                  className="inputCount"
                  type="number"
                  id="tentacles"
                  name="tentacles"
                  min="0"
                  max="100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blockButton">
          <div className="blockCancelButton">
            <Link to="/" className="cancel">
              Скасувати
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </div>
          <div className="blockSaveButton" onClick={handleSave}>
            <p className="save">Зберегти</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-download"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeaAnimal;
