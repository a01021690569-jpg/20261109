import { useEffect, useState } from "react";

const A = "/assets";

type ModalContent = {
  eyebrow: string;
  title: string;
  body: string;
};

const heroSlides = [
  {
    kicker: "PURE SKIN, BETTER TOMORROW",
    title: "PURE:ON",
    subtitle: "순수한 피부의 시작",
    body: "오늘도, 더 빛나는 당신을 위해\nPURE:ON이 함께합니다.",
    product: "Hydrating\nToner",
  },
  {
    kicker: "CALM SKIN, CLEAR TOMORROW",
    title: "PURE:ON",
    subtitle: "편안한 피부의 시작",
    body: "자연이 주는 순수한 진정,\n매일의 피부 균형을 지켜드립니다.",
    product: "Calming\nSerum",
  },
  {
    kicker: "PURE CARE, HEALTHY TOMORROW",
    title: "PURE:ON",
    subtitle: "건강한 피부의 시작",
    body: "꼭 필요한 성분만 정직하게,\n피부 본연의 힘을 채워드립니다.",
    product: "Barrier Vegan\nCream",
  },
];

const reviews = [
  { quote: "“피부가 한결 편안해져요!\n정말 순한 제품이에요.”", name: "김지윤님" },
  { quote: "“끈적임 없이 산뜻해서\n매일 사용하고 있어요.”", name: "이서연님" },
  { quote: "“피부톤이 맑아진 것 같아요!\n강력 추천합니다 :)”", name: "박지민님" },
  { quote: "“속당김이 줄고 피부가\n오래 촉촉하게 유지돼요.”", name: "최하은님" },
  { quote: "“민감한 날에도 부담 없이\n편안하게 사용할 수 있어요.”", name: "정수아님" },
  { quote: "“담백한 성분과 사용감이라\n온 가족이 함께 써요.”", name: "한예린님" },
  { quote: "“세안 후에도 당김 없이\n피부가 편안하게 느껴져요.”", name: "윤채원님" },
  { quote: "“매일 쓰기 좋은 순한 루틴,\n이제 정착할 것 같아요.”", name: "오민지님" },
  { quote: "“촉촉하지만 무겁지 않아\n계절 내내 잘 사용해요.”", name: "강서현님" },
];

const navItems = [
  ["HOME", "home"],
  ["ABOUT", "about"],
  ["PRODUCT", "product"],
  ["INGREDIENT", "ingredient"],
  ["REVIEW", "review"],
  ["EVENT", "event"],
  ["CONTACT", "contact"],
] as const;

function ArrowButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button className="outline-button" onClick={onClick}>
      {children}
      <span aria-hidden="true">→</span>
    </button>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  button,
  onClick,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  button: string;
  onClick: () => void;
}) {
  return (
    <div className="section-intro">
      <div className="eyebrow">
        <span>{eyebrow}</span>
        <i />
      </div>
      <h2>{title}</h2>
      <p>{body}</p>
      <ArrowButton onClick={onClick}>{button}</ArrowButton>
    </div>
  );
}

function ProductBottle({ className, product }: { className: string; product: string }) {
  return (
    <div className={`product-bottle ${className}`}>
      <span className="cap" />
      <b>PURE:ON</b>
      <small>{product}</small>
    </div>
  );
}

function DecorativeImage({
  src,
  className,
  alt = "",
}: {
  src: string;
  className: string;
  alt?: string;
}) {
  return <img src={`${A}/${src}`} className={className} alt={alt} />;
}

