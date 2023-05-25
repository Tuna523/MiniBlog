import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;

const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
`;

// CommentListItem 컴포넌트는 props로 comment 객체 하나만 사용한다.
// comment 객체는 사용자가 작성한 댓글 내용이다.
// 이를 styled-component를 통해 만든 contentText라는 컴포넌트를 이용해 화면에 표시한다.
// 글 클릭은 가능하지만 댓글은 onClick event가 따로 없도록 해준다.
function CommentListItem(props:any) {
    const { comment } = props;

    return (
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>
    );
}

export default CommentListItem;