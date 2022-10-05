import React from 'react';

import styles from './styles.module.scss';

import {
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ resCh, curCode }) => {
  
  return (
    <div className={styles.chart}>
      <ResponsiveContainer>
        <LineChart
          width={400}
          height={300}
          data={resCh}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={'value'} stroke="#2C66B8" name={curCode} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
