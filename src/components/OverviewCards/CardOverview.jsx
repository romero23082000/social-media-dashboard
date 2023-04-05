import React from "react";
import "./Overview.css";

const CardOverview = (props) => {
  const { item } = props;
  return (
    <div className="card">
      <div className="seccion1">
        <p>{item.title}</p>
        <img src={item.icon} alt="icon" />
      </div>
      <div className="seccion2">
        <h1>{item.number}</h1>
        <p
          style={{
            color:
              item.arrowIcon ===
              "/static/media/icon-up.359200b20d83a37cfb26d6de21236570.svg"
                ? "var(--Lime-Green)"
                : "var(--Bright-Red)",
          }}
        >
          <img src={item.arrowIcon} alt="arrow" /> &nbsp; {item.count} %
        </p>
      </div>
    </div>
  );
};

export default CardOverview;
