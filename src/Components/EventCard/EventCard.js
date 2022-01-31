import './EventCard.scss'
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlinePermContactCalendar } from "react-icons/md";


const EventCard = ({event}) => {
  return (
    <div className="event-card" key={event.id}>
      <div className="event-date">
        <p className="month">{event.month}</p>
        <p className="day">{event.day}</p>
      </div>
      <div className="event-details">
        {event.status && <div className={`event-status ${event.status.toLowerCase()}`}>{event.status}</div>}
        <p className="event-title">{event.title}</p>
        <p aria-label="event address"><GoLocation className="calender-icon"/> {event.location}</p>
        <p aria-label="event start time"><AiOutlineClockCircle className="calender-icon"/> {event.time}</p>
        <p aria-label="event contact number"><MdOutlinePermContactCalendar className="calender-icon"/> {event.phone}</p>
      </div>
    </div>
  )
}

export default EventCard;
