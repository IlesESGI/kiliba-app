import Navbar from './Navbar';
import React from 'react';

export default function SearchMail() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="title">Search for a mail</h2>
        <div id="wrapper">
          <form action="#" id="form">
            <label htmlFor="search_email">email</label>
            <input type="text" id="email" />
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
