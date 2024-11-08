import { CSSProperties, useEffect, useRef, useState } from "react";
import { Modal, Box } from "@mui/material";

import gameField from "../resources/game_fields/game_field_with_slots.png";
import ecoCommandCenter from "../resources/eco_command_center/eco_command_center_big_no_bg.png";
import basicWindTurbine from "../resources/wind_turbines/basic_wind_turbine_big_no_bg.png";
import enhancedWindTurbine from "../resources/wind_turbines/enhanced_wind_turbine_big_no_bg.png";
import advancedWindTurbine from "../resources/wind_turbines/advanced_wind_turbine_big_no_bg.png";
import highCapacityWindTurbine from "../resources/wind_turbines/high_capacity_wind_turbine_big_no_bg.png";
import basicHouse from "../resources/housing/basic_house_big_no_bg.png";
import ecoHouse from "../resources/housing/eco_house_big_no_bg.png";
import advancedEcoHouse from "../resources/housing/advanced_eco_house_big_no_bg.png";

import { Building, Field, FieldDimensions } from "../types/Types";
import ConstructionBuildingCard from "./ConstructionBuildingCard";

type Props = {
  fields: Field[];
  setFields: (fields: Field[]) => void;
};

const VillageView = ({ fields, setFields }: Props) => {
  const [clickedArea, setClickedArea] = useState("");
  const [scalingFactor, setScalingFactor] = useState({ scaleX: 1, scaleY: 1 });
  const imageRef = useRef<HTMLImageElement>(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "75%",
    transform: "translate(-50%, -50%)",
    width: 720,
    height: "100%",
    bgcolor: "#f2efdf",
    border: "3px solid #000",
    boxShadow: 12,
    p: 4,
  };

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
    {
      type: "ecoCommandCenter",
      level: 1,
      name: "Eco Command Center",
      description: "The central building of a village",
      imageUrl: ecoCommandCenter,
    },
    {
      type: "windTurbine",
      level: 1,
      name: "Basic Wind Turbine",
      description: "Produces 8 energy",
      imageUrl: basicWindTurbine,
      cost: { coins: "20" },
      benefit: { energy: "8" },
      maxBuilt: 6
    },
    {
      type: "windTurbine",
      level: 2,
      name: "Enhanced Wind Turbine",
      description: "Produces 12 energy",
      imageUrl: enhancedWindTurbine,
      cost: { coins: "50", ecoCredits: "20" },
      benefit: { energy: "12" },
    },
    {
      type: "windTurbine",
      level: 3,
      name: "Advanced Wind Turbine",
      description: "Produces 16 energy",
      imageUrl: advancedWindTurbine,
      cost: { coins: "100", ecoCredits: "60" },
      benefit: { energy: "16" },
    },
    {
      type: "windTurbine",
      level: 4,
      name: "High Capacity Wind Turbine",
      description: "Produces 20 energy",
      imageUrl: highCapacityWindTurbine,
      cost: { coins: "200", ecoCredits: "100" },
      benefit: { energy: "20" },
    },
    {
      type: "house",
      level: 1,
      name: "Basic House",
      description: "Increases the number of residents by 2",
      imageUrl: basicHouse,
      cost: { coins: "30" },
      consumption: { energy: "24" },
      benefit: { residents: "2" },
      maxBuilt: 10
    },
    {
      type: "house",
      level: 2,
      name: "Eco House",
      description: "Increases the number of residents by 6",
      imageUrl: ecoHouse,
      cost: { coins: "80", ecoCredits: "10" },
      consumption: { energy: "18" },
      benefit: { residents: "6" },
    },
    {
      type: "house",
      level: 3,
      name: "Advanced Eco House",
      description: "Increases the number of residents by 15",
      imageUrl: advancedEcoHouse,
      cost: { coins: "150", ecoCredits: "30" },
      consumption: { energy: "12" },
      benefit: { residents: "15" },
    },
  ];

  const constructionBuildings: Building[] = buildings.filter(
    ({ type, level }) =>
      (type === "house" || type === "windTurbine") && level === 1
  );

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
    buildings.find(
      ({ type, level }) => building.type === type && building.level === level
    );

  const getFieldDimensions = (fieldId: string) =>
    fieldDimensions.find(({ fieldId: id }) => fieldId === id);

  const handleConstruct = (buildingToConstruct: string) => {
    alert("constructing " + buildingToConstruct + "at position: " + clickedArea);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <p className="text-2xl text-gray-700 font-semibold tracking-wide">
            Construct New Building
          </p>
          <hr className="border-black border-t-2 mt-6 mb-6" />
          {constructionBuildings.map(({ type, name, description, imageUrl, cost, benefit, maxBuilt }) => (
            <ConstructionBuildingCard
              key={name}
              handleClose={handleClose}
              name={name ? name : ""}
              description={description ? description : ""}
              imageUrl={imageUrl ? imageUrl : ""}
              cost={cost ? cost : {}}
              maxBuilt={maxBuilt ? maxBuilt : 0}
              builtCount={0}
              onConstruct={handleConstruct}
            />
          ))}
        </Box>
      </Modal>

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
                onClick={() => {
                  setClickedArea(id);
                  handleOpen();
                }}
                style={getPositionStyle(
                  dimensions.x,
                  dimensions.y,
                  dimensions.w,
                  dimensions.h
                )}
                className={`cursor-pointer z-10 ${
                  clickedArea === id ? "border-4 border-red-500" : ""
                }`}
              />
            )
          );
        })}

        {fields
          .map(({ id, building }) => {
            const dimensions = getFieldDimensions(id);
            if (!dimensions || !building) return null;
            const { x, y } = dimensions;
            const buildingData = getBuildingData(building);
            const width =
              id !== "centerField" ? buildingSize.w : centerBuildingSize.w;
            const height =
              id !== "centerField" ? buildingSize.h : centerBuildingSize.h;
            return (
              buildingData && (
                <img
                  key={id}
                  src={buildingData.imageUrl}
                  title={buildingData.name}
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
    </>
  );
};

export default VillageView;
