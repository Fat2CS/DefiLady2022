import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Tendance.css";

const Tendance = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);
  console.log(data.coins[1].item.name);

  // data.coins.map((item, index) => {
  return (
    <div className="tendance">
      <div className="container"></div>
      <h1> Le Top 7 des dernières 24h</h1>
      <div>
        {/* key={index} */}
        <div className="trend">{/* <p>{data.coins[1].item.name}</p> */}</div>
      </div>
    </div>
  );
  // });
};

export default Tendance;
