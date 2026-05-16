import React, { useState } from 'react';

const VehicleFilter = ({ filter, onFilterChange }: { filter: { price: number; type: string; available: boolean }; onFilterChange: (filter: { price: number; type: string; available: boolean }) => void }) => {
  const [price, setPrice] = useState(filter.price);
  const [type, setType] = useState(filter.type);
  const [available, setAvailable] = useState(filter.available);

  const handleFilterChange = () => {
    onFilterChange({ price, type, available });
  };

  return (
    <div>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          className="block w-full pl-10 py-2 text-base text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <label>
        Type:
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="block w-full pl-10 py-2 text-base text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
          className="block w-full pl-10 py-2 text-base text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
      <button onClick={handleFilterChange} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Apply Filter
      </button>
    </div>
  );
};

export default VehicleFilter;