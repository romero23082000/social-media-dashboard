import React from "react";
import "./socialCard.css";

const SocialCard = (props) => {
  const { item } = props;
  return (
    <div className="social-card">
      <div
        style={{
          background: `var(${item.color})`,
          position: "relative",
          top: 0,
          width: "100%",
          height: "5px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      ></div>
      <div className="container-values">
        <p className="username">
          <img src={item.icon} alt="icon" />
          &nbsp; {item.user}
        </p>
        <div style={{ display: "grid", placeItems: "center" }}>
          <h1 className="count">{item.count}</h1>
          <p className="count-text">{item.textCount}</p>
        </div>
        <p
          className="arrow-number"
          style={{
            color:
              item.iconStadistics ===
              "/static/media/icon-up.359200b20d83a37cfb26d6de21236570.svg"
                ? "var(--Lime-Green)"
                : "var(--Bright-Red)",
          }}
        >
          <img src={item.iconStadistics} alt="arrow" /> &nbsp;
          {item.estadistics}
          &nbsp; Today
        </p>
      </div>
    </div>
  );
};

export default SocialCard;
