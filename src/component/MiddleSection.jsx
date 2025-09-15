import img1 from "../Picture.svg";
import img2 from "../Picture2.svg";
import img3 from "../Picture3.svg";

function MiddleSection() {
  return (
    <div className="image-section text-center section-bg-color  ">
      <div className="image-stack">
        <img src={img1} alt="Hiker 1" />
        <img src={img2} alt="Hiker 2" />
        <img src={img3} alt="Hiker 3" />
      </div>
    </div>
  );
}

export default MiddleSection;
