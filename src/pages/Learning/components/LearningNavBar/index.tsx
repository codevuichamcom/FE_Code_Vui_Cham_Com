import { faChevronLeft, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { Link } from 'react-router-dom'
import './LearningNavBar.scss'

const LearningNavBar = () => {
  return (
    <nav className="learning-nav-bar">
      <div className="learning-nav-bar__back-btn">
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
      </div>
      <div className="learning-nav-bar__course-title">Kiến thức nhập môn IT</div>
      <div className="learning-nav-bar__actions">
        <div className="learning-nav-bar__actions__progress">
          <CircularProgressbar
            value={8}
            text="8%"
            styles={buildStyles({
              textColor: '#fff',
              textSize: '30px',
              pathColor: '#f05123',
              trailColor: '#4d4f50'
            })}
          />
        </div>
        <div className="learning-nav-bar__actions__note">
          <FontAwesomeIcon icon={faFile} />
        </div>
      </div>
    </nav>
  )
}

export default LearningNavBar
