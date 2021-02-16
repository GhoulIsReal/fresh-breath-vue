import styled from "vue-styled-components";

const flexProps = {
  direction: String,
  align: String,
  justify: String,
};

const Flex = styled("div", flexProps)`
  width: 100%;
  display: flex;
  flex-flow: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
`;

export { Flex };
