import React from "react";

const ForecastCard = ({ data, onClick }) => {
  return (
    <div align="center" className="card-div" onClick={onClick}>
      <div className="card" align="center">
        <div className="card-header">{data.title}</div>
        <div className="card-content">{data.content}</div>
      </div>
    </div>
  );
};

export default ForecastCard;
