import React from 'react';
import Vehicle from '../types/vehicle';

const VehicleList = ({ vehicles }: { vehicles: Vehicle[] }) => {
  return (
    <ul>
      {vehicles.map((vehicle) => (
        <li key={vehicle.id} className="mb-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold">{vehicle.type}</h2>
            <p>Price: {vehicle.price}</p>
          </div>
          <p>Year: {vehicle.year}</p>
          <p>Available: {vehicle.available ? 'Yes' : 'No'}</p>
        </li>
      ))}
    </ul>
  );
};

export default VehicleList;