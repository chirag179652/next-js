import React, { FC } from 'react';
import EventItem from './EventItem';
import styles from './event-list.module.css';

const EventList: FC<{ eventItems: any }> = ({ eventItems }) => {
  return (
    <div className={styles.list}>
      {eventItems?.map((singleEvent: any) => {
        return <EventItem key={singleEvent.id} eventItem={singleEvent} />;
      })}
    </div>
  );
};

export default EventList;
