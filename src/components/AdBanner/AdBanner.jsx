import React from "react";
import styled from "styled-components";

function AdBanner() {
  const colors = ["#0088FE", "#00C49F", "#e4e716", "#ff4d00"];
  const delay = 3000;

  const [index, setIndex] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    if (!hovered) {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, hovered]);

  return (
    <Container>
      <SliderContent indexVal={-index * 100}>
        {colors.map((backgroundColor, index) => (
          <SlideItem
            key={index}
            backgroundColor={backgroundColor}
            onMouseOver={() => {
              setHovered(true);
              setIndex(index);
            }}
            onMouseOut={()=>setHovered(false)}
          >
            Hi
          </SlideItem>
        ))}
      </SliderContent>
      <SlideDotContent>
        {colors.map((_, idx) => (
          <SlideDotBtn
            key={idx}
            onClick={() => {
              setIndex(idx);
            }}
            onTouchEnd={() => {
              setIndex(idx);
            }}
          >
            <SlideDot active={index === idx} />
          </SlideDotBtn>
        ))}
      </SlideDotContent>
    </Container>
  );
}

export default AdBanner;

const Container = styled.div`
  margin: 1rem 0 0 0;
  overflow: hidden;
`;

const SliderContent = styled.div`
  white-space: nowrap;
  transition: ease 1000ms;
  transform: ${(props) =>
    props.indexVal ? `translate3d(${props.indexVal}%, 0, 0)` : ""};
`;

const SlideItem = styled.div`
  height: 20rem;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: 1280px) {
    height: 30rem;
  }

  @media screen and (min-width: 1500px) {
    height: 40rem;
  }

  @media screen and (max-width: 800px) {
    height: 15rem;
  }

  @media screen and (max-width: 480px) {
    height: 10rem;
  }

  display: inline-block;
  width: 100%;
  border-radius: 0.3rem;
  background: ${(props) =>
    props?.backgroundColor ? props?.backgroundColor : "#ffffff"};
`;

const SlideDotContent = styled.div`
  text-align: center;
`;

const SlideDotBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
  background: none;
`;

const SlideDot = styled.div`
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  margin: 15px 7px 0px;
  background-color: ${(props) => (props.active ? "#3a3838" : "#c4c4c4")};
  @media screen and (max-width: 800px) {
    height: 0.5rem;
    width: 0.5rem;
  }
`;
