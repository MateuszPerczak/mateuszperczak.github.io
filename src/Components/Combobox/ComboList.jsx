import styled from "@emotion/styled";
import { useSpring, animated } from "react-spring";

const StyledList = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: 35px;
  border-radius: 10px;
  overflow: hidden;
  background: ${({ theme: { background } }) => {
    return background;
  }};
  border: 1px solid
    ${({ theme: { border } }) => {
      return border;
    }};
`;

const ComboList = ({ isOpen, children }) => {
  const transition = useSpring({
    height: isOpen ? "250%" : "0%",
    visibility: isOpen ? "visible" : "hidden",
    config: {
      mass: 1.2,
      tension: 300,
    },
  });

  return <StyledList style={transition}>{children}</StyledList>;
};

export default ComboList;