import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

const Wrapper = styled.div`
    paddingL 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

// PostWritePage 컴포넌트는 2 개의 state가 있다.
// 하나는 글 제목의 state, 다른 하난 글 내용의 state
// 두 개의 state 모두 useState hook을 이용해 선언

function PostWritePage(props:any) {
    
    const navigate = useNavigate();

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");

    return (
        <Wrapper>
            <Container>
                {/* 실제 화면에 나타나는 부분은 textInput 컴포넌트를 사용해 글의 제목과 내용을 각각 입력받을 수  있게 */}
                <TextInput
                    rows={3}
                    value={title}
                    onChange={(event:any) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextInput
                    rows={10}
                    value={content}
                    onChange={(event:any) => {
                        setContent(event.target.value);
                    }}
                />
                {/* 화면 하단에 버튼 컴포넌트를 이용해 글 작성하기 만들기 */}
                <Button
                    title="작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;