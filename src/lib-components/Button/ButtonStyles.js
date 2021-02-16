import styled from "vue-styled-components";

const buttonProps = {
  inline: Boolean,
  type: String,
  hover: Boolean,
};

const Button = styled.button`
  cursor: pointer;
  padding: ${(props) => (props.inline ? "5px 15px" : "10px 15px")};
  border: ${(props) =>
    props.type === ("error" || "success") ? "1px solid #ddd" : "none"};
  border-radius: ${(props) =>
    props.type === ("error" || "success") ? "5px" : "unset"};
  color: ${(props) =>
    props.type === ("error" || "success") ? "#fff" : "#123"};
  background-color: ${(props) =>
    props.type === "error"
      ? "red"
      : props.type === "success"
      ? "green"
      : "#ddd"};
  &:hover {
    ${(props) =>
      props.hover && `transition: 0.25s ease; filter: brightness(0.85);`}
  }
  &:focus {
    outline: none;
  }
`;

export { Button };
