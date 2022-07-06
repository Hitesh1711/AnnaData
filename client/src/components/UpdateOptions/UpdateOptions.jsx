import React from "react";

import "./UpdateOptions.css";

const UpdateOptions = (props) => {
  const options = [
    {
      text: "weather",
      handler: props.actionProvider.handleweathertLinks,
      id: 1,
    },
    { text: "Covid-19", handler: props.actionProvider.handlecovidLinks, id: 2 },
    {
      text: "Price Update",
      handler: props.actionProvider.handlepriceLinks,
      id: 3,
    },
    {
      text: "Latest News",
      handler: props.actionProvider.handlenewsLinks,
      id: 4,
    },
    {
      text: "Feedback Form",
      handler: props.actionProvider.handlefeedbackLinks,
      id: 5,
    },
    {
      text: "Crop Cart",
      handler: props.actionProvider.handlecropLinks,
      id: 6,
    },
    {
      text: "Helpline Numbers",
      handler: props.actionProvider.handlehelplineLinks,
      id: 7,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="update-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="update-options-container">{optionsMarkup}</div>;
};

export default UpdateOptions;
