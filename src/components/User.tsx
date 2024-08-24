"use client";
import { useEffect, useState } from 'react';
interface User {
  id: string;
  email: string;
  name: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/users/');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          const { message } = await response.json();
          setError(message || 'Failed to fetch users.');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Users</h1>
      <ul>
        {users.map((user,index) => (
          <li key={index}>
            {user.name} - ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
