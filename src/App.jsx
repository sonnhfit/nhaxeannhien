import { useRef, useState } from 'react'
import './App.css'
const navItems = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Tuyến xe Limousine', href: '#tuyen-xe-limousine' },
  { label: 'Tuyến xe cố định', href: '#tuyen-xe-co-dinh' },
  { label: 'Dịch vụ', href: '#dich-vu' },
  { label: 'Chính sách', href: '#chinh-sach' },
  { label: 'Tin tức', href: '#tin-tuc' },
  { label: 'Liên hệ', href: '#lien-he' },
]

const featureItems = [
  { title: 'Đặt vé nhanh', text: 'Đặt vé online 24/7, xác nhận ngay qua điện thoại.' },
  { title: 'Xe chất lượng cao', text: 'Nội thất hiện đại, ghế ngả sâu, hành trình êm ái.' },
  { title: 'Theo dõi chuyến đi', text: 'Cập nhật lịch trình, điểm đón trả minh bạch theo thời gian thực.' },
]

const serviceCards = [
  {
    title: 'Dịch vụ vận tải đẳng cấp',
    description:
      'Mang đến trải nghiệm di chuyển êm ái, an toàn và chỉn chu cho mọi hành khách trên từng chặng đường.',
    image: '/An-Nhien-Quang-Ninh-4.webp',
    imagePosition: 'center center',
    icon: 'quality',
    points: [
      'Nội thất rộng rãi, ghế ngồi thoải mái và khoang hành lý gọn gàng.',
      'Trang bị tiện ích cơ bản, hỗ trợ hành trình dễ chịu suốt chuyến đi.',
      'Đội ngũ tài xế và nhân viên phục vụ tận tâm, chuyên nghiệp.',
    ],
  },
  {
    title: 'Đưa đón linh hoạt tận nơi',
    description:
      'Tối ưu thời gian di chuyển với phương án trung chuyển phù hợp, giúp hành khách chủ động hơn khi đặt xe.',
    image: '/anhxedangchao.jpeg',
    imagePosition: 'top center',
    icon: 'pickup',
    points: [
      'Hỗ trợ đón trả tại nhiều điểm thuận tiện theo từng tuyến khai thác.',
      'Điều phối xe trung chuyển nhanh chóng, hạn chế thời gian chờ.',
      'Thông tin lịch trình rõ ràng, dễ theo dõi trước giờ khởi hành.',
    ],
  },
  {
    title: 'Hỗ trợ mọi khung giờ',
    description:
      'Luôn sẵn sàng đồng hành cùng khách hàng với lịch xe đều đặn và đội ngũ tư vấn phản hồi nhanh chóng.',
    image: '/dichvuhotro.jpeg',
    imagePosition: 'center right',
    icon: 'support',
    points: [
      'Tần suất 1 tiếng 1 chuyến, 2 xe xuất phát cùng giờ, phù hợp cả nhu cầu đi lại hàng ngày.',
      'Khung giờ vận hành linh hoạt, thuận tiện cho công việc và du lịch.',
      'Kênh hỗ trợ đặt vé luôn sẵn sàng giải đáp khi cần thiết.',
    ],
  },
]

const aboutHighlights = [
  'Hơn 10 năm kinh nghiệm vận tải hành khách',
  'Đội xe hiện đại, đạt tiêu chuẩn an toàn',
  'Lịch chạy cố định, đều đặn mỗi ngày',
  'Hỗ trợ khách hàng 24/7',
]

const limousineFeatures = [
  'Xe Limousine 9 chỗ cao cấp, ghế massage thư giãn',
  'Đón/trả tận nơi theo yêu cầu của khách',
  'Nước uống và khăn lạnh miễn phí trên xe',
  'Tài xế chuyên nghiệp, lịch sự và có kinh nghiệm',
]

const policyItems = [
  {
    title: 'Chính sách hoàn, hủy, đổi vé',
    content:
      'Khách hàng có thể hủy vé trước 24 giờ khởi hành và được hoàn 80% giá trị vé. Đổi vé sang chuyến khác được hỗ trợ miễn phí.',
  },
  {
    title: 'Chính sách giao nhận hàng hóa',
    content:
      'Hàng hóa được kiểm tra trước khi nhận và bàn giao nguyên vẹn đến người nhận. Nhà xe chịu trách nhiệm bồi thường nếu xảy ra hư hỏng do vận chuyển.',
  },
  {
    title: 'Chính sách thanh toán',
    content:
      'Hỗ trợ thanh toán tiền mặt, chuyển khoản ngân hàng và các ví điện tử phổ biến như MoMo, ZaloPay, VNPay.',
  },
  {
    title: 'Điều khoản bảo mật thông tin',
    content:
      'Thông tin cá nhân của khách hàng được bảo mật tuyệt đối, không chia sẻ với bên thứ ba vì bất kỳ mục đích thương mại nào.',
  },
]

