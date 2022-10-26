import styled from '@emotion/styled'
import { motion } from "framer-motion";
import TextSpan from './TextSpan';

const TextList = [
  '개발자를 정의할 때, 많은 시니어 개발자들을 더 이상 단순 코딩하는 사람으로 정의하지 않습니다.',
  '이제 개발자는 문제를 해결하는 사람입니다.',
  '본질을 꿰뚫기 위해서는 비즈니스 발전에 맞추어 생각하는 힘을 기르는 것이 중요하죠.',
  '하지만 대다수의 취준생, 주니어 개발자들은 당장 눈에 보여지는 멋있어보이는 기술을 사용해보는데에 급급합니다.',
  '이러한 방식은 2~3년 후 성장의 실패 요인이 됩니다.',
  '그래서 저희는 깊이 있는 성장을 위해 ”무엇을 생각하느냐”가 아닌 “어떻게 생각하느냐”에 집중합니다.'
]

const ScrollContent = () => {
  return(
    <ScrollContainer>
      {
        TextList.map(text => {
          return(
            <TextSpan key={text}>
              {text}
            </TextSpan>
          )
        })
      }
    </ScrollContainer>
  )
};

const ScrollContainer = styled(motion.div)`
  max-width: 50%;
  margin: 0 auto;
  height: 200px;
  position: relative;
  z-index: 1000;
  text-align: center;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -1.5px;
`;

export default ScrollContent;