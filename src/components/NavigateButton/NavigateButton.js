import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../styles/NavigateButtonStyles";

function NavigateButton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.goTo);
  };

  return <StyledButton onClick={handleClick}>{props.button}</StyledButton>;
}

export default NavigateButton;
