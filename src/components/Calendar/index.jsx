import React from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';
import styles from './styles.module.scss';

const ReactCalendar = ({ onChange, value, range = false }) => {
  return (
    <Calendar
      className={styles.calendar}
      maxDate={new Date()}
      onChange={onChange}
      selectRange={range}
      value={value}
    />
  );
};

export default ReactCalendar;
