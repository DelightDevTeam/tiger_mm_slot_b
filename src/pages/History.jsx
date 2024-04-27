import React, { useState, useEffect } from 'react';
import '../assets/css/history.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';

const History = () => {
  let auth = localStorage.getItem('token');
  let lan = localStorage.getItem('lang');
  let navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate('/login');
    }
  }, [navigate]);
  const [param, setParam] = useState('today');
  const [url, setUrl] = useState(BASE_URL + "/transactions?type=" + param);
  const { data: logs, paginate, loading, error } = useFetch(url);
  const pages = paginate.links;
  const current_page = paginate.current_page;
  const per_page = paginate.per_page;
  // console.log(pages);

  return (
    <div className='py-4 container history' style={{ minHeight: '50vh' }}>
      <h1 className='mb-4 mb-sm-5 text-center gradient-text'>History</h1>
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
              <th>နံပါတ်</th>
              <th>အပိတ်လက်ကျန်</th>
              <th>အမျိုးအစား</th>
              <th>ဂိမ်းအမျိုးအစား</th>
              <th>ပမာဏ (ကျပ်)</th>
              <th>အချိန်</th>
            </tr>
          </thead>
          <tbody>
            {logs &&
              logs.map((log, index) => (
                <tr key={index}>
                  <td>{index + 1 + (current_page - 1) * per_page}</td>
                  {/* <th>ဂိမ်းအခြေအနေ</th> */}
                  <td>{log.closing_balance}</td>
                  <td>{log.type}</td>
                  <td>
                    <span className="badge text-bg-primary">{log.product_name ?? ""}</span>
                  </td>
                  <td>{log.amount}</td>
                  <td>{log.datetime}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-center pb-4">
        <div className='m-1'>
          <button onClick={() => setUrl(pages[0]?.url)} className="btn btn-outline-primary" disabled={current_page === 1}>
            <i className="fas fa-angle-left"></i>
          </button>
          </div>
            {pages && pages.slice(1, -1).map((page, index) => (
              <div key={index} className='m-1'>
                <button className={`btn ${page.active ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setUrl(page.url)}>
                  {page.label}
                </button>
              </div>
            ))}
            <div className='m-1'>
              <button onClick={() => setUrl(pages[pages.length - 1].url)} className="btn btn-outline-primary" disabled={current_page === (pages?.length - 2)}>
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
      </div>
    </div>
  );
};

export default History;
