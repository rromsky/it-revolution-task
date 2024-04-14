import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAnalytics, loadData } from "../../services";
import ProgressCircle from "./ui/ProgressCircle";
import LineChart from "./ui/LineChart";
import { AliveIcon } from "../Home/ui";
const fstData = [
  {
    color: "hsl(182, 70%, 50%)",
    data: [
      {
        color: "hsl(55, 70%, 50%)",
        x: "13-04-2024",
        y: 4,
      },
      {
        color: "hsl(265, 70%, 50%)",
        x: "14-04-2024",
        y: 1,
      },
      {
        color: "hsl(34, 70%, 50%)",
        x: "15-04-2024",
        y: 2,
      },
      {
        color: "hsl(155, 70%, 50%)",
        x: "16-04-2024",
        y: 1,
      },
      {
        color: "hsl(155, 70%, 50%)",
        x: "17-04-2024",
        y: 2,
      },
      {
        color: "hsl(155, 70%, 50%)",
        x: "18-04-2024",
        y: 2,
      },
    ],
    id: "whisky",
  },
];
const scdData = [
  {
    color: "hsl(182, 70%, 50%)",
    data: [
      {
        color: "hsl(55, 70%, 50%)",
        x: "11-18.03",
        y: 2,
      },
      {
        color: "hsl(265, 70%, 50%)",
        x: "18-25.03",
        y: 1,
      },
      {
        color: "hsl(34, 70%, 50%)",
        x: "25-01.04",
        y: 2,
      },
      {
        color: "hsl(155, 70%, 50%)",
        x: "01-08.04",
        y: 1,
      },
      {
        color: "hsl(155, 70%, 50%)",
        x: "08-15-04",
        y: 1,
      },
    ],
    id: "whisky",
  },
];
const Analitics = () => {
  const [data, setData] = useState({});
  const [fData, setFData] = useState([{}]);
  const [alive, setAlive] = useState(0);
  const [dead, setDead] = useState(0);
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    loadData(token).then((data) => {
      setFData(data);
      setIsloading(false);
    });
    getAnalytics(token).then((fData) => {
      if (fData) {
        const d = Object.values(fData);
        const res = {
          live: 0,
          dead: 0,
          male: 0,
          female: 0,
        };

        for (const a of d) {
          res.live += a.live || 0;
          res.dead += a.dead || 0;
          res.female += a.girl || 0;
          res.male += a.male || 0;
        }
        console.log(fData);
        setData(res);
      }
    });
    // console.log(data);
  }, []);

  return (
    <>
      <div className="notifications">
        <div className="goOut">
          <svg
            width="89"
            height="83"
            viewBox="0 0 89 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4167 92C16.3771 92 14.6317 91.2499 13.1805 89.7498C11.7293 88.2497 11.0025 86.4442 11 84.3333V30.6667C11 28.5583 11.7268 26.7541 13.1805 25.254C14.6342 23.7539 16.3796 23.0026 18.4167 23H44.375V30.6667H18.4167V84.3333H44.375V92H18.4167ZM59.2083 76.6667L54.1094 71.1083L63.5656 61.3333H33.25V53.6667H63.5656L54.1094 43.8917L59.2083 38.3333L77.75 57.5L59.2083 76.6667Z"
              fill="#C43E18"
            />
          </svg>
          <AliveIcon data={fData} />
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
        <div className="menuButton">
          <Link to="/">
            <svg
              width="82"
              height="82"
              viewBox="0 0 82 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.4155 7.83434C42.7748 7.19381 41.9059 6.83398 40.9999 6.83398C40.0939 6.83398 39.225 7.19381 38.5843 7.83434L14.6677 31.751L7.83433 38.5843C7.508 38.8995 7.24771 39.2765 7.06865 39.6934C6.88958 40.1102 6.79533 40.5586 6.79139 41.0122C6.78745 41.4659 6.87389 41.9158 7.04569 42.3357C7.21748 42.7556 7.47118 43.1371 7.79198 43.4579C8.11278 43.7787 8.49426 44.0324 8.91415 44.2041C9.33405 44.3759 9.78395 44.4624 10.2376 44.4584C10.6913 44.4545 11.1396 44.3603 11.5565 44.1812C11.9733 44.0021 12.3503 43.7418 12.6655 43.4155L13.6666 42.4144V64.9166C13.6666 67.6351 14.7465 70.2422 16.6687 72.1644C18.591 74.0867 21.1981 75.1666 23.9166 75.1666H58.0832C60.8017 75.1666 63.4088 74.0867 65.3311 72.1644C67.2533 70.2422 68.3332 67.6351 68.3332 64.9166V42.4144L69.3343 43.4155C69.9787 44.0379 70.8418 44.3823 71.7376 44.3745C72.6335 44.3667 73.4904 44.0074 74.1239 43.3739C74.7574 42.7404 75.1167 41.8835 75.1245 40.9876C75.1323 40.0918 74.7879 39.2287 74.1655 38.5843L43.4155 7.83434Z"
                fill="#C43E18"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="analiticsBlock">
        <div className="staticBlock">
          <div className="countSeaAnimal">
            <h2>Кількість живих мешканців: {data.live}</h2>
            <ProgressCircle number={data.live} />
          </div>
          <div className="countSeaAnimal">
            <h2>Кількість мертвих мешканців:</h2>
            <ProgressCircle progress={0} number={data.dead} />
          </div>
          <div className="countSeaAnimal">
            <h2>Кількість дівчат:</h2>
            <ProgressCircle progress={0.5} number={data.female} />
          </div>
          <div className="countSeaAnimal">
            <h2>Кількість хлопців:</h2>
            <ProgressCircle progress={0.5} number={data.male} />
          </div>
        </div>
        <div className="graphsBlock">
          <div className="graphs">
            <h2 style={{ position: "absolute" }}>
              Графік частоти годування по дням:
            </h2>
            <LineChart data={fstData} />
          </div>
          <div className="graphs2">
            <h2 style={{ position: "absolute" }}>
              Графік частоти очищення акваріуму по тижням:
            </h2>
            <LineChart data={scdData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analitics;
