import Carousel from "react-bootstrap/Carousel";
import jeweleryBannar from "../../images/jeweleryBannar.jpeg";
import menBannar from "../../images/menBannar.jpeg";
import womenBannar from "../../images/womenBannar.jpeg";
import shoesBannar from "../../images/shoesBannar.jpg";
import electronicsBannar from "../../images/electronicsBannar.jpg";
import electronicsBannarTwo from "../../images/electronicsBannarTwo.jpg";

function Slider() {
	const bannars = [jeweleryBannar,electronicsBannarTwo,electronicsBannar,shoesBannar,menBannar, womenBannar];
  
  return (
    <section className="mb-5">
      <Carousel>
        {bannars.map((bannar,i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={bannar}
              alt="bannar"
            />

            <Carousel.Caption className="text-dark bg-light bg-opacity-75 p-1 rounded-pill">
              <h6>Welcome to Our Shop</h6>
              <small>Buy our latest products with special discount offer.</small>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Slider;
