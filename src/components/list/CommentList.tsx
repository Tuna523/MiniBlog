import React from 'react';
import styled from 'styled-components';
import CommentListItem from './commentListItem';

// styled-components 에서 &(ampersand) 의 뜻은 해당 컴포넌트(자신, 현재의 요소)를 의미한다고 한다
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

// commentList 라는 이름의 함수 컴포넌트를 만든 후, 이 컴포넌트의 props로 comments라는 배열이 들어온다.
// 이 배열에는 comment 객체들이 있고, 이 배열에 map 함수를 사용해 각 댓글객체를 commentListItem 컴포넌트로 넘겨 화면에 댓글을 표시.
function CommentList(props: any) {
    const { comments } = props;

    return (
        <Wrapper>
            {comments.map((comment:any, index:number) => {
                return (
                    <CommentListItem key={comment.id} comment={comment} />
                )
            })}
        </Wrapper>
    );
}

export default CommentList;