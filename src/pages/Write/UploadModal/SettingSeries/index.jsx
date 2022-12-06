import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsSeriesList, setSeriesId } from '../../../../store/modules/write';
import ContentWrapper from '../ContentWrapper';
import { toast } from 'react-toastify';
import Toastify from '../../../../components/Toastify';
import { MdPlaylistAdd } from 'react-icons/md';
import { AiTwotoneSetting } from 'react-icons/ai';
import styled from 'styled-components';

const SettingSeries = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [seriesName, setSeriesName] = useState('');
  const { seriesId, isSeriesList } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  const getSeriesList = async () => {
    try {
      const config = {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InN1YiI6MywibG9naW5faWQiOiJ0ZXN0VXNlciIsIm5hbWUiOiLsnKDruYgifSwiaWF0IjoxNjcwMzMzNzUyfQ.X6dn8fdrkbsTxcno9k1r_IZEZNTD_t20vFo_VNMGbjU',
        },
      };
      const { data } = await axios.get(`http://localhost:8000/series`, config);
      dispatch(setIsSeriesList(true));
      setSeriesList(data.series);
    } catch (error) {
      toast.error('시리즈 불러오기 실패');
      console.log(error);
    }
  };

  const selectSeries = e => {
    dispatch(setSeriesId(Number(e.target.id)));
    setSeriesName(e.target.innerText);
  };

  const removeSeries = () => {
    dispatch(setSeriesId(null));
  };

  useEffect(() => {
    return () => {
      dispatch(setIsSeriesList(false));
    };
  }, []);

  return (
    <ContentWrapper contentTitle={'시리즈 설정'}>
      {isSeriesList ? (
        <SettingSeriesContainerActive>
          <div className='input-wrapper'>
            <form>
              <input type='text' placeholder='새로운 시리즈 이름을 입력하세요' />
            </form>
          </div>
          <ul className='series-list'>
            {seriesList.map(seriesInfo => {
              return (
                <li key={seriesInfo.series_series_name} className={seriesInfo.series_id === seriesId ? 'active' : ''} id={seriesInfo.series_id} onClick={selectSeries}>
                  {seriesInfo.series_series_name}
                </li>
              );
            })}
          </ul>
        </SettingSeriesContainerActive>
      ) : (
        <SettingSeriesContainer>
          <div className='setting-series-container' onClick={getSeriesList}>
            {seriesId ? (
              <div className='selected-series-info'>
                <span>{seriesName}</span>
                <div className='series-setting-btn' onClick={getSeriesList}>
                  <AiTwotoneSetting />
                </div>
              </div>
            ) : (
              <div className='add-series'>
                <MdPlaylistAdd className='icon' />
                시리즈에 추가하기
              </div>
            )}
          </div>
          {seriesId && (
            <p className='remove-series' onClick={removeSeries}>
              시리즈에서 제거
            </p>
          )}
        </SettingSeriesContainer>
      )}
      <Toastify />
    </ContentWrapper>
  );
};

const SettingSeriesContainer = styled.div`
  display: flex;
  flex-direction: column;

  .setting-series-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px 0px;
    outline: none;
    border: none;
    border-radius: 4px;
    background: var(--bg-element7);

    .selected-series-info,
    .add-series {
      display: flex;
      flex: 1 1 0%;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      .icon {
        font-size: 1.6rem;
        margin-right: 1rem;
      }
    }
    .selected-series-info {
      -webkit-box-pack: start;
      justify-content: start;
      height: 100%;
      padding-left: 1rem;
      color: var(--text1);
      .series-setting-btn {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        margin-left: auto;
        width: 48px;
        height: 100%;
        background: var(--primary1);
        color: var(--text1);
        font-size: 1.5rem;
        &:hover {
          background: var(--primary2);
          cursor: pointer;
        }
      }
    }
    .add-series {
      -webkit-box-pack: center;
      justify-content: center;
      color: var(--primary2);
      font-size: 1.125rem;
      font-weight: 600;
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }
  .remove-series {
    margin-left: auto;
    margin-top: 0.7rem;
    color: var(--prism-code-3);
    cursor: pointer;
  }
`;

const SettingSeriesContainerActive = styled.div`
  display: flex;
  width: 100%;
  flex: 1 1 0%;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
  overflow: hidden;

  form {
    background: var(--bg-element3);
    padding: 1rem;
    height: 4rem;
    transition: all 0.125s ease-in 0s;
    input {
      height: 2rem;
      width: 100%;
      padding: 0.5rem;
      font-size: 0.875rem;
      border-radius: 2px;
      border: none;
      outline: none;
      box-shadow: rgb(0 0 0 / 3%) 0px 0px 4px 0px;
      background: var(--bg-element1);
      color: var(--text1);
    }
  }
  ul {
    height: 16.5625rem;
    overflow-y: auto;
    padding-left: 0px;
    list-style: none;
    margin: 0px;
    background: var(--bg-element7);
    li {
      padding: 1rem;
      border-bottom: 1px solid var(--border3);
      cursor: pointer;
    }

    .active {
      background: var(--primary1);
      color: var(--button-text);
    }
  }
`;

export default SettingSeries;
