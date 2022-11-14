import styled from 'styled-components';
import { buttonText, primary1, primary2 } from '../../styles/color';

const Button = ({ text }) => {
  return <Buttons text={text}>{text}</Buttons>;
};

const Buttons = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 2rem;
  padding: 0px 1.25rem;

  /* background-color: ${primary1}; */
  outline: none;
  border: none;
  border-radius: 4px;
  /* color: ${buttonText}; */
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    /* background: ${primary2}; */
    /* color: ${buttonText}; */
  }
`;

export default Button;
