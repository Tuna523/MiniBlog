import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;
// 버튼 컴포넌트에서 props로 받은 타이틀이 버튼 목록에 표시되고,
// styled-components를 사용해 버튼 태그에 스타일이 들어간 styled button 으로 만들었다.
// props로 받은 onCLick은 styled button의 onCLick에 넣어줌으로써 클릭 이벤트를 받을 수 있도록 했다.
function Button(props:any) {
    const { title, onClick } = props;

    return (
        <StyledButton onClick={onClick}>
            {
                title || "button"
            }
        </StyledButton>
    )
}

export default Button;