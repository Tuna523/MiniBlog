import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommentList from '../list/CommentList';
import TextInput from '../ui/TextInput';
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

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`

// PostViewPage 컴포넌트에선 먼저 props로 전달받은 글의 id를 이용해 전체 데이터에서 해당되는 글을 찾는다.
// 그 후, 찾은 글의 제목, 내용, 댓글을 렌더링 하고 그 아래엔 TextInput, Button 컴포넌트를 이용해 댓글을 작성할 수 있게 ui를 제공한다.

function PostViewPage(props:any) {
    const navigate = useNavigate();
    const { postId } = useParams();
    let data: any = {};
    const post = data.values.find((item:any) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onCLick={()=> {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <TitleText>{post?.title}</TitleText>
                    <ContentText>{post?.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post?.comments} />

                <TextInput>

                </TextInput>
            </Container>
        </Wrapper>
    )
}

export default PostViewPage;