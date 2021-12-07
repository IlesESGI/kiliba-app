import React from 'react';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
        <a href="home">Home</a>
        </li>
        <li>
          <a href="/insert_data">Insert new data</a>
        </li>
        <li>
          <a href="/get_data">Get clients data</a>
        </li>
        <li>
          <a href="/search_mail">Search a specific mail</a>
        </li>
        <li>
          <a href="/get_mean">Get grade's mean</a>
        </li>
      </ul>
    </div>
  );
}
