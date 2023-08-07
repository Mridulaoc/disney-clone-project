import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Wrap>
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </Wrap>
        
      </Carousel>      
    </Wrap>
  )
}

const Carousel = styled(Slider)`
  margin:2.5rem;

  .slick-next:before{
    opacity:0;
    font-size:2.5rem;
    z-index:1;
    }

.slick-prev:before{
  opacity:0;
  font-size:2.5rem;
  z-index:1;
}

  .slick-prev:hover:before{
    opacity:1;
    transition:opacity .5s ease;
  
  }  
  
  .slick-next:hover:before{
    opacity:1;
    transition:opacity .5s ease;

  }
  .slick-list{
    overflow:initial;
    // padding:1rem;
  }

  .slick-dots li button:before{
    font-size:1rem;
    color:#f0f0f0;
    padding:1rem;

  }

  .slick-dots li.slick-active button:before {
    color: #FFFFFF;
  }
 `
const Wrap = styled.div`
  border-radius:4px;
  cursor:pointer;
  position:relative;
  



  a{
    border-radius:4px;    
    position:relative;
    display: block;
    padding:.5rem;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;


  img{
    width:100%;
    height:100%;
    &:hover{
      border:.5rem solid rgba(249,249,249,0.5);
      border-radius:4px;
  }
}
  
  }
`

export default ImageSlider
