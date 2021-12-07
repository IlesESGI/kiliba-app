import Navbar from './Navbar';
import React from 'react';

// Page (/home) that introduce the app
export default function Home() {
  return (
    <div>
      <Navbar />
      <h2 className="title">Little application using Node React Mongo, use navbar to navigate and test different actions</h2>
    </div>
  );
}
