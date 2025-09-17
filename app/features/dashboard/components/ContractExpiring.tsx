'use client';

import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { contractExpiringData } from '../services/data';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ContractExpiring() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Contract Expiring</h2>
      <Doughnut data={contractExpiringData} />
    </div>
  );
}
