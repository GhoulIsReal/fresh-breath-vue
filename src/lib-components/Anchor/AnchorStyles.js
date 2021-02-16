import styled from "vue-styled-components";

const anchorProps = {
  color: String,
  hover: Boolean,
  underline: Boolean || String,
};

const textProps = {
  extra: Object || Boolean,
  position: String,
  sidePadding: Array,
};

const iconProps = {
  position: String,
  size: String,
};

const AnchorStyled = styled("a", anchorProps)`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: fit-content;
  text-decoration: none;
  color: ${(props) => props.color && props.color};
  position: relative;
  text-align: center;
  padding: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${(props) => props.hover && "filter: brightness(0.9);"}
  }
  &::before,
  ::after {
    ${(props) =>
      props.underline &&
      `content: ''; position: absolute; bottom: -10px; width: 0px; height: 5px; margin: 5px 0 0; transition: all 0.12s ease-in-out; transition-duration: 0.75s; opacity: 0; background-color: ${props.color ||
        "#000"}; ${props.underline === "left" ? "right: 0" : "left: 0"}`}
  }
  &:hover::before,
  &:hover::after {
    ${(props) => props.underline && "width: 100%; opacity: 1;"}
  }
`;

const Text = styled("span", textProps)`
  ${(props) =>
    props.extra && props.position === "right"
      ? `padding-right: ${props.sidePadding[0]}`
      : props.extra && props.position === "left"
      ? `padding-left: ${props.sidePadding[0]}`
      : ""};
  font-size: ${(props) => (props.sidePadding ? props.sidePadding[1] : "16px")};
`;

const IconHolder = styled("div", iconProps)`
  position: absolute;
  ${(props) => (props.position === "right" ? "right: 0;" : "left: 0")};
  display: flex;
  width: ${(props) => props.size};
  height: 100%;
  align-items: center;
  justify-content: center;
  & > img,
  object {
    width: 100%;
  }
`;

export { AnchorStyled, IconHolder, Text };
