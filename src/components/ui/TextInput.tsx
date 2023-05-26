import React from "react";
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props:any) => 
        props.height &&
        `
            height: ${props.height}px;
        `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    border-radius: 15px;
`

// textInput 이라는 함수 컴포넌트를 만든다.
// textInput의 props는 높이 설정을 위한 height, 입력된 값을 표시하기 위한 value, 변경된 값을 상위 컴포넌트로 전달하기 위한 onChnage가 있다.
// textArea에 스타일을 입힌 styled textarea를 만든다.
function TextInput({rows, value, onChange}:any) {
    
    // const { rows, value, onChange } = props;

    return (
        <StyledTextarea rows={rows} value={value} onChange={onChange} />
    )
}

export default TextInput;