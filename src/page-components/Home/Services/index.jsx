import React from 'react';
import styled from 'styled-components/macro';
import Slider from 'react-slick';

import Text from '../../../components/Text';
import ServiceSlide from './ServiceSlide';
import IntroSlide from './IntroSlide';
import SlideLayout from './SlideLayout';
import arrowImage from '../../assets/arrow.svg';

const Layout = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const slidesData = [
  {
    name: 'Screen Replacements',
    description: `
We assist in the post-production process with services like compositing, rotoscoping, cleanup, 3D tracking and CGI services like **3D modelling** and animation, lighting, etc.


[See more...](/course-template)
  `,
  },
];

const Overlay = styled(SlideLayout)`
  position: absolute;
  justify-content: flex-start;
`;

const _PrevArrow = styled('img')`
  --arrow-width: 1.8rem;
  --arrow-height: calc(2 * var(--arrow-width));
  position: absolute;
  top: 3rem;
  right: calc(1 * var(--arrow-width) + 2rem);
  width: var(--arrow-width);
  height: var(--arrow-height);
  z-index: 1;
  cursor: pointer;
`;

const _NextArrow = styled(_PrevArrow)`
  right: 2rem;
  transform: rotate(180deg);
`;

function PrevArrow(props) {
  const { onClick } = props;
  return <_PrevArrow onClick={onClick} src={arrowImage} />;
}

function NextArrow(props) {
  const { onClick } = props;
  return <_NextArrow onClick={onClick} src={arrowImage} />;
}

const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Services = () => {
  return (
    <Layout>
      <Slider {...settings}>
        <IntroSlide />
        {slidesData.map(slide => (
          <ServiceSlide {...slide} />
        ))}
      </Slider>
      <Overlay>
        <Text size={10} as="h1">
          Services
        </Text>
      </Overlay>
    </Layout>
  );
};

export default Services;