function Header({
  menuOpen,
  setMenuOpen,
  onSearch,
  onBag,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  onSearch: () => void;
  onBag: () => void;
}) {
  return (
    <header className="site-header">
      <a className="logo" href="#home" aria-label="PURE:ON 홈">
        PURE:ON
      </a>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="주 메뉴">
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="icon-button search-button" onClick={onSearch} aria-label="검색 열기">
          <DecorativeImage src="de94d.svg" className="search-icon" />
        </button>
        <button className="bag-button" onClick={onBag} aria-label="장바구니 열기">
          <span>0</span>
        </button>
        <button
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="모바일 메뉴"
          aria-expanded={menuOpen}
        >
          <i />
        </button>
}

function Hero({ openModal }: { openModal: (content: ModalContent) => void }) {
  const [slide, setSlide] = useState(0);
  const current = heroSlides[slide];
  const move = (amount: number) =>
    setSlide((value) => (value + amount + heroSlides.length) % heroSlides.length);

  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        {/* 텍스트 및 버튼 관련 코드들... */}
      </div>

      {/* 🔥 화장품 메인 이미지는 바로 이 위치(Hero 컴포넌트 내부)에 있어야 합니다! */}
      <div className="hero-art" aria-label="화장품 메인 이미지">
        <img src="/assets/cosmetic-main.png" className="hero-main-image" alt="화장품 메인 이미지" />
      </div>
    </section>
  );
}
        <div className="eyebrow">
          <span>{current.kicker}</span>
          <i />
        </div>
        <h1>{current.title}</h1>
        <h2>{current.subtitle}</h2>
        <p>{current.body}</p>
        <ArrowButton
          onClick={() =>
            openModal({
              eyebrow: "BRAND STORY",
              title: "순수함에서 시작되는 변화",
              body: "PURE:ON은 피부에 필요한 것만 남기는 정직한 스킨케어를 만듭니다. 자연 유래 성분과 피부 과학의 균형으로 매일 편안한 변화를 전합니다.",
            })
          }
        >
          브랜드 스토리 보기
        </ArrowButton>
        <div className="hero-controls">
          <span>
            0{slide + 1} <i /> 03
          </span>
          <button onClick={() => move(-1)} aria-label="이전 슬라이드">
            <DecorativeImage src="aa78e.svg" className="" />
            <b>‹</b>
          </button>
          <button onClick={() => move(1)} aria-label="다음 슬라이드">
            <DecorativeImage src="aa78e.svg" className="" />
            <b>›</b>
          </button>
          
