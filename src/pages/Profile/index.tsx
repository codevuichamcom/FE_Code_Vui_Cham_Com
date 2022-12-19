import { faCamera, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Layout from '../Layout'
import './Profile.scss'

export const BANNER_HEIGHT = 200
const ProfilePage = () => {
  return (
    <Layout>
      <main className="profile">
        <div className="profile__banner">
          <div className="profile__banner__user">
            <div className="profile__banner__user__avatar">
              <img
                src="https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                alt="avatar"
              />
            </div>
            <div className="profile__banner__user__name">Code Vui Chấm Com</div>
          </div>
          <div className="profile__banner__edit-bg">
            <FontAwesomeIcon icon={faCamera} />
            Chỉnh sửa ảnh bìa
          </div>
        </div>
        <div className="profile__container">
          <div className="profile__container__introduce box-wrapper">
            <div className="profile__container__introduce__title">Giới thiệu</div>
            <div className="profile__container__introduce__participation">
              <FontAwesomeIcon icon={faUserGroup} />
              <span>
                Thành viên của{' '}
                <span className="highlight">CodeVuiChamCom - Học lập trình để đi làm</span> từ 2 năm
                trước
              </span>
            </div>
          </div>
          <div className="profile__container__activities box-wrapper">
            <div className="profile__container__activities__title">Hoạt động gần đây</div>
            <div className="profile__container__activities__contents">
              Chưa có hoạt động gần đây
            </div>
          </div>
          <div className="profile__container__course-participate box-wrapper">
            <div className="profile__container__course-participate__items">
              <a className="profile__container__course-participate__items__image" href="#">
                <img src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" />
              </a>
              <div className="profile__container__course-participate__items__course-name">
                Kiến Thức Nhập Môn IT
              </div>
              <p className="profile__container__course-participate__items__course-description">
                Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại
                khóa này trước nhé.
              </p>
            </div>
            <div className="profile__container__course-participate__items">
              <a className="profile__container__course-participate__items__image" href="#">
                <img src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" />
              </a>
              <div className="profile__container__course-participate__items__course-name">
                Kiến Thức Nhập Môn IT
              </div>
              <p className="profile__container__course-participate__items__course-description">
                Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại
                khóa này trước nhé.
              </p>
            </div>
            <div className="profile__container__course-participate__items">
              <a className="profile__container__course-participate__items__image" href="#">
                <img src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" />
              </a>
              <div className="profile__container__course-participate__items__course-name">
                Kiến Thức Nhập Môn IT
              </div>
              <p className="profile__container__course-participate__items__course-description">
                Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại
                khóa này trước nhé.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default ProfilePage
