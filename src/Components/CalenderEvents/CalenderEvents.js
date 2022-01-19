import './CalenderEvents.css'
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlinePermContactCalendar } from "react-icons/md";

const CalenderEvents = ({events}) => {
  let eventList = events.map(event => {
    return (
      <div className="event-card" key={event.id}>
        <div className="event-date">
          <p className="month">{event.month}</p>
          <p className="day">{event.day}</p>
        </div>
        <div className="event-details">
          {event.status && <div className={`event-status ${event.status.toLowerCase()}`}>{event.status}</div>}
          <p className="event-title">{event.title}</p>
          <p><GoLocation className="calender-icon"/> {event.location}</p>
          <p><AiOutlineClockCircle className="calender-icon"/> {event.time}</p>
          <p><MdOutlinePermContactCalendar className="calender-icon"/> {event.phone}</p>
        </div>
      </div>
    )
  })

  return (
    <section className="calender-section">
      <h1 className="title-calender">Calender of Events</h1>
      <div className="calender-spacer"></div>
      <div className="calender-list">
        {eventList}
      </div>
      <button className="view-more-button">View All Events</button>
    </section>
  )
}

export default CalenderEvents;
