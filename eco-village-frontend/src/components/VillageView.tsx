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
import { Building, Field, FieldDimensions } from "../types/Types";

type Props = {
  fields: Field[];
  setFields: (fields: Field[]) => void;
};

const VillageView = ({ fields, setFields }: Props) => {
  const [clickedArea, setClickedArea] = useState("");
  const [scalingFactor, setScalingFactor] = useState({ scaleX: 1, scaleY: 1 });
  const imageRef = useRef<HTMLImageElement>(null);

  const villageImageSize = { w: 740, h: 740 };
  const centerBuildingSize = { w: 120, h: 120 };
  const buildingSize = { w: 50, h: 65 };
  const centerImageXCorrection = 11;

  const fieldDimensions: FieldDimensions[] = [
    { fieldId: "centerField", x: 301, y: 306, w: 134, h: 134 },
    { fieldId: "field 1", x: 165, y: 170, w: 70, h: 70 },
    { fieldId: "field 2", x: 233, y: 170, w: 70, h: 70 },
    { fieldId: "field 3", x: 301, y: 170, w: 70, h: 70 },
    { fieldId: "field 4", x: 369, y: 170, w: 70, h: 70 },
    { fieldId: "field 5", x: 437, y: 170, w: 70, h: 70 },
    { fieldId: "field 6", x: 505, y: 170, w: 70, h: 70 },
    { fieldId: "field 7", x: 165, y: 306, w: 70, h: 70 },
    { fieldId: "field 8", x: 505, y: 306, w: 70, h: 70 },
    { fieldId: "field 9", x: 165, y: 374, w: 70, h: 70 },
    { fieldId: "field 10", x: 505, y: 374, w: 70, h: 70 },
    { fieldId: "field 11", x: 165, y: 506, w: 70, h: 70 },
    { fieldId: "field 12", x: 233, y: 506, w: 70, h: 70 },
    { fieldId: "field 13", x: 301, y: 506, w: 70, h: 70 },
    { fieldId: "field 14", x: 369, y: 506, w: 70, h: 70 },
    { fieldId: "field 15", x: 437, y: 506, w: 70, h: 70 },
    { fieldId: "field 16", x: 505, y: 506, w: 70, h: 70 },
  ];

  const buildings: Building[] = [
    { type: "ecoCommandCenter", level: 1, description: "Eco Command Center", url: ecoCommandCenter },
    { type: "windTurbine", level: 1, description: "Basic Wind Turbine", url: basicWindTurbine },
    { type: "windTurbine", level: 2, description: "Enhanced Wind Turbine", url: enhancedWindTurbine },
    { type: "windTurbine", level: 3, description: "Advanced Wind Turbine", url: advancedWindTurbine },
    { type: "windTurbine", level: 4, description: "High Capacity Wind Turbine", url: highCapacityWindTurbine },
    { type: "house", level: 1, description: "Basic House", url: basicHouse },
    { type: "house", level: 2, description: "Eco House", url: ecoHouse },
    { type: "house", level: 3, description: "Advanced Eco House", url: advancedEcoHouse },
  ];

  useEffect(() => {
    const updateScalingFactor = () => {
      if (imageRef.current) {
        const { width, height } = imageRef.current.getBoundingClientRect();
        setScalingFactor({
          scaleX: width / villageImageSize.w,
          scaleY: height / villageImageSize.h,
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

  const getBuildingData = (building: Building) => 
    buildings.find(({ type, level }) => building.type === type && building.level === level);

  const getFieldDimensions = (fieldId: string) =>
    fieldDimensions.find(({ fieldId: id }) => fieldId === id);

  return (
    <div className="relative">
      <img
        ref={imageRef}
        src={gameField}
        alt="Game Field"
        width={villageImageSize.w}
        height={villageImageSize.h}
      />

      {fields.map(({ id }) => {
        const dimensions = getFieldDimensions(id);
        return (
          dimensions && (
            <div
              key={id}
              onClick={() => setClickedArea(id)}
              style={getPositionStyle(
                dimensions.x,
                dimensions.y,
                dimensions.w,
                dimensions.h
              )}
              className="cursor-pointer z-10"
            />
          )
        );
      })}

      {fields
      // .filter(({ id }) => id === clickedArea)
      .map(({ id, building }) => {
        const dimensions = getFieldDimensions(id);
        if (!dimensions || !building) return null;
        const { x, y } = dimensions;
        const buildingData = getBuildingData(building);
        const width =
          id !== "centerField"
            ? buildingSize.w
            : centerBuildingSize.w;
        const height =
          id !== "centerField"
            ? buildingSize.h
            : centerBuildingSize.h;
        return (
          buildingData && (
            <img
              key={id}
              src={buildingData.url}
              title={buildingData.description}
              alt="building"
              style={getPositionStyle(
                x + centerImageXCorrection,
                y,
                width,
                height
              )}
            />
          )
        );
      })}
    </div>
  );
};

export default VillageView;
