// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
// Pages
import MainPage from './components/page/MainPage';
import PostWritePage from './components/page/postWritePage';
import PostViewPage from './components/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props:any) {
  return(
    <BrowserRouter>
      <MainTitleText>내가 만든 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='post-write' element={<PostWritePage />} />
        <Route path='post/:postId' element={<PostViewPage />} />
            {/*  마지막 :postId는 동적으로 변하는 파라미터를 위한 값이다. */}
            {/* 콜론과 id를 사용하면 실제 컴포넌트에서는 useParams를 사용해 아이디를 해당 값을 가져올 수 있다. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;