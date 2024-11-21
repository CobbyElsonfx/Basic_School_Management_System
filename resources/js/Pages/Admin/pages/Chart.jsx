import React from 'react';
import Breadcrumb from '../../../Components/Breadcrumbs/Breadcrumb';
import ChartOne from '../../../Components/Charts/ChartOne';
import ChartThree from '../../../Components/Charts/ChartThree';
import ChartTwo from '../../../Components/Charts/ChartTwo';

const Chart = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;