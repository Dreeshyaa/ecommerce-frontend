// import logo from './logo.svg';
import './App.css';
import ImageSilder from './ImageSlider';

  const Carousel = () => {
    const slides = [


        { url: "http://localhost:3000/carousel-img/img1.jpg", title: "beach" },
        { url: "http://localhost:3000/carousel-img/img2.jpg", title: "boat" },
        { url: "http://localhost:3000/carousel-img/img3.jpg", title: "forest" },
        { url: "http://localhost:3000/carousel-img/img4.jpg", title: "city" },
        { url: "http://localhost:3000/carousel-img/img5.jpg", title: "italy" },
  ];
const containerStyles = {
  width: "100%",
  height: "460px",
  // margin: "0 auto",
};

return(
  <div>
  <div style={containerStyles}>
  <ImageSilder slides={slides}></ImageSilder>
  </div>
  </div>
);
};

export default Carousel;
