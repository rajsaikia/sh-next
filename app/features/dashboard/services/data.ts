export const statsData = [
  { label: 'Accepted', value: 2340, color: 'text-green-500' },
  { label: 'In Contract', value: 1782, color: 'text-yellow-500' },
  { label: 'In Approval', value: 1596, color: 'text-orange-500' },
];

export const contractByStagesData = {
  labels: ['Active', 'Draft', 'Expired', 'Cancelled'],
  datasets: [
    {
      label: 'Contracts',
      data: [300, 150, 50, 20],
      backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
    },
  ],
};

export const contractExpiringData = {
  labels: ['Within 90 days', 'Within 30 days', 'Expired'],
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: ['#FFC107', '#2196F3', '#F44336'],
      borderColor: ['#FFC107', '#2196F3', '#F44336'],
      borderWidth: 1,
    },
  ],
};

export const contractByTypeData = {
  labels: ['NDA', 'Insurance', 'Lease', 'Maintenance', 'Purchase Agreement', 'Sale'],
  datasets: [
    {
      label: 'Percentage',
      data: [70, 26, 50, 66, 12, 10],
      backgroundColor: [
        '#4CAF50',
        '#2196F3',
        '#FFC107',
        '#F44336',
        '#9C27B0',
        '#E91E63',
      ],
    },
  ],
};

export const myContractsData = [
  {
    serial: 'CNTR000835F',
    name: 'Horizon Tech',
    value: '$48,292',
    status: 'Active',
  },
  {
    serial: 'CNTR000839F',
    name: 'Flowtech Labs',
    value: '$20,560',
    status: 'Draft',
  },
  {
    serial: 'CNTR00083F',
    name: 'ServerTech INC.',
    value: '$72,402',
    status: 'In Review',
  },
];

export const averageCycleTimeData = [
  { label: 'NDA', value: '25', unit: 'days' },
  { label: 'Insurance', value: '45', unit: 'days' },
  { label: 'Lease', value: '18', unit: 'days' },
  { label: 'Purchase', value: '12', unit: 'days' },
];
