import React, { useState, useEffect } from 'react';
import '../assets/css/history.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

const GameLog = () => {
  let auth = localStorage.getItem('token');
  let lan = localStorage.getItem('lang');
  let navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate('/login');
    }
  }, [navigate]);

  const [url, setUrl] = useState('/wager-logs?type=');
  const [param, setParam] = useState('today');
  const { data: logs, loading, error } = useFetch(BASE_URL + url + param);
  // console.log(logs);
  // const [param, setParam] = useState("today");
  return (
    <div className='py-4 container history' style={{ minHeight: '50vh' }}>
      <h3 className='mb-4 mb-sm-5  text-center text-light gradient-text'>
        Game Log
      </h3>
      <div className='d-flex mb-3'>
        <p
          className={`historyTitle me-2 me-sm-4   ${
            param == 'today' ? 'active' : ''
          }`}
          onClick={() => setParam('today')}
        >
          Today
        </p>
        <p
          className={` historyTitle me-2 me-sm-4 ${
            param == 'yesterday' ? 'active' : ''
          }`}
          onClick={() => setParam('yesterday')}
        >
          Yesterday
        </p>
        <p
          className={`historyTitle me-2 me-sm-4 ${
            param == 'this_week' ? 'active' : ''
          }`}
          onClick={() => setParam('this_week')}
        >
          This Week
        </p>
        <p
          className={`historyTitle  ${param == 'last_week' ? 'active' : ''}`}
          onClick={() => setParam('last_week')}
        >
          Last Week
        </p>
      </div>
      <div className='table-responsive text-center'>
        <table className='table table-transparent'>
          <thead>
            <tr>
              <th>Bet Time From</th>
              <th>Game Brand</th>
              <th>Count</th>
              <th>TotalBetAmount</th>
              <th>TotalNetWin</th>
            </tr>
          </thead>
          <tbody>
            {logs &&
              logs.map((log, index) => (
                <tr key={index}>
                  <td>{log.from_date}</td>
                  <td>{log.product}</td>
                  <td>{log.total_count}</td>
                  <td>{log.total_bet_amount}</td>
                  <td>{log.total_transaction_amount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameLog;
