import './BackToTop.css'
import { FaChevronUp } from "react-icons/fa";


const BackToTop = () => {
  return (
    <div className="back-to-top" onClick={() => {
      window.scrollTo(0,0)
    }}>
      <p>Back to Top</p>
      <FaChevronUp className="back-to-top-icon"/>
    </div>
  )
}


export default BackToTop;
