import { TestLocation } from '@/components/TestLocation';
import { PieChart } from '@/components/PieChart';
import { TittleH1 } from '@/components/TitleH1/index.styles';

export function Home() {
  return (
    <>
      <TittleH1>Home</TittleH1>
      {/* <div>env variable = {import.meta.env.VITE_API}</div> */}
      <TestLocation />
      <PieChart />
    </>
  );
}
