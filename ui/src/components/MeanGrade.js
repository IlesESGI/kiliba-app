import Navbar from './Navbar';
import React from 'react';

export default function MeanGrade() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="title">Grade's mean</h2>
        <div id="wrapper">
            <h2 className="title">10</h2>
        </div>
      </div>
    </div>
  );
}
