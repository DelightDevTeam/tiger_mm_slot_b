import React, { useState, useEffect } from 'react'
import '../assets/css/history.css'
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseURL';


const History = () => {
    let auth = localStorage.getItem("token");
    let lan = localStorage.getItem("lang");
    let navigate = useNavigate();
      useEffect(() => {
        if (!auth) {
          navigate("/login");
        }
      }, [navigate]);
    
    const [url, setUrl] = useState("/transactions?type=");
    const [param, setParam] = useState("today");
    const {data: logs, loading, error} = useFetch(BASE_URL+url+param);
    console.log(logs);

    return (
        <div className='py-4 container history' style={{ minHeight: '50vh' }}>
            <h1 className="mb-4 mb-sm-5 text-center gradient-text">History</h1>
            <div className="d-flex mb-3">
                <p
                    className={`historyTitle me-2 me-sm-4   ${param == "today" ? "active" : ""}`}
                    onClick={() => setParam("today")}
                >Today</p>
                <p
                    className={` historyTitle me-2 me-sm-4 ${param == "yesterday" ? "active" : ""}`}
                    onClick={() => setParam("yesterday")}
                >Yesterday</p>
                <p
                    className={`historyTitle me-2 me-sm-4 ${param == "this_week" ? "active" : ""}`}
                    onClick={() => setParam("this_week")}
                >This Week</p>
                <p
                    className={`historyTitle  ${param == "last_week" ? "active" : ""}`}
                    onClick={() => setParam("last_week")}
                >Last Week</p>
            </div>
            <div className="table-responsive text-center">
                <table className="table table-transparent">
                    <thead>
                        <tr>
                            <th>နံပါတ်</th>
                            {/* <th>ဂိမ်းအခြေအနေ</th> */}
                            <th>အပိတ်လက်ကျန်</th>
                            <th>အမျိုးအစား</th>
                            <th>ပမာဏ (ကျပ်)</th>
                            <th>အချိန်</th>
                        </tr>

                    </thead>
                    <tbody>
                        {logs && logs.map((log, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                {/* <th>ဂိမ်းအခြေအနေ</th> */}
                                <td>{log.closing_balance}</td>
                                <td>{log.type}</td>
                                <td>{log.amount}</td>
                                <td>{log.datetime}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>



            </div>

        </div>
    )
}

export default History