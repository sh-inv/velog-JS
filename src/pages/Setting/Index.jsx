import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiFillGithub, AiOutlineTwitter, AiFillFacebook, AiFillHome } from 'react-icons/ai';
// import Button from '../../components/button/Index';
import profile from '../../assets/profile_sample.jpg';
import styled from 'styled-components';

const Setting = () => {
  return (
    <SettingPage>
      <UserInfo>
        <div className='thumbnail-area'>
          <img alt='profile' src={profile} />
          {/* <Button text='이미지 업로드' backgroundColor='#12b886' color='#fff' />
          <Button text='이미지 제거' backgroundColor='transparent' color='#12b886' /> */}
        </div>
        <div className='info-area'>
          <h2>Eden</h2>
          <p>one part.</p>
          <button>수정</button>
        </div>
      </UserInfo>
      <UserContents>
        <div className='bottom-block'>
          <div className='wrapper'>
            <div className='title-wrapper'>
              <h3>벨로그 제목</h3>
            </div>
            <div className='interval'>
              <div className='contents'>daydream.log</div>
              <div className='edit-wrapper'>
                <button>수정</button>
              </div>
            </div>
          </div>
          <div className='desc'>개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</div>
        </div>
        <div className='bottom-block border'>
          <div className='wrapper'>
            <div className='title-wrapper'>
              <h3>소셜 정보</h3>
            </div>
            <div className='interval'>
              <div className='contents'>
                <ul>
                  <li>
                    <MdEmail className='icon' />
                    <span>you8inpark@gmail.com</span>
                  </li>
                  <li>
                    <AiFillGithub className='icon' />
                    <span>daydreamplace</span>
                  </li>
                  <li>
                    <AiOutlineTwitter className='icon' />
                    <span>eden</span>
                  </li>
                  <li>
                    <AiFillFacebook className='icon' />
                    <span>eden</span>
                  </li>
                  <li>
                    <AiFillHome className='icon' />
                    <span>dev-eden.shop</span>
                  </li>
                </ul>
              </div>
              <div className='edit-wrapper'>
                <button>수정</button>
              </div>
            </div>
          </div>
          <div className='desc'>포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.</div>
        </div>
        <div className='bottom-block border'>
          <div className='wrapper'>
            <div className='title-wrapper'>
              <h3>이메일 주소</h3>
            </div>
            <div className='contents'>you8inpark@gmail.com</div>
          </div>
          <div className='desc'>회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</div>
        </div>
        <div className='bottom-block border'>
          <div className='wrapper'>
            <div className='title-wrapper'>
              <h3>이메일 수신 설정</h3>
            </div>
            <div className='contents'>
              <ul>
                <li>
                  <span className='alert'>댓글 알림</span>
                  <BsToggleOff className='toggle-off' />
                </li>
                <li>
                  <span className='alert'>벨로그 업데이트 소식</span>
                  <BsToggleOn className='toggle-on' />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='bottom-block  border'>
          <div className='wrapper'>
            <div className='title-wrapper'>
              <h3>회원 탈퇴</h3>
            </div>
            <div className='contents'>{/* <Button text='회원 탈퇴' backgroundColor='#FF6B6B' color='#fff' /> */}</div>
          </div>
          <div className='desc'>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</div>
        </div>
      </UserContents>
      {/* <Button text='로그인' backgroundColor='skyblue' color='#fff' /> */}
    </SettingPage>
  );
};

const SettingPage = styled.div`
  width: 768px;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 5rem;
`;

const UserInfo = styled.section`
  display: flex;
  height: 13.75rem;

  .thumbnail-area {
    display: flex;
    flex-direction: column;
    padding-right: 1.5rem;

    img {
      object-fit: cover;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      display: block;
      margin-bottom: 1.25rem;
    }
  }

  .info-area {
    flex: 1 1 0%;
    padding-left: 1.5rem;
    border-left: 1px solid #f1f3f5;

    h2 {
      margin: 0px;
      line-height: 1.5;
      font-size: 2.25rem;
    }

    p {
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      line-height: 1.5;
      font-size: 1rem;
      color: #868e96;
    }

    button {
      display: inline;
      padding: 0px;

      background: none;
      border: none;
      font-size: 1rem;
      line-height: 1.5;
      color: #12b886;
      text-decoration: underline;
      outline: none;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const UserContents = styled.section`
  margin-top: 4rem;

  .bottom-block {
    padding-top: 1rem;
    padding-bottom: 1rem;

    .wrapper {
      display: flex;

      .title-wrapper {
        width: 9.5rem;
        flex-shrink: 0;

        h3 {
          margin: 0px;
          line-height: 1.5;
          font-size: 1.125rem;
        }
      }

      .interval {
        flex: 1 1 0%;
        display: flex;
        -webkit-box-align: center;
        align-items: center;

        .edit-wrapper {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          margin-left: 1rem;
        }

        button {
          outline: none;
          padding: 0px;
          border: none;
          display: inline;
          font-size: 1rem;
          line-height: 1.5;
          color: #12b886;
          text-decoration: underline;
          background: none;
          cursor: pointer;
        }
      }

      .contents {
        flex: 1 1 0%;
        font-size: 1rem;
        color: #495057;
        line-height: 1.5;

        ul {
          list-style: none;
          padding: 0px;
          margin: 0px;

          li {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            margin-bottom: 0.5rem;

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

            .alert {
              width: 14rem;
            }

            .toggle-on {
              text-align: center;
              font-size: 30px;
              color: #12b886;
            }

            .toggle-off {
              text-align: center;
              font-size: 30px;
              color: #495057;
            }
          }
        }
      }
    }

    .desc {
      margin-top: 0.875rem;
      color: #868e96;
      font-size: 0.875rem;
    }
  }

  .border {
    border-top: 1px solid #f1f3f5;
  }
`;

export default Setting;
