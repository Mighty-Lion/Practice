import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ChartContainer } from '@/components/PieChart/index.styles';
import { TitleH2 } from '@/components/TitleH2/index.styles';

Chart.register(ArcElement, Tooltip, Legend);
export function PieChart() {
  const data = {
    labels: ['One', 'Two', 'Tree'],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ['aqua', 'orangered', 'purple'],
      },
    ],
  };

  const options = {};
  return (
    <ChartContainer>
      <TitleH2>Pie chart</TitleH2>
      <Pie data={data} options={options} />;
    </ChartContainer>
  );
}
