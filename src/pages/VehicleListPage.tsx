import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Vehicle from '../types/vehicle';
import VehicleList from '../components/VehicleList';
import VehicleFilter from '../components/VehicleFilter';

const VehicleListPage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [filter, setFilter] = useState({ price: 0, type: '', available: false });
  const [sort, setSort] = useState('price');

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

  const handleFilterChange = (filter: { price: number; type: string; available: boolean }) => {
    setFilter(filter);
    const filtered = vehicles.filter((vehicle) => {
      return (
        vehicle.price <= filter.price &&
        vehicle.type.includes(filter.type) &&
        vehicle.available === filter.available
      );
    });
    setFilteredVehicles(filtered);
  };

  const handleSortChange = (sort: string) => {
    setSort(sort);
    const sorted = filteredVehicles.sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'year') return a.year - b.year;
      return 0;
    });
    setFilteredVehicles(sorted);
  };

  return (
    <div>
      <h1>Vehicle List</h1>
      <VehicleFilter filter={filter} onFilterChange={handleFilterChange} />
      <div>
        <select
          value={sort}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="year">Year</option>
        </select>
      </div>
      <VehicleList vehicles={filteredVehicles.length ? filteredVehicles : vehicles} />
    </div>
  );
};

export default VehicleListPage;