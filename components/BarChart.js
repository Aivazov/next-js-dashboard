import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wes', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          data: [11945, 12551, 11233, 22994, 15423, 12123, 14785],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)',
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue',
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="bg-white w-full rounded-lg md:col-span-2 relative m-auto border h-[50vh] lg:h-[70vh]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
