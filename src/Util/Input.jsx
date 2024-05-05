import { forwardRef } from "react";

const Input = forwardRef(function Input(props, customref) {
  return (
    <input
      style={props.styles}
      ref={customref}
      {...props}
    />
  );
});

export default Input;
