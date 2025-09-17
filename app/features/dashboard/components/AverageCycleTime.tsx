import { averageCycleTimeData } from '../services/data';

export default function AverageCycleTime() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Average Cycle Time</h2>
      <div className="grid grid-cols-2 gap-4">
        {averageCycleTimeData.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-3xl font-bold">{item.value}</p>
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-xs text-gray-400">{item.unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
