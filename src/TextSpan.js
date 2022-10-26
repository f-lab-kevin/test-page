import { useInView } from "react-intersection-observer";
import styled from '@emotion/styled';

const TextSpan = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: '-40%'
  });


  return(
    <TextBlock ref={ref} style={{opacity: inView ? 1 : 0.3}}>{children}</TextBlock>
  )
};

const TextBlock = styled.span`
  position: relative;
  transition: opacity 1s;
`;

export default TextSpan;