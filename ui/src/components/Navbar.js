import React from 'react';

// Navbar to navigate in the front used by everypage
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
          <a href="/get_all_clients">Get clients data</a>
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
