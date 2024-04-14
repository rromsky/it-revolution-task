import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { cleanAquarium, feedFish } from "../../../services";

export const LogoutIcon = () => (
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
);

export const AliveIcon = ({ data, number }) => (
  <div style={{ position: "relative" }}>
    <svg
      width="89"
      height="92"
      viewBox="0 0 87 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M81.5625 36.6562C81.5625 61.8125 46.2901 82.1747 44.788 83.0156C44.3921 83.2408 43.9496 83.3587 43.5 83.3587C43.0504 83.3587 42.6079 83.2408 42.212 83.0156C40.7099 82.1747 5.4375 61.8125 5.4375 36.6562C5.4438 30.7489 7.66572 25.0855 11.6158 20.9084C15.5659 16.7313 20.9216 14.3817 26.5078 14.375C33.5256 14.375 39.67 17.5662 43.5 22.9605C47.33 17.5662 53.4744 14.375 60.4922 14.375C66.0784 14.3817 71.4341 16.7313 75.3842 20.9084C79.3343 25.0855 81.5562 30.7489 81.5625 36.6562Z"
        fill="#C43E18"
      />
    </svg>
    <div
      style={{
        color: "#fff",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        top: 0,
        fontSize: "32px",
      }}
    >
      <p>
        {number ||
          (data?.algae?.reduce((acc, el) => acc + el.quantity, 0) || 0) +
            (data?.fish?.reduce((acc, el) => acc + el.quantity, 0) || 0) +
            (data?.shrimp?.reduce((acc, el) => acc + el.quantity, 0) || 0)}
      </p>
    </div>
  </div>
);

export const AnaliticsIcon = () => (
  <Link to="/analitics">
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
  </Link>
);

export const NotificationIcon = () => (
  <div>
    <svg
      width="81"
      height="85"
      viewBox="0 0 81 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.3502 67.4563C73.3502 66.794 73.0752 66.1615 72.591 65.7097C70.4372 63.6805 68.552 61.3535 66.9864 58.7916C65.2765 55.256 64.2516 51.3948 63.972 47.4347V35.7708C63.9867 29.5507 61.853 23.539 57.9716 18.8652C54.7621 15.0005 50.5404 12.2705 45.876 10.9954C44.1933 10.5355 42.8933 9.08739 42.8933 7.343C42.8933 6.50702 42.5793 5.70527 42.0202 5.11414C41.4612 4.52301 40.703 4.19092 39.9124 4.19092C39.1218 4.19092 38.3636 4.52301 37.8046 5.11414C37.2455 5.70527 36.9315 6.50702 36.9315 7.343C36.9315 9.11919 35.6173 10.5976 33.9101 11.0878C29.3185 12.4063 25.1733 15.1386 22.0213 18.9717C18.1909 23.6298 16.0867 29.598 16.0985 35.7708V47.4347C15.8188 51.3948 14.7939 55.256 13.084 58.7916C11.5453 61.3472 9.69045 63.6738 7.56876 65.7097C7.08452 66.1615 6.80957 66.794 6.80957 67.4563V68.4353C6.80957 70.9985 8.88745 73.0763 11.4506 73.0763H68.7091C71.2723 73.0763 73.3502 70.9985 73.3502 68.4353V67.4563Z"
        fill="#C43E18"
      />
      <path
        d="M38.6325 75.5552C36.2877 75.5552 34.458 77.8268 36.1825 79.4155C37.2599 80.408 38.6405 80.9547 40.0694 80.9547C41.4983 80.9547 42.8789 80.408 43.9562 79.4155C45.6808 77.8268 43.8511 75.5552 41.5063 75.5552H38.6325Z"
        fill="#C43E18"
      />
    </svg>
  </div>
);