function About({ openModal }: { openModal: (content: ModalContent) => void }) {
  return (
    <section className="about section-grid" id="about">
      <SectionIntro
        eyebrow="ABOUT PURE:ON"
        title={
          <>
            피부가 숨 쉴 수 있는,
            <br />
            가장 순수한 순간을 위해
          </>
        }
        body={
          <>
            PURE:ON은 피부의 본질을 생각합니다.
            <br />
            자연이 주는 순수함과 과학이 만드는 변화를 더해,
            <br />
            오늘도 더 건강하고 빛나는 피부를 선사합니다.
          </>
        }
        button="브랜드 더보기"
        onClick={() =>
          openModal({
            eyebrow: "ABOUT PURE:ON",
            title: "피부 본연의 균형을 생각합니다",
            body: "자연의 순수함과 검증된 성분을 조화롭게 담아, 예민한 피부도 매일 부담 없이 사용할 수 있는 스킨케어를 제안합니다.",
          })
        }


function Products({ openModal }: { openModal: (content: ModalContent) => void }) {
  return (
    <section className="products section-grid" id="product">
      <SectionIntro
        eyebrow="OUR PRODUCTS"
        title="피부에 가장 필요한 것만"
        body={
          <>
            PURE:ON의 스킨케어로
            <br />
            지금, 더 건강한 피부를 만나보세요.
          </>
        }
        button="전체 제품 보기"
        onClick={() =>
          openModal({
            eyebrow: "OUR PRODUCTS",
            title: "피부 고민에 맞춘 네 가지 솔루션",
            body: "수분 토너, 진정 세럼, 비건 장벽 크림, 젠틀 클렌저까지. 매일의 루틴에 꼭 필요한 제품을 확인해 보세요.",
          })
        }
      />
      <div className="product-stage">
        <DecorativeImage src="3682c.svg" className="leaf product-leaf-one" />
        <ProductBottle className="bottle-toner" product={"Hydrating\nToner"} />
        <ProductBottle className="bottle-serum" product={"Calming\nSerum"} />
        <ProductBottle className="bottle-cream" product={"Barrier Vegan\nCream"} />
        <ProductBottle className="bottle-cleanser" product={"Gentle\nCleanser"} />
        <DecorativeImage src="c722f.svg" className="leaf product-leaf-two" />
      </div>
    </section>
  );
}

const ingredients = [
  ["♧", "식물 유래 성분", "(저자극 케어)"],
  ["◌", "수분 & 보습 케어", "(히알루론산)"],
  ["◇", "피부 장벽 강화", "(세라마이드)"],
];

function Ingredients({ openModal }: { openModal: (content: ModalContent) => void }) {
  return (
    <section className="ingredients section-grid" id="ingredient">
      <SectionIntro
        eyebrow="KEY INGREDIENTS"
        title={
          <>
            피부를 위한
            <br />
            순수한 성분들
          </>
        }
        body={
          <>
            자연에서 찾은 순수한 성분이
            <br />
            피부에 편안함을 더합니다.
          </>
        }
        button="성분 알아보기"
        onClick={() =>
          openModal({
            eyebrow: "KEY INGREDIENTS",
            title: "투명하게 공개하는 핵심 성분",
            body: "피부 진정을 돕는 식물 유래 성분, 수분을 채우는 히알루론산, 장벽을 지키는 세라마이드를 균형 있게 담았습니다.",
          })
        }
      />
      <div className="molecule" aria-hidden="true">
        <i className="bond" />
        <DecorativeImage src="43ac5.svg" className="molecule-core" />
        <DecorativeImage src="34536.svg" className="molecule-bubble m1" />
        <DecorativeImage src="e2230.svg" className="molecule-bubble m2" />
        <DecorativeImage src="e6464.svg" className="molecule-bubble m3" />
        <DecorativeImage src="86c4b.svg" className="molecule-bubble m4" />
        <DecorativeImage src="f17b4.svg" className="molecule-bubble m5" />
        <DecorativeImage src="5f200.svg" className="molecule-bubble m6" />
      </div>
      <div className="ingredient-list">
        {ingredients.map(([icon, title, detail]) => (
          <div className="ingredient-item" key={title}>
            <span className="ingredient-icon">
              <DecorativeImage src="8d0b1.svg" className="" />
              <b>{icon}</b>
            </span>
            <p>
              <strong>{title}</strong>
              <small>{detail}</small>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Reviews({ openModal }: { openModal: (content: ModalContent) => void }) {
  const [page, setPage] = useState(0);
  const visible = reviews.slice(page * 3, page * 3 + 3);

  return (
    <section className="reviews section-grid" id="review">
      <SectionIntro
        eyebrow="REAL REVIEW"
        title={
          <>
            지금, PURE:ON을
            <br />
            경험한 고객들의 이야기
          </>
        }
        body="더 많은 후기를 확인해보세요!"
        button="리뷰 더보기"
        onClick={() =>
          openModal({
            eyebrow: "REAL REVIEW",
            title: "매일의 순한 변화를 확인하세요",
            body: "PURE:ON을 직접 경험한 고객들의 솔직한 이야기를 모았습니다. 아래 슬라이드 버튼으로 더 많은 후기를 확인할 수 있습니다.",
          })
        }
      />
      <div className="review-area">
        <div className="review-track">
          {visible.map((review) => (
            <article className="review-card" key={review.name}>
              <DecorativeImage src="41502.svg" className="review-avatar" />
              <strong>★★★★★</strong>
              <p>{review.quote}</p>
              <small>{review.name}</small>
            </article>
          ))}
        </div>
        <div className="review-dots" aria-label="리뷰 슬라이드 선택">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              className={page === dot ? "active" : ""}
              onClick={() => setPage(dot)}
              aria-label={`${dot + 1}번 리뷰 슬라이드`}
            >
              <DecorativeImage src={dot === 0 ? "fc025.svg" : "dbfb5.svg"} className="" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Event({ openModal }: { openModal: (content: ModalContent) => void }) {
  return (
    <section className="event" id="event">
      <div className="event-copy">
        <span>SPECIAL EVENT</span>
        <h2>지금, PURE:ON을 더 특별하게 만나보세요!</h2>
        <p>신규 회원 가입 시, 10% 할인 쿠폰을 드려요.</p>
      </div>
      <ArrowButton
        onClick={() =>
          openModal({
            eyebrow: "SPECIAL EVENT",
            title: "신규 회원 10% 혜택",
            body: "이벤트 참여가 완료되었습니다. PURE:ON의 새로운 소식과 할인 쿠폰을 가장 먼저 만나보세요.",
          })
        }
      >
        이벤트 참여하기
      </ArrowButton>
      <div className="event-art">
        <DecorativeImage src="bb6a0.svg" className="discount-bubble" />
        <b>10%</b>
        <DecorativeImage src="35149.svg" className="leaf event-leaf-one" />
        <DecorativeImage src="167cc.svg" className="leaf event-leaf-two" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-brand">
        <b>PURE:ON</b>
        <span>Pure Skin, Better Tomorrow</span>
      </div>
      <nav aria-label="하단 메뉴">
        <a href="#home">이용안내</a>
        <i />
        <a href="#contact">개인정보처리방침</a>
        <i />
        <a href="tel:15880000">고객센터</a>
      </nav>
      <div className="socials">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="인스타그램"
        >
          ◎
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="유튜브">
          ▶
        </a>
        <a href="#home" aria-label="페이지 위로">
          ●
        </a>
      </div>
      <div className="contact">
        <b>고객센터&nbsp; 1588-0000</b>
        <span>평일 09:00 - 18:00 (주말·공휴일 휴무)</span>
      </div>
      <small>© 2026 PURE:ON. All rights reserved.</small>
    </footer>
  );
}

function Modal({ content, onClose }: { content: ModalContent | null; onClose: () => void }) {
  useEffect(() => {
    if (!content) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [content, onClose]);

  if (!content) return null;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="팝업 닫기">
          ×
        </button>
        <span>{content.eyebrow}</span>
        <h2 id="modal-title">{content.title}</h2>
        <p>{content.body}</p>
        <button className="modal-confirm" onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState<ModalContent | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="page-shell">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onSearch={() => setSearchOpen(true)}
        onBag={() =>
          setModal({
            eyebrow: "SHOPPING BAG",
            title: "장바구니가 비어 있습니다",
            body: "PURE:ON의 순한 스킨케어를 둘러보고 피부에 꼭 맞는 제품을 담아보세요.",
          })
        }
      />
      {searchOpen && (
        <div className="search-panel">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSearchOpen(false);
              setModal({
                eyebrow: "SEARCH",
                title: "검색 결과를 준비하고 있습니다",
                body: "입력하신 검색어와 관련된 PURE:ON 제품을 곧 만나보실 수 있습니다.",
              });
            }}
          >
            <label htmlFor="site-search">무엇을 찾고 계신가요?</label>
            <div>
              <input
                id="site-search"
                autoFocus
                placeholder="제품 또는 성분을 검색해 보세요"
                required
              />
              <button type="submit">검색</button>
              <button type="button" onClick={() => setSearchOpen(false)}>
                닫기
              </button>
            </div>
          </form>
        </div>
      )}
      <main>
        <Hero openModal={setModal} />
        <About openModal={setModal} />
        <Products openModal={setModal} />
        <Ingredients openModal={setModal} />
        <Reviews openModal={setModal} />
        <Event openModal={setModal} />
      </main>
      <Footer />
      <Modal content={modal} onClose={() => setModal(null)} />
    </div>
  );
}
