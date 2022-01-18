import './RecentUpdates.css'

const RecentUpdates = ({updates}) => {

  let updateList = updates.map(update => {
    return (
      <div className="update-card" key={update.id}>
        <a href="#">{update.title}</a>
        {update.description && <p>{update.description}</p>}
        <div className="update-status">
          <p>Published: {update.date}</p>
          <p className="status-icon">{update.status}</p>
        </div>
      </div>
    )
  })

  return (
    <section className="recent-updates">
      <h1 className="title-recent">Recent Updates</h1>
      <div className="recent-spacer"></div>
      <div className="update-list">
        {updateList}
      </div>
      <button className="view-more-button">View More</button>
    </section>
  )
}

export default RecentUpdates;
