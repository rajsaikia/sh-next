'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { contractByTypeData } from '../services/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ContractByType() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Contract by Type</h2>
      <Bar
        data={contractByTypeData}
        options={{
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}
