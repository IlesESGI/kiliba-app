import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import RequestService from '../services/request-services.js';

// Page (/insert_data) that allow user to create and save a new client
export default function InsertClient() {

  // Error to inform user that an error occured in the form
  const [error, setError] = useState(false);
  // Store email
  const [email, setEmail] = useState('');
  // Store grade
  const [grade, setGrade] = useState('');

  // Each time a key is pressed in the input mail, update email
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // Each time a key is pressed in the input grade, update grade
  const onChangeGrade = (e) => {
    setGrade(e.target.value);
  };

  // Test if the email is valid or not empty and if the grade is a positive number 
  const handleClick = (e) => {
    e.preventDefault();
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      setError(true);
      return;
    }
    const regexNumber = /^[1-9]\d*$/;
    if (!grade || !regexNumber.test(grade)) {
      setError(true);
      return;
    }
    setError(false);

    const data = {
      "email": email,
      "grade": grade
    }

    // Launch request to save the new client
    RequestService.createClient(data)
      .then((res) => {
        window.location.href = '/get_all_clients';
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className="title">Insert new data</h2>
        <div id="wrapper">
          <form action="#" id="form">
            <label htmlFor="email">email</label>
            <input onChange={(e) => onChangeEmail(e)} type="text" id="email" />
            <label htmlFor="grade">grade</label>
            <input onChange={(e) => onChangeGrade(e)} type="text" id="grade" />
            {error ? (
              <div className="errorMessage">
                Email or grade format isn't valid ! Try again (grade must be
                positive number)
              </div>
            ) : null}
            <input
              onClick={handleClick}
              type="submit"
              email="submit"
              id="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
