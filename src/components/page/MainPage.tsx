import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostList from '../list/PostList';

// 앞서 만든 버튼 컴포넌트를 이용해 글을 작성하기 때문에 페이지에 이동할 수 있도록 import,
// 앞서 만든 postList 컴포넌트를 통해 글 목록을 표시할 수 있게 import

import Button from '../ui/Button';
import data from '../../data.json';

const Wrapper = styled.div`
    padding: 16px;
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

// 페이지 이동을 위해 react-router-dom 에 useNavigate 훅을 사용
function MainPage(props:any) {
    
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={()=> {
                        navigate("/post-write");
                    }}
                />

                <PostList
                    posts={data}
                    onClickItem={(item: any) => {
                        navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;