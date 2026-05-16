import React, { useState, useEffect } from 'react';
import Vehicle from '../types/vehicle';
import VehicleList from '../components/VehicleList';

function VehicleList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const data: Vehicle[] = [
        { id: 1, type: 'Car', price: 10000, year: 2020, available: true },
        { id: 2, type: 'Truck', price: 20000, year: 2019, available: false },
      ];
      setVehicles(data);
    };
    fetchVehicles();
  }, []);

  return (
    <div>
      <VehicleList vehicles={vehicles} />
    </div>
  );
}

export default VehicleList;