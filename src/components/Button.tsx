import styled from "styled-components";
import { IButtonProps } from "../types/ButtonTypes";

export default function Button(props: IButtonProps) {
  return <ButtonStyled {...props}>{props.label}</ButtonStyled>;
}

const ButtonStyled = styled.button``;
