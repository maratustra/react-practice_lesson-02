const phone = '+7(962)556-1234';

const Header = () => (
  <header>
    <div className="wrapper">
      <div className="header">
        <a href="#">
          <Logo sector="header" />
        </a>
        <a href="tel:888" className="header-phone"></a>
        <div className="header-phonelink"><a href="tel:7(962)556-1234">{phone}</a></div>
      </div>
    </div>
  </header>
);

const Logo = (props) => <div className={props.sector + "-logo"}></div>;

const MainSection = () => (
  <main>
    <div className="wrapper">
      <div className="main">
        <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
        <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
          вебмастеру сгенерировать несколько абзацев более.
        </div>
        <MainButton class="main-btn" buttonName="Подробнее" />
      </div>
    </div>
  </main>
);

const MainButton = (props) => (
  <button className={'btn ' + props.class}><span>{props.buttonName}</span></button>
);

const FeaturesSection = () => (
  <section className="features">
    <div className="wrapper">
      <div className="features-wrapper">
        <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
        <div className="features-subhead">О нас</div>
        <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
          оратору отточить.
        </div>
        <div className="features-slider">
          <div className="features-slider_items">
            <SliderItem num="1" title="Первое целевое преимущество" />
            <SliderItem num="2" title="Второе целевое преимущество" />
            <SliderItem num="3" title="Третье целевое преимущество" />
            <SliderItem num="4" title="Четвертое целевое преимущество" />
          </div>
          <SliderArrowButton direction="prev" />
          <SliderArrowButton direction="next" />
        </div>
      </div>
    </div>
  </section>
);

const SliderItem = (props) => (
  <div className="features-slider_item">
    <div className="features-img" style={{ backgroundImage: `url(./images/${props.num}.svg)` }}></div>
    <div className="features-feature">{props.title}</div>
  </div>
);

const SliderArrowButton = (props) => (
  <button className={"features-slider-arrow features-slider-" + props.direction}>
    <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
      </path>
    </svg>
  </button>
);

const ContactSection = () => (
  <section className="contact">
    <div className="wrapper">
      <div className="contact-wrapper">
        <h2 className="contact-title">Остались вопросы?</h2>
        <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
        <form action="../mailer.smart.php" className="contact-form">
          <InputField inputType="text" inputText="Ваше имя" />
          <InputField inputType="tel" inputText="Телефон" />
          <InputField inputType="email" inputText="E-mail" />
          <MainButton class="contact-btn" buttonName="Позвоните мне" />
        </form>
        <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.</div>
      </div>
    </div>
  </section>
);

const InputField = (props) => <input type={props.inputType} placeholder={props.inputText} />;

const Footer = () => (
  <footer>
    <div className="footer">
      <Logo sector="footer" />
      <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
      <a href="tel:888" className="footer-phone"></a>
      <div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span> <a href="#">Ваше имя</a></div>
      <div className="footer-phonelink"><a href="tel:888">{phone}</a></div>
    </div>
  </footer>
);

const RenderJSX = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

ReactDOM.render(<RenderJSX />, document.getElementById('root'));