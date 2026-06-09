import './App.css'

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
      </main>
    </div>
  )
}

export default App
