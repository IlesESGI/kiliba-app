import Navbar from './Navbar';
import React from 'react';

export default function GetData() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="title">Users data</h2>
        <div id="wrapper">
          <ul>
            <li>
              <a>1</a>
            </li>
            <li>
              <a>2</a>
            </li>
            <li>
              <a>3</a>
            </li>
            <li>
              <a>4</a>
            </li>
            <li>
              <a>5</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
