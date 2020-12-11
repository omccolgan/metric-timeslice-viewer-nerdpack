import React from 'react';
import { TableChart } from 'nr1';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

const accountId = 689105;

export default class MetricTimesliceViewerNerdpackNerdletNerdlet extends React.Component {
    render() {
        return (
            <div className="container">
              <div className="row">
              <TableChart
                    accountId={accountId}
                    query={`FROM Metric
                    SELECT sum(newrelic.timeslice.value) AS 'Total call time'
                         , sum(newrelic.timeslice.value, exclusiveTime: true) AS 'Total exclusive time'
                         , count(newrelic.timeslice.value) AS 'Call count'
                    WHERE (metricTimesliceName = 'WebTransaction/Custom/Single: News' OR scope = 'WebTransaction/Custom/Single: News') 
                      AND entity.guid = 'Njg5MTA1fEFQTXxBUFBMSUNBVElPTnw0NjM4NzY0' 
                    FACET metricTimesliceName, scope
                    LIMIT 100 
                    SINCE 30 minutes ago `}
                    fullWidth
                    className="chart"
                />
              </div>
            </div>
          );
    }
}
