import React, { useState, useEffect } from 'react';

const TripleSetter = () => {
  const [score, setScore] = useState(0);

  const handlePowerUp = () => {
    debugger
    setScore(score + 1);
    setScore(score + 1);
    setScore(score + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>1. Challenge</h3>
      <p>Score: {score}</p>
      <button onClick={handlePowerUp}>Execute Logic</button>
    </div>
  );
};

const ProfileEditor = () => {
  const [user, setUser] = useState({ name: "Phil", role: "Teacher" });

  const handleUpdate = (newName) => {
    const tempUser = user; 
    tempUser.name = newName; 
    setUser(tempUser);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>2. Challenge</h3>
      <p>User: {user.name}</p>
      <input onChange={(e) => handleUpdate(e.target.value)} />
    </div>
  );
};

const InfiniteTracker = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }); 

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>3. Challenge</h3>
      <p>Count: {count}</p>
    </div>
  );
};

const TimeTraveler = () => {
  const [message, setMessage] = useState("");

  const handleDelayedAlert = () => {
    setTimeout(() => {
      alert("Value: " + message);
    }, 3000);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>4. Challenge</h3>
      <input 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
      />
      <button onClick={handleDelayedAlert}>Process</button>
    </div>
  );
};

const AdminPanel = ({ isAdmin }) => {
  if (isAdmin) {
    const [adminSecret] = useState("TOP_SECRET");
  }

  const [theme] = useState("System Default");

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>5. Challenge</h3>
      <p>Config: {theme}</p>
    </div>
  );
};

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>React Debugging Lab</h1>
      <hr />
      <TripleSetter />
      <ProfileEditor />
      <InfiniteTracker />
      <TimeTraveler />
      <AdminPanel isAdmin={true} />
    </div>
  );
}