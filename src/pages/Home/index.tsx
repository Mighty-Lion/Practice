import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { TestLocation } from '@/components/TestLocation';
import { PieChart } from '@/components/PieChart';
import { TittleH1 } from '@/components/TitleH1/index.styles';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Suspense fallback="...loading">
        <TittleH1>{t('main.header')}</TittleH1>
      </Suspense>
      {/* <div>env variable = {import.meta.env.VITE_API}</div> */}
      <TestLocation />
      <PieChart />
    </>
  );
}