const newsItems = [
  {
    date: '05/06/2026',
    title: 'An Nhiên mở thêm chuyến sáng sớm tuyến Cẩm Phả – Hà Nội',
    excerpt:
      'Từ ngày 10/06/2026, An Nhiên bổ sung chuyến khởi hành lúc 4:30 sáng, phục vụ khách hàng có nhu cầu bắt chuyến bay sớm tại sân bay Nội Bài.',
    image: '/An-Nhien-Quang-Ninh-4.webp',
  },
  {
    date: '28/05/2026',
    title: 'Khuyến mãi mùa hè: giảm 15% cho vé đặt trước 3 ngày',
    excerpt:
      'Chương trình áp dụng từ 01/06 đến 31/08/2026 cho tất cả các tuyến đang khai thác. Đặt ngay để được hưởng mức giá ưu đãi tốt nhất.',
    image: '/anhxedangchao.jpeg',
  },
  {
    date: '15/05/2026',
    title: 'An Nhiên được vinh danh "Nhà xe uy tín 2026"',
    excerpt:
      'Nhà xe An Nhiên đã được khách hàng bình chọn và nhận danh hiệu Nhà xe uy tín tuyến Cẩm Phả – Hà Nội năm 2026 từ Hiệp hội Vận tải tỉnh Quảng Ninh.',
    image: '/nhaxe.jpeg',
  },
]

const popularRoute = {
  image: '/An-Nhien-Quang-Ninh-4.webp',
  imagePosition: 'center center',
  name: 'Tuyến cố định Cẩm Phả - Hà Nội',
  description:
    'Lộ trình được khách hàng lựa chọn thường xuyên với lịch chạy cố định, thuận tiện cho cả nhu cầu đi lại hằng ngày lẫn công tác.',
  highlights: [
    '1 tiếng 1 chuyến, giúp khách dễ chủ động sắp xếp thời gian.',
    '2 xe xuất phát cùng giờ để tăng khả năng phục vụ trong các khung giờ cao điểm.',
    'Phục vụ đều đặn mỗi ngày trên tuyến Cẩm Phả - Hà Nội.',
  ],
}

const shippingFeatures = [
  {
    title: 'Giao nhận trong ngày',
    text: 'Hàng hóa được luân chuyển liên tục theo các chuyến xe dày đặc mỗi ngày, đảm bảo tiến độ gửi nhận nhanh chóng.',
    icon: 'same-day',
  },
  {
    title: 'Đóng gói an toàn',
    text: 'Quy trình kiểm soát và bảo quản nghiêm ngặt, giúp kiện hàng nguyên vẹn trong suốt quá trình vận chuyển.',
    icon: 'packing',
  },
  {
    title: 'Cước phí cạnh tranh',
    text: 'Mức giá gửi hàng được tối ưu theo lộ trình thực tế để khách hàng tiết kiệm chi phí hơn.',
    icon: 'pricing',
  },
]

const customerReviews = [
  {
    name: 'Hoàng Long',
    text: 'Đi nhiều tuyến của An Nhiên trong năm nay và thấy yên tâm hơn hẳn. Xe sạch, đúng giờ và hỗ trợ rất nhiệt tình.',
  },
  {
    name: 'Mai Lan',
    text: 'Mình thích nhất là cách nhân viên hỗ trợ nhanh và rõ ràng. Đặt vé đơn giản, đón trả đúng hẹn.',
  },
  {
    name: 'Tuấn Việt',
    text: 'Có lần mình cần đổi giờ gấp nhưng tổng đài xử lý rất nhanh. Trải nghiệm dịch vụ ổn định và chuyên nghiệp.',
  },
  {
    name: 'Sophia Eiz',
    text: 'Xe vận hành êm, tài xế lịch sự và thông tin chuyến được cập nhật đầy đủ. Mình rất hài lòng.',
  },
]

