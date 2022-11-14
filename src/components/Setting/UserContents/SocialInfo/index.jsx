import { useState, useEffect } from 'react';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillHome } from 'react-icons/ai';
import EditButton from '../../../EditButton';
import Button from '../../../Button';
import styled from 'styled-components';
import { backgroundElement1, border1, border3, text2, primary1, primary2, buttonText } from '../../../../styles/color';

const SocialInfo = () => {
  const [social, setSocial] = useState('');
  const [isModifySocialInfo, setisModifySocialInfo] = useState(false);

  const onModify = () => {
    isModifySocialInfo ? setisModifySocialInfo(false) : setisModifySocialInfo(true);
  };

  const getSocial = e => {
    setSocial(e.target.value);
  };

  const info = [
    {
      id: 1,
      icon: <MdEmail className='icon' />,
      placeholder: '이메일을 입력하세요.',
    },
    {
      id: 2,
      icon: <AiFillGithub className='icon' />,
      placeholder: 'Github 계정을 입력하세요.',
    },
    {
      id: 3,
      icon: <AiOutlineTwitter className='icon' />,
      placeholder: 'Twitter 계정을 입력하세요.',
    },
    {
      id: 4,
      icon: <AiFillFacebook className='icon' />,
      placeholder: 'http://www.facebook.com/',
    },
    {
      id: 5,
      icon: <AiFillHome className='icon' />,
      placeholder: '홈페이지 주소를 입력하세요.',
    },
  ];

  useEffect(() => {
    const contents = {
      social: { email: 'you8inpark@gmail.com', github: 'daydreamplace', twitter: 'eden', facebook: 'eden', url: 'dev-eden.shop' },
    };
    setSocial(contents.social);
  }, []);

  return (
    <>
      {isModifySocialInfo ? (
        <>
          <SocialInfoContainer>
            <ul>
              {info.map(content => (
                <li key={content.id}>
                  {content.icon}
                  <input className='modify-input' type='text' placeholder={content.placeholder} />
                </li>
              ))}
            </ul>
          </SocialInfoContainer>
          <Button onClick={onModify} text='저장' className='confirm-button' />
        </>
      ) : (
        <>
          <SocialInfoContainer>
            <ul>
              <li>
                <MdEmail className='icon' />
                <span>{social.email}</span>
              </li>
              <li>
                <AiFillGithub className='icon' />
                <span>{social.github}</span>
              </li>
              <li>
                <AiOutlineTwitter className='icon' />
                <span>{social.twitter}</span>
              </li>
              <li>
                <AiFillFacebook className='icon' />
                <span>{social.facebook}</span>
              </li>
              <li>
                <AiFillHome className='icon' />
                <span>{social.url}</span>
              </li>
            </ul>
          </SocialInfoContainer>
          <EditButtonContainer>
            <EditButton text='수정' onClick={onModify} />
          </EditButtonContainer>
        </>
      )}
    </>
  );
};

const SocialInfoContainer = styled.div`
  flex: 1 1 0%;
  font-size: 1rem;
  color: ${text2};
  line-height: 1.5;

  .modify-input {
    flex: 1 1 0%;
    display: block;
    padding: 0.5rem;
    margin-right: 1rem;

    border: 1px solid ${border3};
    border-radius: 4px;
    background: ${backgroundElement1};
    color: ${text2};
    font-size: 1rem;
    line-height: 1rem;
    outline: none;

    :focus {
      border: 1px solid ${border1};
    }
  }

  .confirm-button {
    background: ${primary1};
    color: ${buttonText};

    &:hover {
      background: ${primary2};
    }
  }

  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;

    li {
      display: flex;
      -webkit-box-align: center;
      align-items: center;

      .icon {
        width: 1rem;
        height: 1rem;
        font-size: 1rem;
        margin-right: 0.5rem;
        flex-shrink: 0;
      }

      span {
        font-size: 1rem;
      }
    }

    li + li {
      margin-top: 0.5rem;
    }
  }
`;

const EditButtonContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 1rem;
`;

export default SocialInfo;
