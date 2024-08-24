"use client";

import { useState } from 'react';
import "./registeruser.css"
function UpdateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id,setId] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/users?id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name,email }),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="button">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;