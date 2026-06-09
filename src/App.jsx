import './App.css'
import heroImage from './assets/hero.png'

const navItems = [
  'Trang chủ',
  'Giới thiệu',
  'Tuyến xe Limousine',
  'Tuyến xe cố định',
  'Dịch vụ',
  'Chính sách',
  'Tin tức',
  'Liên hệ',
]

const featureItems = [
  { title: 'Đặt vé nhanh', text: 'Đặt vé online 24/7, xác nhận ngay qua điện thoại.' },
  { title: 'Xe chất lượng cao', text: 'Nội thất hiện đại, ghế ngả sâu, hành trình êm ái.' },
  { title: 'Theo dõi chuyến đi', text: 'Cập nhật lịch trình, điểm đón trả minh bạch theo thời gian thực.' },
]

const routeColumns = [
  {
    imagePosition: 'center center',
    routes: [
      { name: 'Hà Nội - Hạ Long', distance: '140km', duration: "3 giờ 00'", vehicle: 'Limo 10 chỗ' },
      { name: 'Hà Nội - Cẩm Phả', distance: '150km', duration: "3 giờ 30'", vehicle: 'Limo 10 chỗ' },
      { name: 'Nội Bài - Hạ Long', distance: '160km', duration: "4 giờ 00'", vehicle: 'Limo 10 chỗ' },
      { name: 'Nội Bài - Cẩm Phả', distance: '170km', duration: "4 giờ 30'", vehicle: 'Limo 10 chỗ' },
    ],
  },
  {
    imagePosition: 'top center',
    routes: [
      { name: 'Thái Nguyên - Hà Nội', distance: '81km', duration: "1 giờ 40'", vehicle: 'Limo 10 chỗ' },
      { name: 'Thái Nguyên - Nội Bài', distance: '64km', duration: "1 giờ 20'", vehicle: 'Limo 10 chỗ' },
      { name: 'Thái Nguyên - Hạ Long', distance: '320km', duration: "4 giờ 30'", vehicle: 'Limo 10 chỗ' },
      { name: 'Thái Nguyên - Cẩm Phả', distance: '340km', duration: "5 giờ 00'", vehicle: 'Limo 10 chỗ' },
    ],
  },
  {
    imagePosition: 'center right',
    routes: [
      { name: 'Thái Nguyên - Tuyên Quang', distance: '85km', duration: "2 giờ 00'", vehicle: 'Limo 10 chỗ' },
      { name: 'Thái Nguyên - Bắc Kạn', distance: '85km', duration: "1 giờ 40'", vehicle: 'Limo 10 chỗ' },
      { name: 'Bắc Kạn - Hà Nội', distance: '150km', duration: "3 giờ 20'", vehicle: 'Limo 10 chỗ' },
      { name: 'Bắc Kạn - Nội Bài', distance: '130km', duration: "3 giờ 00'", vehicle: 'Limo 10 chỗ' },
    ],
  },
]

function RouteInfoIcon({ type }) {
  if (type === 'distance') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 18.5A2.5 2.5 0 1 0 4 13.5a2.5 2.5 0 0 0 0 5Zm16 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6.5 16h4l2.2-6.2a2 2 0 0 1 1.9-1.3H18"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M14.8 8.5 12 15m0 0h8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  if (type === 'duration') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M12 7.5v5l3 2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 15.5V8.8C4 7.8 4.8 7 5.8 7H15c.8 0 1.5.4 1.9 1l2 3c.4.5.6 1.1.6 1.8v2.7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4 13h15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  )
}

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="brand">
          <div className="brand-logo">an</div>
          <div>
            <p className="brand-name">AN NHIÊN</p>
            <p className="brand-tagline">Nhà xe an toàn - chất lượng</p>
          </div>
        </div>
        <nav className="main-nav" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" aria-label="Tìm chuyến xe">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Đặt vé xe An Nhiên nhanh chóng, tiện lợi</h1>
            <p>
              Hệ thống xe khách và vận chuyển hàng hóa tuyến Bắc - Trung - Nam,
              tối ưu cho trải nghiệm đặt vé trên điện thoại và máy tính.
            </p>
          </div>

          <form className="booking-card" aria-label="Form tìm chuyến">
            <label>
              Nơi đi
              <input type="text" placeholder="Nhập nơi đi" />
            </label>
            <label>
              Nơi đến
              <input type="text" placeholder="Nhập nơi đến" />
            </label>
            <label>
              Ngày đi
              <input type="date" defaultValue="2026-06-09" />
            </label>
            <label>
              Ngày về
              <input type="date" />
            </label>
            <button type="button">Tìm chuyến</button>
          </form>
        </section>

        <section className="features" aria-label="Lợi ích dịch vụ">
          {featureItems.map((item) => (
            <article key={item.title} className="feature-item">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </section>

        <section className="popular-routes" aria-labelledby="popular-routes-title">
          <div className="popular-routes-heading">
            <h2 id="popular-routes-title">Lộ trình phổ biến Hà Lan Limousine &amp; Hà Lan Buslines</h2>
            <p>Được khách hàng tin tưởng và lựa chọn!</p>
          </div>

          <div className="popular-routes-slider">
            <button type="button" className="slider-arrow" aria-label="Xem lộ trình trước">
              ←
            </button>

            <div className="route-columns">
              {routeColumns.map((column, columnIndex) => (
                <article key={columnIndex} className="route-column">
                  <div
                    className="route-column-image"
                    style={{
                      backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.2)), url(${heroImage})`,
                      backgroundPosition: column.imagePosition,
                    }}
                  />

                  <div className="route-list">
                    {column.routes.map((route) => (
                      <div key={route.name} className="route-item">
                        <div className="route-item-header">
                          <h3>{route.name}</h3>
                          <button type="button">Đặt xe</button>
                        </div>

                        <div className="route-meta" aria-label={`Thông tin tuyến ${route.name}`}>
                          <span>
                            <RouteInfoIcon type="distance" />
                            {route.distance}
                          </span>
                          <span>
                            <RouteInfoIcon type="duration" />
                            {route.duration}
                          </span>
                          <span>
                            <RouteInfoIcon type="vehicle" />
                            {route.vehicle}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <button type="button" className="slider-arrow" aria-label="Xem lộ trình tiếp theo">
              →
            </button>
          </div>

          <button type="button" className="show-more-routes">
            Xem thêm
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
