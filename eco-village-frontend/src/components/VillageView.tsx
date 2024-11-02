import { CSSProperties, useEffect, useRef, useState } from "react";
import gameField from "../resources/game_fields/game_field_with_slots.png";
import ecoCommandCenter from "../resources/eco_command_center/eco_command_center_big_no_bg.png";
import basicWindTurbine from "../resources/wind_turbines/basic_wind_turbine_small_no_bg.png";
import enhancedWindTurbine from "../resources/wind_turbines/enhanced_wind_turbine_small_no_bg.png";
import advancedWindTurbine from "../resources/wind_turbines/advanced_wind_turbine_small_no_bg.png";
import highCapacityWindTurbine from "../resources/wind_turbines/high_capacity_wind_turbine_small_no_bg.png";
import basicHouse from "../resources/housing/basic_house_small_no_bg.png";
import ecoHouse from "../resources/housing/eco_house_small_no_bg.png";
import advancedEcoHouse from "../resources/housing/advanced_eco_house_small_no_bg.png";
import { Building, Field } from "../types/Types";

const VillageView = () => {
  const [clickedArea, setClickedArea] = useState("");
  const [scalingFactor, setScalingFactor] = useState({ scaleX: 1, scaleY: 1 });
  const imageRef = useRef<HTMLImageElement>(null);

  const villageImageWidth = 740;
  const villageImageHeight = 740;
  const centerFieldWidth = 120;
  const centerFieldHeight = 134;
  const fieldWidth = 70;
  const fieldHeight = 70;
  const buildingWidth = 50;
  const buildingHeight = 65;
  const centerImageXCorrection = 11;

  const fields: Field[] = [
    {
      id: "field 0",
      dimensions: { x: 301, y: 306, w: centerFieldWidth, h: centerFieldHeight },
      building: { type: "ecoCommandCenter", level: 1 },
    },
    {
      id: "field 1",
      dimensions: { x: 165, y: 170, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 2",
      dimensions: { x: 233, y: 170, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 3",
      dimensions: { x: 301, y: 170, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 4",
      dimensions: { x: 369, y: 170, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 5",
      dimensions: { x: 437, y: 170, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 6",
      dimensions: { x: 505, y: 170, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 7",
      dimensions: { x: 165, y: 306, w: fieldWidth, h: fieldHeight },
      building: { type: "windTurbine", level: 1 },
    },
    {
      id: "field 8",
      dimensions: { x: 505, y: 306, w: fieldWidth, h: fieldHeight },
      building: { type: "windTurbine", level: 2 },
    },
    {
      id: "field 9",
      dimensions: { x: 165, y: 374, w: fieldWidth, h: fieldHeight },
      building: { type: "house", level: 1 },
    },
    {
      id: "field 10",
      dimensions: { x: 505, y: 374, w: fieldWidth, h: fieldHeight },
      building: { type: "house", level: 3 },
    },
    {
      id: "field 11",
      dimensions: { x: 165, y: 506, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 12",
      dimensions: { x: 233, y: 506, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 13",
      dimensions: { x: 301, y: 506, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 14",
      dimensions: { x: 369, y: 506, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 15",
      dimensions: { x: 437, y: 506, w: fieldWidth, h: fieldHeight },
    },
    {
      id: "field 16",
      dimensions: { x: 505, y: 506, w: fieldWidth, h: fieldHeight },
    },
  ];

  const buildings: Building[] = [
    {
      type: "ecoCommandCenter",
      level: 1,
      description: "Eco Command Center",
      url: ecoCommandCenter,
    },
    {
      type: "windTurbine",
      level: 1,
      description: "Basic Wind Turbine",
      url: basicWindTurbine,
    },
    {
      type: "windTurbine",
      level: 2,
      description: "Enhanced Wind Turbine",
      url: enhancedWindTurbine,
    },
    {
      type: "windTurbine",
      level: 3,
      description: "Advanced Wind Turbine",
      url: advancedWindTurbine,
    },
    {
      type: "windTurbine",
      level: 4,
      description: "High Capacity Wind Turbine",
      url: highCapacityWindTurbine,
    },
    { type: "house", level: 1, description: "Basic House", url: basicHouse },
    { type: "house", level: 2, description: "Eco House", url: ecoHouse },
    {
      type: "house",
      level: 3,
      description: "Advanced Eco House",
      url: advancedEcoHouse,
    },
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

  const getBuilding = (building: Building) => {
    return buildings.find(
      ({ type, level }) => building.type === type && building.level === level
    );
  };

  return (
    <div className="relative">
      <img
        ref={imageRef}
        src={gameField}
        alt="Game Field"
        width={villageImageWidth}
        height={villageImageHeight}
      />

      {fields.map(({ id, dimensions: { x, y, w, h } }) => (
        <div
          key={id}
          onClick={() => setClickedArea(id)}
          style={getPositionStyle(x, y, w, h)}
          className="cursor-pointer"
        />
      ))}

      {fields
        // .filter(({ id }) => clickedArea === id)
        .map(({ id, dimensions: { x, y }, building }) =>
          building ? (
            <img
              key={id}
              src={getBuilding(building)?.url}
              title={getBuilding(building)?.description}
              alt="building"
              style={getPositionStyle(
                x + centerImageXCorrection,
                y,
                building.type !== "ecoCommandCenter"
                  ? buildingWidth
                  : centerFieldWidth,
                building.type !== "ecoCommandCenter"
                  ? buildingHeight
                  : centerFieldHeight
              )}
            />
          ) : null
        )}
    </div>
  );
};

export default VillageView;
