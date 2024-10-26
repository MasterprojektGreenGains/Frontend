type Props = {
  seriesDataInWatts: number[];
};

const EnergyDisplayInKWh = ({ seriesDataInWatts }: Props) => {
  function calculateEnergy(powerConsumptionsInWatts: number[]) {
    const intervalInHours = 5 / 3600; // 5 seconds in hours
    let totalEnergy = 0;

    for (let consumptionInWatts of powerConsumptionsInWatts) {
      const powerInKW = consumptionInWatts / 1000; // Convert watts to kilowatts
      totalEnergy += powerInKW * intervalInHours; // Energy in kWh for this reading
    }

    return totalEnergy.toFixed(2); // Total energy in kWh rounded to 2 decimal places
  }

  return <>{calculateEnergy(seriesDataInWatts)} kWh</>;
};

export default EnergyDisplayInKWh;
