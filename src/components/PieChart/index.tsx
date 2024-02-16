import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { ChartContainer } from '@/components/PieChart/index.styles';
import { TitleH2 } from '@/components/TitleH2/index.styles';
import { useTheme } from '@/hooks/useTheme';

Chart.register(ArcElement, Legend, Tooltip);

export function PieChart() {
  const { theme } = useTheme();
  const [textColor, setTextColor] = useState('#171717');

  const data = {
    labels: ['One', 'Two', 'Tree'],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ['aqua', 'orangered', 'purple'],
      },
    ],
  };

  useEffect(() => {
    if (theme === 'light') {
      setTextColor('#171717');
    } else {
      setTextColor('#F1F8FF');
    }
  }, [theme]);

  const options = {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
  };
  return (
    <>
      <TitleH2>Pie chart</TitleH2>
      <ChartContainer>
        <Pie data={data} width={300} height={300} options={options} />
      </ChartContainer>
    </>
  );
}
