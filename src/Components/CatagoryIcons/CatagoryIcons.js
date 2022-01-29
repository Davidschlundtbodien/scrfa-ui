import './CatagoryIcons.css'
import dataIcon from '../../assets/Data-Research-Icon.svg'
import geographyIcon from '../../assets/Geography-Icon.svg'
import programsIcon from '../../assets/Programs-Icon.svg'
import legislativeIcon from '../../assets/Legislative-Icon.svg'


const CatagoryIcons = () => {
  return (
    <section className="catagory-section">
      <a href='#'>
        <div className="catagory-icon">
          <img src={dataIcon} alt="Data chart icon"/>
          <p>Data & Research</p>
        </div>
      </a>
      <a href='#'>
        <div className="catagory-icon">
          <img src={geographyIcon} alt="state outline icon"/>
          <p>Geography & Mapping</p>
        </div>
      </a>
      <a href='#'>
        <div className="catagory-icon">
          <img src={programsIcon} alt=" services icon"/>
          <p>Programs & Services</p>
        </div>
      </a>
      <a href='#'>
        <div className="catagory-icon">
          <img src={legislativeIcon} alt="legislative fiscal icon"/>
          <p>Legislative Fiscal Impacts</p>
        </div>
      </a>
    </section>
  )
}

export default CatagoryIcons;
