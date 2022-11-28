import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload)
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="date">Date: {payload[0].payload.date.substring(0,10)}</p>
        <p className="close">Close: {payload[0].payload.close.toFixed(2)}</p>
        <p className="Volume">Volume: {payload[0].payload.volume}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip