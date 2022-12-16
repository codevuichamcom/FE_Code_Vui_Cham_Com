import { faBars, faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { useEffect, useState } from 'react'
import { LearningMenu, LearningNavBar } from '~/pages/Learning/components'
import './Learning.scss'

const LearningPage = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  useEffect(() => {
    disableBodyScroll(document.body)
    return () => {
      enableBodyScroll(document.body)
    }
  }, [])

  const onShowMenu = () => {
    setIsShowMenu(true)
  }
  const onHideMenu = () => {
    setIsShowMenu(false)
  }
  return (
    <div className="learning-page">
      <LearningNavBar />
      <div className="learning-page__wrapper">
        <div className="learning-page__video-player">
          <div className="learning-page__video-player__wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/lpkvLxqNDbM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
        <div className="learning-page__contents">
          <div className="learning-page__contents__lesson-name">Mô hình Client - Server là gì?</div>
          <div className="learning-page__contents__updated">Cập nhật tháng 11 năm 2022</div>
          <button className="learning-page__contents__take-note">
            <FontAwesomeIcon icon={faPlus} />
            <span>
              Thêm ghi chú tại <b>00:00</b>
            </span>
          </button>
          <p className="learning-page__contents__reference">
            Tham gia các cộng đồng để cùng học hỏi, chia sẻ và “thám thính” xem CodeVuiChamCom sắp
            có gì mới nhé!
          </p>
        </div>
        <div className="learning-page__actions-bar">
          <button className="learning-page__actions-bar__toggle-btn" onClick={onShowMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="learning-page__actions-bar__right">
            <button className="learning-page__actions-bar__right__btn learning-page__actions-bar__right__btn--prev">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>BÀI TRƯỚC</span>
            </button>
            <button className="learning-page__actions-bar__right__btn learning-page__actions-bar__right__btn--next">
              <span>BÀI TIẾP THEO</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      <LearningMenu isShowMenu={isShowMenu} onHambergerClick={onHideMenu} />
    </div>
  )
}

export default LearningPage
