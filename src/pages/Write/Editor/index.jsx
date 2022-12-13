import { useSelector, useDispatch } from 'react-redux';
import { setWriteContent } from '../../../store/modules/write';
import Tags from './Tags';
import ToolBar from './ToolBar';
import WriteZone from './WriteZone';
import EditorFooter from './EditorFooter';
import styled from 'styled-components';

const Editor = () => {
  const { title, content } = useSelector(state => state.writeContent);
  const dispatch = useDispatch();

  return (
    <EditorContainer className='editor-container'>
      <textarea className='editor-title' placeholder='제목을 입력하세요' value={title} onChange={e => dispatch(setWriteContent({ type: 'title', value: e.target.value }))} />
      <div className='dividing-line' />
      <Tags />
      <ToolBar />
      <WriteZone />
      <EditorFooter title={title} content={content} />
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  .editor-title,
  textarea {
    padding: 0px;
    width: 100%;
    height: 66px;
    line-height: 1.5;
    resize: none;
    outline: none;
    border: none;
    background: transparent;
    color: var(--text1);
    font-size: 2.75rem;
    font-weight: bold;
    cursor: text;
  }

  .dividing-line {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    height: 6px;
    width: 4rem;
    border-radius: 1px;
    background: rgb(73, 80, 87);
  }

  .ql-toolbar.ql-snow {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 50%;
    height: 4rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.4) 0 4px 4px -4px;
    background-color: var(--bg-page2);

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3rem;
      height: 2rem;
    }
    button + button {
      margin-left: 0 0.5rem;
    }
  }
`;

export default Editor;
