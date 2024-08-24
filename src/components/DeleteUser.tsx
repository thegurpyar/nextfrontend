"use client"
import { useState } from 'react';
import "./registeruser.css"
function DeleteUser() {
  const [id, setId] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users?id=${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const { message } = await response.json();
        alert(`Error: ${message}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('An error occurred while deleting the user.');
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Delete</h2>
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="button">Delete</button>
      </form>
    </div>
  )
}

export default DeleteUser