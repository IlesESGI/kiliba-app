import Navbar from './Navbar';
import React from 'react';

export default function InsertPage() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="title">Insert new data</h2>
        <div id="wrapper">
          <form action="#" id="form">
            <label htmlFor="email">email</label>
            <input type="text" id="email" />
            <label htmlFor="grade">grade</label>
            <input type="text" id="grade" />
            <input
              type="submit"
              defaultValue="Send"
              email="submit"
              id="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