export const AddIcon = () => (
  <Link to="/add">
    <svg
      width="81"
      height="85"
      viewBox="0 0 81 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.4998 5.3125C31.2076 5.43172 22.3278 9.38796 15.7568 16.3363C9.18571 23.2846 5.44429 32.6743 5.33154 42.5C5.44429 52.3257 9.18571 61.7154 15.7568 68.6637C22.3278 75.612 31.2076 79.5683 40.4998 79.6875C49.792 79.5683 58.6718 75.612 65.2429 68.6637C71.8139 61.7154 75.5553 52.3257 75.6681 42.5C75.5553 32.6743 71.8139 23.2846 65.2429 16.3363C58.6718 9.38796 49.792 5.43172 40.4998 5.3125ZM60.596 45.1562H43.0118V63.75H37.9878V45.1562H20.4037V39.8438H37.9878V21.25H43.0118V39.8438H60.596V45.1562Z"
        fill="#C43E18"
      />
    </svg>
  </Link>
);
export const FeedIcon = () => (
  <div
    style={{ cursor: "pointer" }}
    onClick={() => {
      feedFish(localStorage.getItem("token")).then(() => {});
    }}
  >
    <svg
      width="81"
      height="85"
      viewBox="0 0 81 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.7792 1.93107L4.63495 23.7913C2.12294 25.6373 0.615723 28.5034 0.615723 31.5639V75.2843C0.615723 80.628 5.13736 85 10.6638 85H70.9523C76.4787 85 81.0003 80.628 81.0003 75.2843V31.5639C81.0003 28.5034 79.4931 25.6373 76.9811 23.7913L46.8369 1.93107C45.0944 0.677195 42.9801 0 40.808 0C38.6359 0 36.5217 0.677195 34.7792 1.93107ZM43.3201 43.7084C43.3201 50.1406 35.784 56.2095 35.784 62.6416V67.9976C35.784 69.3578 34.6787 70.4265 33.272 70.4265C31.8652 70.4265 30.76 69.3578 30.76 67.9976V62.6416C30.76 56.2095 23.2239 50.1406 23.2239 43.7084V31.5639C23.2239 30.2037 24.3292 29.1349 25.7359 29.1349C27.1426 29.1349 28.2479 30.2037 28.2479 31.5639V42.4524C28.2479 43.1461 28.8103 43.7084 29.5039 43.7084C30.1976 43.7084 30.76 43.1461 30.76 42.4524V31.5639C30.76 30.2037 31.8652 29.1349 33.272 29.1349C34.6787 29.1349 35.784 30.2037 35.784 31.5639V42.4524C35.784 43.1461 36.3463 43.7084 37.04 43.7084C37.7337 43.7084 38.296 43.1461 38.296 42.4524V31.5639C38.296 30.2037 39.4013 29.1349 40.808 29.1349C42.2148 29.1349 43.3201 30.2037 43.3201 31.5639V43.7084ZM53.3681 70.4265C51.9614 70.4265 50.8561 69.3578 50.8561 67.9976V55.9361C50.8561 54.5488 49.7314 53.4241 48.3441 53.4241C46.9374 53.4241 45.8321 52.3554 45.8321 50.9952V38.8506C45.8321 34.5757 48.6958 30.9323 52.6648 29.6693C54.2222 29.1349 55.8801 30.3494 55.8801 32.0011V67.9976C55.8801 69.3578 54.7749 70.4265 53.3681 70.4265Z"
        fill="#C43E18"
      />
    </svg>
  </div>
);

export const CleanIcon = () => (
  <div
    style={{ cursor: "pointer" }}
    onClick={() => {
      cleanAquarium(localStorage.getItem("token")).then(() =>
        window.location.reload()
      );
    }}
  >
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M63.375 48.75H48.75V43.875H63.375V48.75ZM73.125 68.25H58.5V63.375H73.125V68.25ZM68.25 58.5H53.625V53.625H68.25V58.5Z"
        fill="#C43E18"
      />
      <path
        d="M41.4448 48.75C41.4276 46.6933 40.879 44.6759 39.8523 42.8937C38.8256 41.1115 37.3556 39.6249 35.585 38.5783L53.625 7.3125L49.4081 4.875L30.9391 36.8696C28.6725 36.3633 26.3151 36.4333 24.0825 37.0733C21.8499 37.7133 19.8135 38.9029 18.1593 40.5332C9.03333 49.335 9.74021 69.9124 9.77433 70.785C9.79953 71.4144 10.0674 72.0096 10.5218 72.4459C10.9763 72.8821 11.5819 73.1255 12.2118 73.125H48.7524C49.264 73.125 49.7626 72.964 50.1776 72.6649C50.5927 72.3658 50.903 71.9436 51.0648 71.4583C51.2266 70.973 51.2316 70.449 51.079 69.9607C50.9265 69.4724 50.6242 69.0445 50.2149 68.7375C41.5861 62.2635 41.4448 48.8816 41.4448 48.75ZM29.0793 41.4302C31.0302 41.4516 32.8978 42.2244 34.2934 43.5878C35.689 44.9512 36.5052 46.8001 36.5722 48.75C36.5722 48.8426 36.5771 49.257 36.6136 49.8932L22.2324 43.4972C23.1797 42.716 24.2729 42.131 25.4483 41.7762C26.6238 41.4213 27.858 41.3037 29.0793 41.4302ZM37.6593 68.25C35.711 66.2662 34.4691 63.6967 34.125 60.9375H29.25C29.4245 63.5317 30.2349 66.043 31.6095 68.25H26.1909C25.1885 65.0867 24.5786 61.8121 24.375 58.5H19.5C19.6571 61.8022 20.2012 65.0746 21.1209 68.25H14.625C14.7005 63.7747 15.3318 53.8883 19.0198 47.4021L37.3815 55.5677C38.2637 60.1485 40.1445 64.4786 42.8902 68.25H37.6593Z"
        fill="#C43E18"
      />
    </svg>
  </div>
);

