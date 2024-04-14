import React, { useEffect, useState } from "react";
import { loadData } from "../../services";
import {
  LogoutIcon,
  AliveIcon,
  AnaliticsIcon,
  NotificationIcon,
  AddIcon,
  FeedIcon,
  CleanIcon,
  IsFeedIndicator,
  IsClearIndicator,
  FaqIcon,
  FaqCloseIcon,
  QuestionIcon,
} from "./ui";
import { faqData } from "./lib";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [iconClicked, setIconClicked] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    loadData(token).then((data) => {
      setData(data);
      setIsloading(false);
    });
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleIconClick = (event) => {
    event.stopPropagation();
    setIconClicked(!iconClicked);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };

  const handleQuestionClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <>
      <header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div className="goOut">
            <div className="icon" onClick={handleLogOut}>
              <LogoutIcon />
            </div>
            <AliveIcon data={data} />
            <AnaliticsIcon />
          </div>
          <IsFeedIndicator is_feed={data?.data?.is_feed} />
          <IsClearIndicator is_clear={data?.data?.is_clear} />
        </div>
        <div className="menu">
          <NotificationIcon />
          <AddIcon />
          <FeedIcon />
          <CleanIcon />
        </div>
      </header>
      <div className="aquarium">
        <img src="./img/aquarium.png" alt="" />
      </div>
      <div className="seaAnimal">
        {data?.algae?.length == 0 &&
          data?.fish?.length == 0 &&
          data?.shrimp?.length == 0 && (
            <h3>Ваш акваріум ще порожній. Додайте мешканців!</h3>
          )}
        {!!data?.algae?.length && (
          <div className="entity-item">
            <img src="./img/snail.png" alt="" />
            <div className="entyity-indicatior algae">{data.algae.length}</div>
          </div>
        )}
        {!!data?.fish?.length && (
          <div className="entity-item">
            <img src="./img/fish.png" alt="" />
            <div className="entyity-indicatior">{data.fish.length}</div>
          </div>
        )}
      </div>
      <div className="seaAnimal2">
        {!!data?.shrimp?.length && (
          <div className="entity-item">
            <img src="./img/shrimp.png" alt="" />
            <div className="entyity-indicatior">{data.shrimp.length}</div>
          </div>
        )}
      </div>
      <div className="question" onClick={toggleModal}>
        <QuestionIcon />
      </div>
      {isModalOpen && (
        <div className="modalWindow">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => handleQuestionClick(index)}
            >
              <div className="faqBlock">
                <h2 className="faqH1">{item.question}</h2>
                {expandedIndex === index ? <FaqCloseIcon /> : <FaqIcon />}
              </div>
              {expandedIndex === index && <p className="faqP">{item.answer}</p>}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Index;
