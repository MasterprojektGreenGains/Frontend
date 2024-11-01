import { CSSProperties, useEffect, useRef, useState } from "react";
import gameFieldImage from "../resources/game_field_with_slots_and_eco_command_center.png";
import windTurbineImage from "../resources/basic_wind_turbine_small_no_bg.png";

const VillageView = () => {
  const [clickedArea, setClickedArea] = useState("");
  const [scalingFactor, setScalingFactor] = useState({ scaleX: 1, scaleY: 1 });
  const imageRef = useRef<HTMLImageElement>(null);

  const handleClick = (area: string) => {
    setClickedArea(area);
  };

  useEffect(() => {
    const updateScalingFactor = () => {
      if (imageRef.current) {
        const { width, height } = imageRef.current.getBoundingClientRect();
        setScalingFactor({
          scaleX: width / 740,
          scaleY: height / 740,
        });
      }
    };

    updateScalingFactor();
    window.addEventListener("resize", updateScalingFactor);
    return () => window.removeEventListener("resize", updateScalingFactor);
  }, []);

  const getPositionStyle = (
    originalX: number,
    originalY: number,
    width: number,
    height: number
  ): CSSProperties => ({
    position: "absolute",
    top: `${originalY * scalingFactor.scaleY}px`,
    left: `${originalX * scalingFactor.scaleX}px`,
    width: `${width * scalingFactor.scaleX}px`,
    height: `${height * scalingFactor.scaleY}px`,
    pointerEvents: "auto",
  });

  return (
    <div className="relative">
      <img
        ref={imageRef}
        src={gameFieldImage}
        alt="Village Overview"
        width={740}
        height={740}
      />

      <div
        onClick={() => handleClick("Button 1")}
        style={getPositionStyle(165, 170, 70, 70)}
        className="cursor-pointer"
      />
      <div
        onClick={() => handleClick("Button 2")}
        style={getPositionStyle(235, 170, 70, 70)}
        className="cursor-pointer"
      />
      <div
        onClick={() => handleClick("Button 3")}
        style={getPositionStyle(305, 170, 70, 70)}
        className="cursor-pointer"
      />

      {clickedArea === "Button 1" && (
        <img
          src={windTurbineImage}
          alt="Wind Turbine"
          style={getPositionStyle(175, 170, 60, 70)}
        />
      )}

      {clickedArea === "Button 2" && (
        <img
          src={windTurbineImage}
          alt="Wind Turbine"
          style={getPositionStyle(245, 170, 60, 70)}
        />
      )}

      {clickedArea === "Button 3" && (
        <img
          src={windTurbineImage}
          alt="Wind Turbine"
          style={getPositionStyle(315, 170, 60, 70)}
        />
      )}
    </div>
  );
};

export default VillageView;
