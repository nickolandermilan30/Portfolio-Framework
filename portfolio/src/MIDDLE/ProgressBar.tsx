import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip);

const ProgressBar = () => {
  // Sample data for the pie chart reflecting programming languages used
  const data = {
    labels: [
      'Java (57.14%)',
      'HTML (28.57%)',
      'CSS (28.57%)',
      'Python (28.57%)',
      'TensorFlow (28.57%)',
      'JavaScript (14.29%)',
      'Firebase (14.29%)',
      'Tailwind CSS (14.29%)',
      'MERN Stack (14.29%)',
    ],
    datasets: [
      {
        label: 'Programming Languages',
        data: [4, 2, 2, 2, 2, 1, 1, 1, 1], // Counts for each language
        backgroundColor: [
          'rgba(220, 38, 38, 0.6)', // HTML (bg-red-500)
          'rgba(37, 90, 235, 0.6)', // CSS (bg-blue-500)
          'rgba(253, 230, 0, 0.6)',  // JavaScript (bg-yellow-500)
          'rgba(249, 115, 22, 0.6)', // Java (bg-orange-700)
          'rgba(37, 99, 235, 0.6)', // Python (bg-blue-800)
          'rgba(255, 165, 0, 0.6)', // TensorFlow (bg-orange-500)
          'rgba(251, 146, 60, 0.6)', // Firebase (bg-orange-300)
          'rgba(37, 99, 235, 0.6)', // Tailwind CSS (bg-blue-500)
          'rgba(56, 189, 248, 0.6)', // MERN Stack (bg-blue-600)
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const languages = [
    { name: 'Java', color: 'rgba(249, 115, 22, 0.6)', percentage: '57.14%' },
    { name: 'HTML', color: 'rgba(220, 38, 38, 0.6)', percentage: '28.57%' },
    { name: 'CSS', color: 'rgba(37, 90, 235, 0.6)', percentage: '28.57%' },
    { name: 'Python', color: 'rgba(37, 99, 235, 0.6)', percentage: '28.57%' },
    { name: 'TensorFlow', color: 'rgba(255, 165, 0, 0.6)', percentage: '28.57%' },
    { name: 'JavaScript', color: 'rgba(253, 230, 0, 0.6)', percentage: '14.29%' },
    { name: 'Firebase', color: 'rgba(251, 146, 60, 0.6)', percentage: '14.29%' },
    { name: 'Tailwind CSS', color: 'rgba(37, 99, 235, 0.6)', percentage: '14.29%' },
    { name: 'MERN Stack', color: 'rgba(56, 189, 248, 0.6)', percentage: '14.29%' },
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}`; // Show count in tooltip
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* Title above the boxes */}
      <h2
        className="text-5xl mb-10 font-bold text-blue-800"
        style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
      >
        MOST USED
      </h2>

      <div className="flex flex-col items-center md:flex-row justify-between w-full">
        {/* Box 1 with Pie Chart */}
        <div className="w-96 md:w-1/2 min-h-96 rounded-lg mb-4 md:mb-0 md:mr-4 flex items-center justify-center">
          <div className="bg-gray-100 rounded-full shadow-lg p-5"> {/* Box with rounded corners and shadow */}
            <Pie data={data} options={options} width={300} height={300} /> {/* Pie chart */}
          </div>
        </div>

        {/* Box 2 with Languages List */}
        <div className="w-96 md:w-1/2 bg-gray-100 min-h-40 shadow-lg rounded-lg md:mb-0 p-4">
          <div className="flex flex-col md:flex-row flex-wrap"> {/* Adjusted flex to stack on mobile */}
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center w-full md:w-1/2 mb-4"> {/* Adjusted width for mobile */}
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-gray-700">{`${lang.name} (${lang.percentage})`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
