import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components/macro';
import { numberValues } from '../../utils/device';

const Layout = styled('div')`
  margin: 5% 0;
`;

const Image = styled('img')`
  max-height: 30rem;
`;

const Dot = styled('div')`
  padding: 2px;
  background: white;
  margin-top: 0.5rem;
`;

const Slideshow = props => {
  const { images } = props;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: numberValues.mobile,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: i => (
      <Dot />
    )
  };

  return (
    <Layout>
      <Slider {...settings}>
        {images.map(imageSrc => (
          <Image src={imageSrc} key={imageSrc} />
        ))}
      </Slider>
    </Layout>
  );
};

export default Slideshow;