import './RecentUpdates.css'
import UpdateCard from '../UpdateCard/UpdateCard'

const RecentUpdates = ({updates}) => {

  let updateList = updates.map(update => {
    return (
      <UpdateCard update={update} />
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
