import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setThmbnail, setThmbnailPreview } from '../../../../store/modules/write';
import ContentWrapper from '../ContentWrapper';
import { SlPicture } from 'react-icons/sl';
import { toast } from 'react-toastify';
import Toastify from '../../../../components/Toastify';
import styled from 'styled-components';

const SettingThumbnail = () => {
  const { title, thumbnailPreview } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();
  const thumbnailInput = useRef();
  const [summaryValue, setSummaryValue] = useState('');
  const summaryLenght = summaryValue.replace(/<br\s*\/?>/gm, '\n').length;

  const handleClick = () => {
    thumbnailInput.current.click();
  };

  const saveFileImage = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      const config = {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLthYzsiqTtirgifSwiaWF0IjoxNjY5NjMwNjE5fQ.qPQNhe2qVb8VMnrlxueDGBFHYkOkfwrZCiENYXevp4I`,
          'Content-Type': 'multipart/form-data',
        },
      };

      toast.error('이미지 로딩중...');
      const response = await axios.post(`http://localhost:8000/posts/thumbnai`, formData, config);
      if (response.data.message === 'thumbnail upload success') {
        toast.success('이미지 업로드 완료');
        dispatch(setThmbnail(response.data.imageUrl));
        dispatch(setThmbnailPreview(URL.createObjectURL(e.target.files[0])));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeFileImage = () => {
    dispatch(setThmbnail(null));
    dispatch(setThmbnailPreview(null));
  };

  return (
    <SettingThumbnailContainer>
      <ContentWrapper contentTitle={'포스트 미리보기'}>
        <div className='thumbnail-container'>
          {thumbnailPreview ? (
            <div className='have-thumbnail'>
              <p>
                <span onClick={handleClick}>
                  재업로드
                  <input type='file' accept='image/jpg, image/jpeg, image/png' multiple ref={thumbnailInput} onChange={saveFileImage} style={{ display: 'none' }} />
                </span>
                &#183;
                <span onClick={removeFileImage}>제거</span>
              </p>
              <img src={thumbnailPreview} alt='thumbnail' />
            </div>
          ) : (
            <div className='none-thumbnail'>
              <SlPicture className='thumbnail-icon' />
              <button onClick={handleClick}>
                썸네일 업로드
                <input type='file' accept='image/jpg, image/jpeg, image/png' multiple ref={thumbnailInput} onChange={saveFileImage} style={{ display: 'none' }} />
              </button>
            </div>
          )}
        </div>
        <div className='summary-container'>
          <h4>{title}</h4>
          <textarea placeholder='당신의 포스트를 짧게 소개해보세요.' value={summaryValue} onChange={e => setSummaryValue(e.target.value)} maxLength={150} />
          <p style={{ color: summaryLenght >= 150 ? 'var(--prism-code-3)' : 'var(--text1)' }}>{summaryLenght}/150</p>
        </div>
      </ContentWrapper>
      <Toastify />
    </SettingThumbnailContainer>
  );
};

const SettingThumbnailContainer = styled.div`
  .thumbnail-container {
    .none-thumbnail,
    .have-thumbnail {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 1rem;
      background: var(--bg-element3);
    }

    .have-thumbnail {
      padding: 0;
      background: inherit;

      img {
        width: 100%;
      }
      p {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        color: var(--text4);
        font-size: 0.9rem;
        span {
          margin: 0 0.5rem;
          margin-bottom: 0.3rem;
          text-decoration: underline;
          color: var(--text3);
          cursor: pointer;
        }
      }
    }

    .none-thumbnail {
      .thumbnail-icon {
        font-size: 6rem;
        color: var(--text4);
      }

      button {
        margin-top: 1rem;
        padding: 0.25rem 2rem;
        outline: none;
        border: none;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 2%) 0px 0px 4px;
        background: var(--bg-element1);
        color: var(--primary2);
        font-size: 1rem;
        font-weight: bold;
        line-height: 1.5;
        transition: all 0.125s ease-in 0s;

        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
  }

  .summary-container {
    margin-top: 1.5rem;

    textarea {
      width: 100%;
      height: 7.375rem;
      margin-top: 0.5rem;
      padding: 0.75rem 1rem;
      resize: none;
      border: none;
      outline: none;
      box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
      background: var(--bg-element7);
      color: var(--text1);
      line-height: 1.5;
      font-size: 0.875rem;
    }

    p {
      text-align: right;
      margin-top: 0.25rem;
      color: var(--text3);
      font-size: 0.75rem;
    }
  }
`;

export default SettingThumbnail;
