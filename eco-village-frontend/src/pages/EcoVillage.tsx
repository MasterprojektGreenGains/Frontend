import PageContainer from "../components/PageContainer";
import ResourceDisplay from "../components/ResourceDisplay";

const EcoVillage = () => {
  return (
    <PageContainer className="bg-[#f2efdf]">
      <ResourceDisplay
        coins={"168"}
        coinStorageCapacity={"4500"}
        energy={"16"}
        ecoCredits={"60"}
        villages={"2"}
        population={"315"}
      />
    </PageContainer>
  );
};

export default EcoVillage;