export const IsFeedIndicator = ({ is_feed }) => (
  <svg
    width="69"
    height="69"
    viewBox="0 0 69 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.75 11.125C18.475 11.125 17.625 12.4 17.625 13.25V23.875H13.375V13.25C13.375 11.975 12.525 11.125 11.25 11.125C9.975 11.125 9.125 12.4 9.125 13.25V23.875H4.875V13.25C4.875 11.975 4.025 11.125 2.75 11.125C1.475 11.125 0.625 12.4 0.625 13.25V27.275C0.625 31.1 3.6 34.075 7 34.5V64.25C7 66.8 8.7 68.5 11.25 68.5C13.8 68.5 15.5 66.8 15.5 64.25V34.5C18.9 34.075 21.875 31.1 21.875 27.275V13.25C21.875 12.4 21.025 11.125 19.75 11.125ZM28.25 13.25V38.75H32.5V64.25C32.5 66.8 34.2 68.5 36.75 68.5C39.3 68.5 41 66.8 41 64.25V0.5C33.775 0.5 28.25 6.025 28.25 13.25ZM58 9C52.05 9 47.375 15.375 47.375 23.025C46.95 28.125 49.5 32.8 53.75 35.775V64.25C53.75 66.8 55.45 68.5 58 68.5C60.55 68.5 62.25 66.8 62.25 64.25V35.775C66.5 32.8 69.05 28.125 68.625 23.025C68.625 15.375 63.95 9 58 9Z"
      fill={is_feed ? "#afa" : "#C43E18"}
    />
  </svg>
);

export const IsClearIndicator = ({ is_clear }) => (
  <svg
    width="49"
    height="73"
    viewBox="0 0 49 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.0673 39.3367L1.06276 3.59063C0.95358 3.38529 0.885912 3.16045 0.863622 2.92896C0.841332 2.69747 0.864856 2.46385 0.932851 2.24145C1.07017 1.79229 1.3803 1.41608 1.795 1.19558C2.20971 0.975074 2.69502 0.928344 3.14418 1.06567C3.36658 1.13366 3.57341 1.24479 3.75286 1.39272C3.93231 1.54065 4.08087 1.72248 4.19005 1.92782L23.1964 37.6739L25.8916 36.2395C26.7131 35.8028 27.6125 35.5321 28.5386 35.4431C29.4646 35.354 30.3992 35.4483 31.2888 35.7204C32.1784 35.9926 33.0057 36.4373 33.7235 37.0292C34.4412 37.6211 35.0353 38.3487 35.4718 39.1702L36.6193 41.3289L48.785 59.1328L33.3114 67.3583L27.9511 56.7634L24.7919 58.3625L30.1841 69.0229L23.5506 72.5487L15.5907 52.5064L14.4449 50.3495C14.0082 49.5281 13.7375 48.6288 13.6483 47.7028C13.5591 46.7768 13.6532 45.8423 13.9251 44.9527C14.1971 44.0631 14.6417 43.2358 15.2334 42.518C15.8252 41.8002 16.5525 41.206 17.3739 40.7693L20.0673 39.3367ZM27.5527 39.3685L19.035 43.8966C18.6242 44.1149 18.2606 44.412 17.9647 44.7709C17.6688 45.1298 17.4466 45.5435 17.3106 45.9883C17.1746 46.4331 17.1275 46.9003 17.1721 47.3633C17.2167 47.8263 17.3521 48.276 17.5705 48.6867L18.7162 50.8435L33.4903 42.9881L32.3428 40.833C32.1244 40.4223 31.8273 40.0587 31.4684 39.7628C31.1095 39.4669 30.6959 39.2446 30.251 39.1086C29.8062 38.9726 29.339 38.9256 28.876 38.9702C28.413 39.0148 27.9633 39.1502 27.5527 39.3685Z"
      fill={is_clear ? "#afa" : "#C43E18"}
    />
  </svg>
);

export const FaqIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.2072 15.4712L25.1522 29.3042C24.8455 29.6076 24.4315 29.7778 24.0002 29.7778C23.5688 29.7778 23.1548 29.6076 22.8482 29.3042L8.79015 15.4742C8.48084 15.1724 8.06581 15.0035 7.63365 15.0035C7.2015 15.0035 6.78646 15.1724 6.47715 15.4742C6.32521 15.6224 6.20445 15.7994 6.122 15.9949C6.03955 16.1905 5.99707 16.4005 5.99707 16.6127C5.99707 16.8249 6.03955 17.035 6.122 17.2305C6.20445 17.426 6.32521 17.6031 6.47715 17.7512L20.5292 31.5812C21.4547 32.49 22.7 32.9992 23.9972 32.9992C25.2943 32.9992 26.5396 32.49 27.4652 31.5812L41.5172 17.7512C41.6696 17.603 41.7907 17.4258 41.8734 17.23C41.9562 17.0342 41.9988 16.8238 41.9988 16.6112C41.9988 16.3987 41.9562 16.1883 41.8734 15.9924C41.7907 15.7966 41.6696 15.6194 41.5172 15.4712C41.2078 15.1694 40.7928 15.0005 40.3606 15.0005C39.9285 15.0005 39.5135 15.1694 39.2042 15.4712"
      fill="black"
    />
  </svg>
);

