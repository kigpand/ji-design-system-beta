import styled from "styled-components";
import { IButtonProps } from "../../types/ButtonTypes";
import { CSSProperties } from "react";

export function Button(props: IButtonProps) {
  return (
    <ButtonStyled {...props} $primary={props.$primary ?? false}>
      {props.label}
    </ButtonStyled>
  );
}

export default Button;

interface IButtonStyled extends CSSProperties {
  $primary: boolean;
}

const ButtonStyled = styled.button<IButtonStyled>`
  width: 100%;
  padding: 8px 16px;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.$primary ? "#ff00ff" : "#00ff00")};
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
