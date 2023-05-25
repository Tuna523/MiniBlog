import React from "react";
import styled from 'styled-components';
// 앞에서 만든 PostListItem 컴포넌트를 사용하기 위해 import 하기
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

// PostList 컴포넌트의 props 로 받은 posts 라는 배열에는 post 객체들이 들어있다.
// 이 post 배열의 map 함수를 이용해 각 post 객체에 대해서 postList 컴포넌트를 만들어 렌더링 하게 한다.

function PostList(props:any) {
    console.log(props);
    const { posts, onCLickItem } = props;

    return (
        <Wrapper>
            {posts.map((post:any, index:number) => {
                return (
                    <PostListItem 
                    key={post.id} 
                    post={post} 
                    onClick={() => {
                        onCLickItem(post);
                    }} 
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;