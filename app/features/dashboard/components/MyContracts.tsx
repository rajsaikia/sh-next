import { myContractsData } from '../services/data';

const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500 text-white';
      case 'Draft':
        return 'bg-yellow-500 text-white';
      case 'In Review':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };
  

export default function MyContracts() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">My Contracts</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">SERIAL #</th>
            <th className="py-2">NAME</th>
            <th className="py-2">VALUE</th>
            <th className="py-2">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {myContractsData.map((contract, index) => (
            <tr key={index}>
              <td className="py-2">{contract.serial}</td>
              <td className="py-2">{contract.name}</td>
              <td className="py-2">{contract.value}</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 text-xs font-bold rounded-full ${getStatusClass(
                    contract.status
                  )}`}
                >
                  {contract.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
