import styled from 'styled-components';
import { backgroundElement1, backgroundElement9, primary2 } from '../../../styles/color';

const Toggle = () => {
  return (
    <ToggleButton>
      <div className='circle' />
    </ToggleButton>
  );
};

const ToggleButton = styled.div`
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 2.875rem;
  height: 1.5rem;
  padding: 0.125rem;

  border-radius: 1.125rem;

  background: ${primary2};
  transition: all 0.125s ease-in 0s;

  .circle {
    width: 1.25rem;
    height: 1.25rem;
    transform: translate(1.375rem);

    border-radius: 0.625rem;
    background: ${backgroundElement1};
    box-shadow: rgb(0 0 0 / 10%) -2px 0px 4px;
  }

  .toggle-off {
    cursor: pointer;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 2.875rem;
    height: 1.5rem;
    padding: 0.125rem;

    border-radius: 1.125rem;

    background: ${backgroundElement9};
    transition: all 0.125s ease-in 0s;

    .circle {
      width: 1.25rem;
      height: 1.25rem;

      border-radius: 0.625rem;
      background: ${backgroundElement1};
    }
  }
`;

export default Toggle;
