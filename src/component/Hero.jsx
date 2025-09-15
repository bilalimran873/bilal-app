import mainImg from "../MainPicture.png";
import headingImg from "../heading.svg";
import socialImg from "../Social.svg";
import sliderImg from "../slider.svg";

function Hero() {
  return (
    <div
      className="full-page-bg"
      style={{
        backgroundImage: `url(${mainImg})`,
      }}
    >
      <div className="banner-content text-center d-flex justify-content-center align-items-center">
        <img
          src={headingImg}
          alt="Banner Heading"
          className="banner-text-img"
        />
      </div>

      <div className="social-bar-image">
        <img src={socialImg} alt="Social Media" className="social-img" />
      </div>

      {/* Slider Image */}
      <div className="slider-image-container">
        <img src={sliderImg} alt="Slider" className="slider-img" />
      </div>
    </div>
  );
}

export default Hero;
