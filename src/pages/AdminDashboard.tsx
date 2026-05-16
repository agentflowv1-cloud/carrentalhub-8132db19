import React, { useState } from 'react';
import axios from 'axios';
import './styles/adminDashboard.css';

interface Vehicle {
  id: number;
  name: string;
  description: string;
  image: string;
}

function AdminDashboard() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const vehicle: Vehicle = {
      id: Date.now(),
      name,
      description,
      image,
    };
    axios.post('vehicles.json', vehicle).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        </label>
        <label>
          Image:
          <input type="file" onChange={(event) => setImage(event.target.files![0].name)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminDashboard;