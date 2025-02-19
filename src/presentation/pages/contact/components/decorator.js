import React from "react";
import image from "../../../../assets/images/decorator.svg";

const Decorator = (props) => {
  let { deviceType } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "end",
        alignItems: "end",
        width: "100%",
        marginTop:
          deviceType === "phone" ? -100 : deviceType === "tablet" ? -186 : -256,
      }}
    >
      <img
        src={image}
        alt=""
        width={
          deviceType === "phone"
            ? "11%"
            : deviceType === "tablet"
            ? "10%"
            : "8%"
        }
      />
    </div>
  );
};

export default Decorator;
