import styled from "vue-styled-components";

const holderProps = {
  width: Number,
  height: Number,
};

const Holder = styled("div", holderProps)`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  height: ${(props) => (props.width ? props.width * 1.2 + "px" : "360px")};
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const heading = styled.h3`
  margin: 10px;
`;

const Paragraph = styled.p`
  margin: 0 10px 10px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: start;
`;

export { Holder, Paragraph, heading };
