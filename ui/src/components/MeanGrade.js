import Navbar from './Navbar';
import React, { useState, useEffect } from 'react';
import RequestService from '../services/request-services.js';

// Page (/get_mean) that allow user to check the average grade of all clients
export default function MeanGrade() {
  // Store data from API
  const [data, setData] = useState(null);

  // Error set to true if we can't join API
  const [error, setError] = useState(false);

  // On the load of the page launch API request to get average grade
  useEffect(() => {
    RequestService.getGradesMean()
      .then((res) => {
        if (res.averageGrade || res.averageGrade === 0) {
          setData(Math.trunc(res.averageGrade * 100) / 100);
        }
        else {
          setData(null);
        }
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
        <h2 className="title">Grade's mean</h2>
        <div id="wrapper">
          {error && (
            <div>
              Can't retrieve data, check your connection!
            </div>
          )}
          {data && <h2 className="title">{data}</h2>}
          {data === null && <h3 className="title">No data yet !</h3>}
        </div>
      </div>
    </div>
  );
}
