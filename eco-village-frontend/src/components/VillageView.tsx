import { CSSProperties, useEffect, useRef, useState } from "react";
import gameFieldImage from "../resources/game_field_with_slots_and_eco_command_center.png";
import basicWindTurbine from "../resources/wind_turbines/basic_wind_turbine_small_no_bg.png";
import enhancedWindTurbine from "../resources/wind_turbines/enhanced_wind_turbine_small_no_bg.png";
import advancedWindTurbine from "../resources/wind_turbines/advanced_wind_turbine_small_no_bg.png";
import highCapacityWindTurbine from "../resources/wind_turbines/high_capacity_wind_turbine_small_no_bg.png";
import basicHouse from "../resources/housing/basic_house_small_no_bg.png";
import ecoHouse from "../resources/housing/eco_house_small_no_bg.png";
import advancedEcoHouse from "../resources/housing/advanced_eco_house_small_no_bg.png";

const VillageView = () => {
  const [clickedArea, setClickedArea] = useState("");
  const [scalingFactor, setScalingFactor] = useState({ scaleX: 1, scaleY: 1 });
  const imageRef = useRef<HTMLImageElement>(null);

  const villageImageWidth = 740;
  const villageImageHeight = 740;
  const centerFieldWidth = 140;
  const centerFieldHeight = 140;
  const fieldWidth = 70;
  const fieldHeight = 70;
  const buildingWidth = 50;
  const buildingHeight = 65;
  const centerImageXCorrection = 11;

  const fieldPositions = [
    { id: "Field 0", x: 301, y: 306, w: centerFieldWidth, h: centerFieldHeight},
    { id: "Field 1", x: 165, y: 170, w: fieldWidth, h: fieldHeight },
    { id: "Field 2", x: 233, y: 170, w: fieldWidth, h: fieldHeight },
    { id: "Field 3", x: 301, y: 170, w: fieldWidth, h: fieldHeight },
    { id: "Field 4", x: 369, y: 170, w: fieldWidth, h: fieldHeight },
    { id: "Field 5", x: 437, y: 170, w: fieldWidth, h: fieldHeight },
    { id: "Field 6", x: 505, y: 170, w: fieldWidth, h: fieldHeight },
    { id: "Field 7", x: 165, y: 306, w: fieldWidth, h: fieldHeight },
    { id: "Field 8", x: 505, y: 306, w: fieldWidth, h: fieldHeight },
    { id: "Field 9", x: 165, y: 374, w: fieldWidth, h: fieldHeight },
    { id: "Field 10", x: 505, y: 374, w: fieldWidth, h: fieldHeight },
    { id: "Field 11", x: 165, y: 506, w: fieldWidth, h: fieldHeight },
    { id: "Field 12", x: 233, y: 506, w: fieldWidth, h: fieldHeight },
    { id: "Field 13", x: 301, y: 506, w: fieldWidth, h: fieldHeight },
    { id: "Field 14", x: 369, y: 506, w: fieldWidth, h: fieldHeight },
    { id: "Field 15", x: 437, y: 506, w: fieldWidth, h: fieldHeight },
    { id: "Field 16", x: 505, y: 506, w: fieldWidth, h: fieldHeight },
  ];

  useEffect(() => {
    const updateScalingFactor = () => {
      if (imageRef.current) {
        const { width, height } = imageRef.current.getBoundingClientRect();
        setScalingFactor({
          scaleX: width / villageImageWidth,
          scaleY: height / villageImageHeight,
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
        width={villageImageWidth}
        height={villageImageHeight}
      />

      {fieldPositions.map(({ id, x, y, w, h }) => (
        <div
          key={id}
          onClick={() => setClickedArea(id)}
          style={getPositionStyle(x, y, w, h)}
          className="cursor-pointer"
        />
      ))}

      {fieldPositions
        .filter(({ id }) => clickedArea === id)
        .map(({ id, x, y }) => (
          <img
            key={id}
            src={advancedEcoHouse}
            alt="building"
            style={getPositionStyle(
              x + centerImageXCorrection,
              y,
              buildingWidth,
              buildingHeight
            )}
          />
        ))}
    </div>
  );
};

export default VillageView;
