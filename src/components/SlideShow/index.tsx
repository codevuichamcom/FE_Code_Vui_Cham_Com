import './SlideShow.scss'

const SlideShow = () => {
  return (
    <div className="slide-show">
      <div className="slide-show__left">
        <h2 className="slide-show__left__heading">
          Khóa học HTML CSS Pro
          <img
            src="https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg"
            alt=""
          />
        </h2>
        <p className="slide-show__left__description">
          Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!
        </p>
        <div className="slide-show__left__more">
          <a>Tìm hiểu thêm</a>
        </div>
      </div>
      <div className="slide-show__right">
        <img
          className="slide-show__right__image"
          src="https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png"
          alt="Khóa Học HTML CSS Pro"
          title="Khóa học HTML CSS Pro"
        />
      </div>
    </div>
  )
}

export default SlideShow
