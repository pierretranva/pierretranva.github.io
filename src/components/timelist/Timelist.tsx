import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';

import './Timelist.css'

const Timelist = () => {

    return (
        <div className="timelist__main">
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary" />
                         <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Secondary</TimelineContent>
            </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color="grey" />
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
</Timeline>
         
        </div>
    )
}

export default Timelist;
