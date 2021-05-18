import React from "react";
import CustomModal from "../../../common/components/CutomModal";
import "./ForecastModal.scss";

const ForecastDetailsModal = ({ visible, data, onClose }) => {
  return (
    <CustomModal
      className="forecast-modal"
      visible={visible}
      title={data.title}
      onClose={onClose}
    >
      <div className="row w-100">
        <div className="col-12 content">{data.content}</div>
        <div className="col-12 d-flex justify-content-between">
          <div className="due-date-card">
            <span>
              Due Date
              <br />
              {data.dueDate}
            </span>
          </div>
          <div className="img-card">
            <img src={data.image} alt="img" />
          </div>
        </div>
        <div className="col-12 " align="center">
          <div className="bottom-div">
            <div>Number of forecast made: {data.forecastNumber}</div>
            <div>
              Current forecast: {data.currentForecast}
              <font className="font-italic font-weight-bold"> PROBABILITY</font>
              , {data.probability}.
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ForecastDetailsModal;