export const QuestionIcon = () => (
  <svg
    width="86"
    height="84"
    viewBox="0 0 86 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="43" cy="42" rx="43" ry="42" fill="white" />
    <path
      d="M43 2C53.6087 2 63.7828 6.21427 71.2843 13.7157C78.7857 21.2172 83 31.3913 83 42C83 52.6087 78.7857 62.7828 71.2843 70.2843C63.7828 77.7857 53.6087 82 43 82C32.3913 82 22.2172 77.7857 14.7157 70.2843C7.21427 62.7828 3 52.6087 3 42C3 31.3913 7.21427 21.2172 14.7157 13.7157C22.2172 6.21427 32.3913 2 43 2ZM45.12 19.0971C40.4686 19.0971 36.8229 20.4171 34.12 23.0571C31.3543 25.6971 30.0343 29.3429 30.0343 33.9943H37.2C37.2 31.3543 37.7029 29.28 38.7714 27.8343C39.9657 26.0743 41.9143 25.2571 44.68 25.2571C46.8171 25.2571 48.5143 25.8229 49.7086 27.0171C50.84 28.2114 51.4686 29.8457 51.4686 31.92C51.4686 33.4914 50.9029 35 49.7714 36.3829L49.0171 37.2629C44.9314 40.9086 42.48 43.5486 41.6629 45.2457C40.7829 46.9429 40.4057 49.0171 40.4057 51.4057V52.2857H47.6343V51.4057C47.6343 49.8971 47.9486 48.5771 48.5771 47.32C49.1429 46.1886 49.96 45.12 51.0914 44.1771C54.1086 41.5371 55.9314 39.84 56.4971 39.2114C58.0057 37.2 58.8229 34.6229 58.8229 31.48C58.8229 27.6457 57.5657 24.6286 55.0514 22.4286C52.5371 20.1657 49.2057 19.0971 45.12 19.0971ZM43.9886 55.3657C42.7069 55.331 41.4638 55.8057 40.5314 56.6857C40.0711 57.1193 39.7093 57.6468 39.4707 58.2324C39.2321 58.8181 39.1223 59.4482 39.1486 60.08C39.1486 61.4629 39.5886 62.5943 40.5314 63.4743C41.4568 64.3724 42.6991 64.8693 43.9886 64.8571C45.3714 64.8571 46.5029 64.4171 47.4457 63.5371C47.9158 63.0946 48.2875 62.5581 48.5366 61.9625C48.7856 61.3668 48.9066 60.7254 48.8914 60.08C48.9035 59.45 48.7871 58.8241 48.5493 58.2405C48.3116 57.657 47.9575 57.1279 47.5086 56.6857C46.5519 55.8041 45.289 55.3305 43.9886 55.3657Z"
      fill="#C43E18"
    />
  </svg>
);

export const FaqCloseIcon = () => (
  <svg
    width="36"
    height="18"
    viewBox="0 0 36 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.79285 17.5288L16.8478 3.69577C17.1545 3.39239 17.5685 3.22222 17.9998 3.22222C18.4312 3.22222 18.8452 3.39239 19.1518 3.69577L33.2098 17.5258C33.5192 17.8276 33.9342 17.9965 34.3663 17.9965C34.7985 17.9965 35.2135 17.8276 35.5228 17.5258C35.6748 17.3776 35.7955 17.2006 35.878 17.0051C35.9605 16.8095 36.0029 16.5995 36.0029 16.3873C36.0029 16.1751 35.9605 15.965 35.878 15.7695C35.7955 15.574 35.6748 15.3969 35.5228 15.2488L21.4708 1.41877C20.5453 0.509995 19.3 0.000837326 18.0028 0.000837326C16.7057 0.000837326 15.4604 0.509995 14.5348 1.41877L0.482849 15.2488C0.330444 15.397 0.209297 15.5742 0.126572 15.77C0.0438461 15.9658 0.00122452 16.1762 0.00122452 16.3888C0.00122452 16.6013 0.0438461 16.8117 0.126572 17.0076C0.209297 17.2034 0.330444 17.3806 0.482849 17.5288C0.79216 17.8306 1.2072 17.9995 1.63935 17.9995C2.0715 17.9995 2.48654 17.8306 2.79585 17.5288"
      fill="black"
    />
  </svg>
);