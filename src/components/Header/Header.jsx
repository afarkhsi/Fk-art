import { Carousel } from 'react-bootstrap';
import './style.css';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useContext(ThemeContext);
  console.log('dark mode:', darkMode);

  const cible = document.querySelector('.App');

  if (darkMode) {
    cible?.classList.add('dark');
  } else {
    cible?.classList.remove('dark');
  }

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="col banner text-center">
      <span className="banner_title">FK-art</span>
      <Carousel
        fade
        interval={3000}
        prevIcon={false}
        nextIcon={false}
        indicators={false}
      >
        <Carousel.Item className="banner">
          <img
            className=" w-100 banner-img"
            src={'images/zoro-fanart.jpg'}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="banner">
          <img
            className=" w-100 banner-img"
            src={'images/shikamaru-vs-armin.jpg'}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="banner">
          <img
            className=" w-100 banner-img"
            src={'images/takamura.jpg'}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item className="banner">
          <img
            className=" w-100 banner-img"
            src={'images/kyoraku-x-sasuke.jpg'}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>

      <div className="darkmode-button">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={toggleTheme}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
      {/* <button className="banner_switch" onClick={toggleTheme}>
        {darkMode ? 'Mode clair' : 'Mode sombre'}
      </button> */}
    </div>
  );
};

export default Header;
