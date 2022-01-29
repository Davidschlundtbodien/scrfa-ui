import './UpdateCard.css'


const UpdateCard = ({update}) => {
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
}

export default UpdateCard;
