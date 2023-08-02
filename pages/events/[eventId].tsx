import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '@/dummy-data';
import EventSummary from '@/components/event-detail/event-summary';
import EventContent from '@/components/event-detail/event-content';
import EventLogistics from '@/components/event-detail/event-logistics';

const custonEvent = () => {
  const router = useRouter();
  const eventId = router.query['eventId'];

  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found with {eventId}</p>;
  }
  return (
    <>
      <EventSummary title={event?.title} />
      <EventLogistics
        date={event?.date}
        address={event?.location}
        image={event?.image}
        imageAlt={event?.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default custonEvent;
