import './HorizontalScrollList.scss'

const HorizontalScrollList = () => {
  return (
    <section className="horizontal-scroll-list">
      <h2 className="horizontal-scroll-list__heading">
        Khóa học Pro<span className="horizontal-scroll-list__heading__icon">Mới</span>
      </h2>
      <div className="horizontal-scroll-list__contents">
        <div className="horizontal-scroll-list__contents__items">
          <div className="horizontal-scroll-list__contents__items__image">
            <a
              href="#"
              style={{
                backgroundImage:
                  'url(https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png)'
              }}></a>
          </div>
          <div className="horizontal-scroll-list__contents__items__title">
            <a href="#">HTML CSS Pro</a>
          </div>
          <div className="horizontal-scroll-list__contents__items__price">
            <span className="horizontal-scroll-list__contents__items__price--old">2.499.000đ</span>
            <span className="horizontal-scroll-list__contents__items__price--current">
              1.299.000đ
            </span>
          </div>
        </div>
        <div className="horizontal-scroll-list__contents__items">
          <div className="horizontal-scroll-list__contents__items__image">
            <a
              href="#"
              style={{
                backgroundImage:
                  'url("https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb607b4b.png")'
              }}></a>
          </div>
          <div className="horizontal-scroll-list__contents__items__title">
            <a href="#">Javascript Pro</a>
          </div>
        </div>
        <div className="horizontal-scroll-list__contents__items">
          <div className="horizontal-scroll-list__contents__items__image">
            <a
              href="#"
              style={{
                backgroundImage:
                  'url("https://files.fullstack.edu.vn/f8-prod/courses/20/62f13dded314e.png")'
              }}></a>
          </div>
          <div className="horizontal-scroll-list__contents__items__title">
            <a href="#">React Pro</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HorizontalScrollList