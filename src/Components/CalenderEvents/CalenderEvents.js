import './CalenderEvents.css'

const CalenderEvents = ({events}) => {
  let eventList = events.map(event => {
    return (
      <div className="event-card" key={event.id}>
        <div className="event-date">
          <p className="month">{event.month}</p>
          <p className="day">{event.day}</p>
        </div>
        <div className="event-details">
          {event.status && <p className={`event-status ${event.status.toLowerCase()}`}>{event.status}</p>}
          <p className="event-title">{event.title}</p>
          <p>{event.location}</p>
          <p>{event.time}</p>
          <p>{event.phone}</p>
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
      <button>View All Events</button>
    </section>
  )
}

export default CalenderEvents;
