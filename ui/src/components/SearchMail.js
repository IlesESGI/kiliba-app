import Navbar from './Navbar';
import React, { useState, Fragment } from 'react';
import RequestService from '../services/request-services.js';

// Page (/search_mail) to search client(s) by string
export default function SearchMail() {
  const [error, setError] = useState(false);
  // Email to search in the database
  const [email, setEmail] = useState('');
  // Store data from API
  const [data, setData] = useState([]);


  // Each time a key is pressed in the input mail, update email
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // Test if the email is not empty  
  const handleClick = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Field can't be empty!");
      return;
    }

    const data = {
      email: email,
    };

    // Launch request to search client(s) in DB
    RequestService.getClient(data)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="title">Search for email(s)</h2>
        <div id="wrapper">
          <form action="#" id="form">
            <label htmlFor="search_email">email</label>
            <input onChange={(e) => onChangeEmail(e)} type="text" id="email" />
            {error ? (
              <div className="errorMessage">
                An error occured check your connection
              </div>
            ) : null}
            <input
              onClick={handleClick}
              type="submit"
              defaultValue="Send"
              email="submit"
              id="submit"
            />
          </form>
        </div>
        <div>
          {data.length > 0 && (
            <Fragment>
              <h2 className="title">User(s) data</h2>
              <div id="wrapper">
                <ul>
                  {data.map((item, key) => {
                    return (
                      <li key={key}>
                        Email : {item.email} Grade : {item.grade}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
