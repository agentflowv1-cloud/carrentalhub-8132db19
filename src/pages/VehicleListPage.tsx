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
      const response = await fetch('https://example.com/vehicles');
      const data: Vehicle[] = await response.json();
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
    <div className="container mx-auto p-4 mb-10">
      <h1 className="text-3xl font-bold mb-4">Vehicle List</h1>
      <VehicleFilter filter={filter} onFilterChange={handleFilterChange} />
      <div className="mb-4">
        <select
          value={sort}
          onChange={(e) => handleSortChange(e.target.value)}
          className="block w-full pl-10 py-2 text-base text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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