import { TestLocation } from '@/components/TestLocation';

export function Home() {
  return (
    <>
      <h1>Home</h1>
      {/*<div>env variable = {import.meta.env.VITE_API}</div>*/}
      <TestLocation />
    </>
  );
}
