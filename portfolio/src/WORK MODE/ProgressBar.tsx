import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const ProgressBar: React.FC = () => {
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
        data: [57.14, 28.57, 28.57, 28.57, 28.57, 14.29, 14.29, 14.29, 14.29],
        backgroundColor: [
          'rgba(249, 115, 22, 0.6)', // Java
          'rgba(220, 38, 38, 0.6)',  // HTML
          'rgba(37, 90, 235, 0.6)',  // CSS
          'rgba(37, 99, 235, 0.6)',  // Python
          'rgba(255, 165, 0, 0.6)',  // TensorFlow
          'rgba(253, 230, 0, 0.6)',  // JavaScript
          'rgba(251, 146, 60, 0.6)', // Firebase
          'rgba(37, 99, 235, 0.6)',  // Tailwind CSS
          'rgba(56, 189, 248, 0.6)', // MERN Stack
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
      datalabels: {
        color: '#fff',
        formatter: (value: number) => `${value}%`,
        anchor: 'center',
        align: 'end',
        offset: 10,
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h2
        className="text-5xl mb-10 font-bold text-red-800"
        style={{ fontFamily: '"Bebas Neue", sans-serif', fontWeight: 400 }}
      >
        MOST USED
      </h2>

      <div className="flex flex-col items-center md:flex-row justify-between w-full">
        <div className="w-96 md:w-1/2 min-h-96 rounded-lg mb-4 md:mb-0 md:mr-4 flex items-center justify-center">
          <div className="bg-gray-100 rounded-full shadow-lg p-5">
            <Pie data={data} options={options} width={300} height={300} />
          </div>
        </div>

        <div className="w-96 md:w-1/2 bg-gray-100 min-h-40 shadow-lg rounded-lg md:mb-0 p-4">
          <div className="flex flex-col md:flex-row flex-wrap">
            {data.labels.map((label, index) => (
              <div key={index} className="flex items-center w-full md:w-1/2 mb-4">
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index] as string,
                  }}
                />
                <span className="text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
