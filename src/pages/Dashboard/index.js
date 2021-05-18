import React, { useState } from "react";
import ForecastImage from "../../assets/images/name.png";
import ForecastCard from "./Components/ForecastCard";
import ForecastDetailsModal from "./Components/ForecastDetailsModal";
import "./Dashboard.scss";

const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState();
  return (
    <div className="dashboard">
      <div className="title">
        <img src={ForecastImage} alt="forecast title image" />
      </div>
      {data.map((item, key) => (
        <ForecastCard
          onClick={() => {
            setModalData(item);
            setModalVisible(true);
          }}
          data={item}
          key={key}
        />
      ))}
      {modalVisible && (
        <ForecastDetailsModal
          visible={modalVisible}
          data={modalData}
          onClose={() => setModalVisible(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;

const data = [
  {
    title: "US GDP",
    content: "What will US GDP growth be in 2021?",
    dueDate: "29-02-2021",
    forecastNumber: "10",
    currentForecast: "70%",
    probability: "Yes",
    image:
      "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd6c748xw2pzm8.cloudfront.net%2Fprod%2F1b133700-19f8-11eb-8a83-39cd868a01b4-standard.png?dpr=1&fit=scale-down&quality=highest&source=next&width=700" // eslint-disable-line
  },
  {
    title: "AUSTRALIA CPI",
    content: "What will Australian core inflation be for Q1 2021?",
    dueDate: "10-03-2021",
    forecastNumber: "15",
    currentForecast: "90%",
    probability: "Yes",
    image:
      "https://www.xm.com/wp-content/uploads/2021/04/AustraliaCPI260421.png" // eslint-disable-line
  },
  {
    title: "NEW BUSINESS CONFIDENCE",
    content:
      "Will New South Wales business confidence improve or fall in 2021?",
    dueDate: "21-01-2021",
    forecastNumber: "23",
    currentForecast: "80%",
    probability: "Yes",
    image:
      "https://www.researchgate.net/profile/Luke-Strotz/publication/264545536/figure/fig1/AS:651936948817921@1532445289379/Location-and-map-of-St-Georges-Basin-New-South-Wales-Australia-35u079-S-150u409-E.png" // eslint-disable-line
  } // eslint-disable-line
];
