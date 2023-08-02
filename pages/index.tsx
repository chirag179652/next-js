import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { getFeaturedEvents } from '@/dummy-data';
import EventList from '@/components/events/EventList';

export default function Home() {
  const featuredEventList = getFeaturedEvents();

  return (
    <div className={styles.main}>
      <ul>
        <EventList eventItems={featuredEventList} />
      </ul>
    </div>
  );
}
