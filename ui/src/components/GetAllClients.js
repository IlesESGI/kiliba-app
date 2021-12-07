import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import RequestService from '../services/request-services.js';

// Page (/get_data) that retrieve all the data in the database
export default function getAllClients() {

  // Store data from API
  const [data, setData] = useState([]);

  // Error set to true if we can't join API
  const [error, setError] = useState(false);

  // On the load of the page launch API request to get all the clients
  useEffect(() => {
    RequestService.getAllClients()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="title">User(s) data</h2>
        <div id="wrapper">
          {error ? (
            <div>
              Impossible de récupérer les données, vérifier les services !
            </div>
          ) : (
            <ul>
              {data.map((item, key) => {
                return (
                  <li key={key}>
                    Email : {item.email} Grade : {item.grade}{' '}
                  </li>
                );
              })}
            </ul>
          )}
          {data.length === 0 && (
            <div>
              No data in the database for the moment !
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
