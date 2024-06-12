import React, { Fragment } from 'react';

import { Header } from './Header';
import { Activity } from './Activity';
import { DailyPlanProps } from './types';

export const DailyPlan: React.FC<DailyPlanProps> = (props) => {
  const { plan } = props;

  return (
    <>
      {plan.map((day, index) => (
        <Fragment key={index}>
          <Header title={day.title} fullDuration={day.fullDuration} />
          {day.activities.map((activity, index) => (
            <Activity key={index} {...activity} />
          ))}
        </Fragment>
      ))}
    </>
  );
};
