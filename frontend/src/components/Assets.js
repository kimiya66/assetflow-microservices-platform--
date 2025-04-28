import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Assets() {
  const [assets, setAssets] = useState([]); // create empty list at start

  useEffect(() => {
    axios.get('http://localhost:8082/assets')
      .then(response => {
        setAssets(response.data);
      })
      .catch(error => {
        console.error('Error fetching assets:', error);
      });
  }, []);

  return (
    <div>
      <h2>Assets</h2>
      <ul>
        {assets.map(asset => (
          <li key={asset.id}>
            {asset.name} - ${asset.value} - Employee ID: {asset.employeeId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assets;
