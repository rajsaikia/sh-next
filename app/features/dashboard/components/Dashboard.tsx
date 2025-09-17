import AverageCycleTime from "./AverageCycleTime";
import ContractByStages from "./ContractByStages";
import ContractByType from "./ContractByType";
import ContractExpiring from "./ContractExpiring";
import MyContracts from "./MyContracts";
import Stats from "./Stats";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Stats />
      </div>
      <div className="lg:col-span-1">
        <ContractByType />
      </div>
      <div className="lg:col-span-1">
        <ContractByStages />
      </div>
      <div className="lg:col-span-1">
        <ContractExpiring />
      </div>
      <div className="lg:col-span-2">
        <MyContracts />
      </div>
      <div className="lg:col-span-1">
        <AverageCycleTime />
      </div>
    </div>
  );
}