const footerCustomerLinks = [
  'Tra cứu hợp đồng',
  'Tra cứu đơn hàng',
  'Quy định đặt hợp đồng',
  'Chính sách hoàn, hủy, đổi hợp đồng',
  'Chính sách giao nhận hàng hóa',
  'Chính sách thanh toán',
  'Chính sách bảo mật thanh toán',
  'Điều khoản bảo mật thông tin',
  'Điều kiện cung cấp dịch vụ',
  'Nghĩa vụ của người bán và khách hàng',
]

const footerCompanyLinks = ['Giới thiệu', 'Văn phòng', 'Tin tức', 'Tuyến xe']

function ServiceFeatureIcon({ type }) {
  if (type === 'pickup') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 14V8.5C4 7.7 4.7 7 5.5 7h7.8c.7 0 1.4.4 1.8 1l2.3 3.2c.4.5.6 1 .6 1.6V14"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M7 16.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Zm10 0a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM4 12h14"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (type === 'support') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 11a6 6 0 0 1 12 0v2.5a1.5 1.5 0 0 1-1.5 1.5H15"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M6 15H5.5A1.5 1.5 0 0 1 4 13.5v-2A1.5 1.5 0 0 1 5.5 10H6m9 8h-2.5A2.5 2.5 0 0 1 10 15.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m9.2 12.6 1.9 1.9 3.7-4.4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M12 3.8 5.8 6.3v4.4c0 4 2.5 7.7 6.2 9 3.7-1.3 6.2-5 6.2-9V6.3L12 3.8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ShippingFeatureIcon({ type }) {
  if (type === 'packing') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 8.5 12 4l8 4.5M4 8.5V16L12 20l8-4V8.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M12 20V12M4 8.5l8 3.5 8-3.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (type === 'pricing') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 7.5h14M5 12h14M5 16.5h14"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M8.5 5.5c-1 0-1.8.7-1.8 1.6s.8 1.5 1.8 1.5 1.8.7 1.8 1.6-.8 1.6-1.8 1.6M8.5 5.5V4M8.5 12.2v1.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  if (type === 'express') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M13 4 8 13h4l-1 7 5-9h-4l1-7Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 14V8.8C4 7.8 4.8 7 5.8 7H15c.8 0 1.5.4 1.9 1l2 3c.4.5.6 1.1.6 1.8v2.7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M6.5 17.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4 13h15"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const departureDateInputRef = useRef(null)
  const returnDateInputRef = useRef(null)

  const openNativeDatePicker = (inputElement) => {
    if (!inputElement) {
      return
    }

    if (typeof inputElement.showPicker === 'function') {
      inputElement.showPicker()
      return
    }

    inputElement.focus()
  }

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
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Mở menu điều hướng</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Điều hướng chính"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link" onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="trang-chu" className="hero" aria-label="Tìm chuyến xe">
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
              <input
                ref={departureDateInputRef}
                type="date"
                defaultValue="2026-06-09"
                onClick={() => openNativeDatePicker(departureDateInputRef.current)}
              />
            </label>
            <label>
              Ngày về
              <input
                ref={returnDateInputRef}
                type="date"
                onClick={() => openNativeDatePicker(returnDateInputRef.current)}
              />
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

        <section id="dich-vu" className="service-showcase" aria-labelledby="service-showcase-title">
          <div className="service-showcase-heading">
            <h2 id="service-showcase-title">An Nhiên - Đồng hành an tâm trên mọi hành trình</h2>
            <p>Giải pháp di chuyển tiện lợi, chuyên nghiệp và thống nhất với trải nghiệm thương hiệu An Nhiên.</p>
          </div>

          <div className="service-showcase-grid">
            {serviceCards.map((card) => (
              <article key={card.title} className="service-card">
                <div
                  className="service-card-image"
                  style={{
                    backgroundImage: `linear-gradient(rgba(16, 83, 81, 0.12), rgba(16, 83, 81, 0.28)), url(${card.image})`,
                    backgroundPosition: card.imagePosition,
                  }}
                />

                <div className="service-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  <ul className="service-card-points">
                    {card.points.map((point) => (
                      <li key={point}>
                        <span className="service-card-icon">
                          <ServiceFeatureIcon type={card.icon} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="gioi-thieu" className="about-section" aria-labelledby="about-title">
          <div className="about-grid">
            <div className="about-content">
              <p className="about-eyebrow">Về chúng tôi</p>
              <h2 id="about-title">Nhà xe An Nhiên – Đồng hành trên mọi hành trình</h2>
              <p>
                An Nhiên là nhà xe uy tín chuyên khai thác tuyến vận tải hành khách cố định
                Cẩm Phả – Hà Nội, với lịch trình đều đặn mỗi ngày và đội ngũ phục vụ
                chuyên nghiệp, tận tâm.
              </p>
              <p>
                Chúng tôi cam kết mang đến trải nghiệm di chuyển an toàn, thoải mái và đúng
                giờ cho mọi hành khách trên từng chặng đường.
              </p>
              <ul className="about-highlights">
                {aboutHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="about-image" aria-hidden="true" />
          </div>
        </section>

        <section id="tuyen-xe-limousine" className="limousine-section" aria-labelledby="limousine-title">
          <div className="limousine-inner">
            <div className="limousine-heading">
              <h2 id="limousine-title">Tuyến xe Limousine</h2>
              <p>Trải nghiệm di chuyển đẳng cấp, tiện nghi trên từng hành trình.</p>
            </div>

            <div className="limousine-card">
              <div className="limousine-image" aria-hidden="true" />
              <div className="limousine-content">
                <h3>Limousine cao cấp – Tuyến Cẩm Phả / Hạ Long – Hà Nội</h3>
                <p>
                  An Nhiên cung cấp dịch vụ xe Limousine sang trọng phục vụ nhu cầu di chuyển
                  cao cấp cho quý khách hàng doanh nhân và gia đình. Hành trình êm ái, tiện
                  nghi và đúng giờ.
                </p>
                <ul className="limousine-features">
                  {limousineFeatures.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button type="button" className="limousine-cta">
                  Đặt Limousine ngay
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="tuyen-xe-co-dinh" className="popular-routes" aria-labelledby="popular-routes-title">
          <div className="popular-routes-heading">
            <h2 id="popular-routes-title">Lộ trình phổ biến của An Nhiên</h2>
            <p>Những tuyến xe được khách hàng lựa chọn thường xuyên.</p>
          </div>

          <div className="popular-route-card">
            <div
              className="popular-route-image"
              style={{
                backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.08), rgba(15, 23, 42, 0.2)), url(${popularRoute.image})`,
                backgroundPosition: popularRoute.imagePosition,
              }}
            />

            <div className="popular-route-content">
              <div className="popular-route-header">
                <div>
                  <p className="popular-route-label">Lộ trình duy nhất đang khai thác</p>
                  <h3>{popularRoute.name}</h3>
                </div>
                <button type="button">Đặt xe</button>
              </div>

              <p className="popular-route-description">{popularRoute.description}</p>

              <ul className="popular-route-highlights">
                {popularRoute.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="shipping-service" aria-labelledby="shipping-service-title">
          <div className="shipping-service-grid">
            <article className="shipping-visual-card">
              <img src="/nhaxe.jpeg" alt="Dịch vụ gửi hàng An Nhiên Express" />
              <div className="shipping-floating-note">
                <span className="shipping-floating-icon">
                  <ShippingFeatureIcon type="express" />
                </span>
                <div>
                  <h3>Giao hàng hỏa tốc</h3>
                  <p>Nhận và giao nhanh, tối ưu chi phí cho từng kiện hàng.</p>
                </div>
              </div>
            </article>

            <article className="shipping-details">
              <h2 id="shipping-service-title">Dịch vụ gửi hàng | An Nhiên Express</h2>
              <p>
                Không chỉ dẫn đầu về vận tải hành khách, An Nhiên còn là đối tác gửi hàng đáng tin cậy
                với hệ thống điều phối linh hoạt và quy trình giao nhận chuyên nghiệp.
              </p>

              <ul className="shipping-feature-list">
                {shippingFeatures.map((feature) => (
                  <li key={feature.title}>
                    <span className="shipping-feature-icon">
                      <ShippingFeatureIcon type={feature.icon} />
                    </span>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button type="button" className="shipping-cta">
                Liên hệ gửi hàng
              </button>
            </article>
          </div>
        </section>

        <section id="chinh-sach" className="policy-section" aria-labelledby="policy-title">
          <div className="policy-heading">
            <h2 id="policy-title">Chính sách & Điều khoản</h2>
            <p>Các chính sách minh bạch, bảo vệ quyền lợi tối đa cho khách hàng.</p>
          </div>
          <div className="policy-grid">
            {policyItems.map((item) => (
              <article key={item.title} className="policy-card">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tin-tuc" className="news-section" aria-labelledby="news-title">
          <div className="news-inner">
            <div className="news-heading">
              <h2 id="news-title">Tin tức</h2>
              <p>Cập nhật thông tin mới nhất về lịch trình, khuyến mãi và hoạt động của An Nhiên.</p>
            </div>
            <div className="news-grid">
              {newsItems.map((item) => (
                <article key={item.title} className="news-card">
                  <div
                    className="news-card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                    aria-hidden="true"
                  />
                  <div className="news-card-body">
                    <p className="news-card-date">{item.date}</p>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lien-he" className="support-feedback" aria-labelledby="support-feedback-title">
          <div className="support-feedback-grid">
            <article className="support-panel">
              <h2 id="support-feedback-title">Tổng đài đặt xe</h2>
              <p>Tổng đài An Nhiên hỗ trợ khách hàng 24/7.</p>

              <div className="support-box">
                <img
                  src="/tongdai_nhaxe.jpeg"
                  alt="Tổng đài hỗ trợ đặt xe An Nhiên"
                />
              </div>
            </article>

            <article className="feedback-panel" aria-label="Nhận xét của khách hàng">
              <h2>Nhận xét của khách hàng</h2>
              <div className="feedback-list">
                {customerReviews.map((review) => (
                  <article key={review.name} className="feedback-card">
                    <div className="feedback-avatar" aria-hidden="true">
                      {review.name.slice(0, 1)}
                    </div>
                    <div>
                      <h3>{review.name}</h3>
                      <p className="feedback-stars" aria-label="5 sao">
                        {'★★★★★'}
                      </p>
                      <p>{review.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Thông tin chân trang">
        <div className="site-footer-grid">
          <section className="footer-company">
            <div className="footer-brand">
              <div className="footer-brand-logo">an</div>
              <div>
                <p className="footer-brand-name">CẨM PHẢ - HÀ NỘI</p>
                <p className="footer-brand-tagline">Nhà xe tuyến cố định</p>
              </div>
            </div>

            <h2>Nhà xe tuyến Cẩm Phả - Hà Nội</h2>
            <p>
              Chuyên vận chuyển hành khách tuyến cố định Cẩm Phả - Hà Nội với lịch chạy đều đặn
              mỗi ngày.
            </p>

            <ul className="footer-contact-list">
              <li>247 Đường Vũng Đục, Phường Cẩm Phả</li>
              <li>
                <a href="tel:19008188">19008188</a>
              </li>
              <li>
                <a href="tel:02033658658">02033.658658</a>
              </li>
              <li>
                <a href="mailto:tuyencamphahanoi@gmail.com">tuyencamphahanoi@gmail.com</a>
              </li>
              <li>
                <a href="https://camphahanoi.vn">camphahanoi.vn</a>
              </li>
            </ul>

            <h3>Cam kết dịch vụ</h3>
            <div className="footer-awards">
              <div className="footer-award-card">Khởi hành đúng giờ</div>
              <div className="footer-award-card">Đón trả đúng điểm</div>
            </div>
          </section>

          <section className="footer-links">
            <h2>Khách hàng</h2>
            <ul>
              {footerCustomerLinks.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>

            <h2>Công ty</h2>
            <ul>
              {footerCompanyLinks.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-social" aria-label="Theo dõi chúng tôi">
            <h2>Theo dõi chúng tôi</h2>
            <article className="footer-social-card">
              <header>
                <div className="footer-social-page-logo">an</div>
                <div>
                  <p>CẨM PHẢ - HÀ NỘI</p>
                  <small>Thông tin tuyến xe mỗi ngày</small>
                </div>
              </header>
              <div className="footer-social-actions">
                <button type="button">Follow Page</button>
                <button type="button">Share</button>
              </div>
              <div className="footer-social-cover" />
              <div className="footer-social-post">
                🚍 Nhà xe tuyến Cẩm Phả - Hà Nội nhận đặt vé mỗi ngày, hỗ trợ khách 24/7.
              </div>
            </article>
            <div className="footer-certification">ĐÃ THÔNG BÁO - BỘ CÔNG THƯƠNG</div>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default App
