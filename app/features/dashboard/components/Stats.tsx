import { statsData } from '../services/data';

export default function Stats() {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
      {statsData.map((stat, index) => (
        <div key={index} className="text-center">
          <p className={`flex items-center justify-center text-sm font-medium text-gray-500`}>
            <span className={`w-3 h-3 mr-2 rounded-full ${stat.color.replace('text', 'bg')}`}></span>
            {stat.label}
            </p>
          <p className="text-3xl font-bold">{stat.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
