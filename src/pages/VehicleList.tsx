import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/vehicleList.css';

interface Vehicle {
  id: number;
  name: string;
  description: string;
  image: string;
}

function VehicleList() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    axios.get('vehicles.json').then((response) => {
      setVehicles(response.data);
    });
  }, []);

  return (
    <div className="vehicle-list">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="vehicle">
          <img src={vehicle.image} alt={vehicle.name} />
          <h2>{vehicle.name}</h2>
          <p>{vehicle.description}</p>
        </div>
      ))}
    </div>
  );
}

export default VehicleList;