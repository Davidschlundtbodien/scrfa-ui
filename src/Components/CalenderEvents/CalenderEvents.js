import './CalenderEvents.scss'
import EventCard from '../EventCard/EventCard'

const CalenderEvents = ({events}) => {
  let eventList = events.map(event => {
    return (
      <EventCard event={event}/>
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
