### Style component

##### What?

##### How?

- import : `import styled from "styled-components";`

- Create Style Component : import해 준 styled-components에서 유효한 HTML tag로 접근하고 back tick 안에 css문법 사용

  ```
        const BoxOne = styled.div`
            background-color:teal;
            width:100px;
            height:100px

        `;
  ```

- props function : 캡슐화된 Styled Components에 변경되는 prop 적용시 props라는 parameter 받는 function 사용

  - props : component에 data를 보내는 방법
  - `${(props) => props.bgColor}` : bgColor의 값(=속성 값)을 데이터로 보내서 props가 받을 수 있다????????????

        ```
            const Box = styled.div`
                background-color: ${(props) => props.bgColor};
                width: 100px;
                height: 100px;
            `;
            function App() {
                return (
                    <Father>
                        <Box bgColor="teal" />
                        <Box bgColor="tomato" />
                    </Father>
                );
            }

        ```

- Style Component를 확장 : style function 사용

  - 상속할 component를 style의 argument로 받고 back tick안에 추가 css code를 적용

        ```
            const Box = styled.div`
                background-color: ${(props) => props.bgColor};
                width: 100px;
                height: 100px;
            `;

            const Circle = styled(Box)`
                border-radius: 50px;
            `;
        ```

- as="변경하고 싶은 HTML" : styled component는 사용하고 싶은데 HTML을 변경하고 싶을 때

  - as에 변경하고 싶은 HTML을 prop를 사용

        ```
            const Button = styled.button`
                background-color: ${(props) => props.bgColor};
                width: 100px;
                height: 100px;
            `;


            function App() {
                return (
                    <Father>
                        <Button bgColor="teal" />
                        <Button as="a" href="#" bgColor="tomato" />
                    </Father>
                );
            }

        ```

- attrs : styled components에 HTML의 속성 설정하는 방법

        ```
            const Input = styled.input.attrs({required:true})`
                background-color: tomato;
            `;
        ```

- animation css :

  - `import {keyframes} form "styled-components"`을 import해야한다.
  - keyframes component를 생성해서 animation proparty에 적용한다. Javascript이므로 {} 사용

        ```
            const rotateAnimation = keyframes`
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            `;
            const Box = styled.div`
                height: 200px;
                width: 200px;
                background-color: tomato;
                animation: ${rotateAnimation} 1s linear infinite;
            `;
        ```

- 모든 component에 style component를 다 만들 필요는 없다.
  -> component안에서 하나의 element을 target 처리를 할 수 있다.
- component안에 부모 자식 관계라면 component를 안에서 target 처리할 수 있다.
  -> 같은 styled component라도 관련 없는 components는 부모 component안에서 처리된 css는 적용 불가능

        ```
            const Box = styled.div`
                height: 200px;
                width: 200px;
                background-color: tomato;
                animation: ${rotateAnimation} 1s linear infinite;
                span {
                    color: greenyellow;
                    &:hover {
                    color: white;
                    }
                }
                ${Rotate} {
                    font-Size : 20px;
                    &:hover {
                    font-Size : 50px;
                    }
                }
            `;

            function App() {
                return (
                    <Wrapper>
                        <Box>
                            <span>HI</span>
                            <Rotate />
                        </Box>
                        <Rotate />
                    </Wrapper>
                );
            }

        ```

- theme : 모든 색상들을 가지고 있는 Object이다.
  -> 나중에 색깔을 바꿀 때 components을 일일히 바꾸지 않고 Object만 Switch하면 된다.

  - index.js에서 `import {ThemeProvider} form "styled-components"`을 import해야한다.
    -> App component를 감싸야 한다. ThemeProvider 안에 있는 모든 components는 theme Object에 접근이 가능하다.
    -> ThemeProvider에는 하나의 prop이 필요하다. : theme={component명}
    -> Switch하기 때문에 Theme components는 property명을 동일하게 적용해야한다.
  - App.js에서는 `${(prop) => prop.theme.backgroundColor};`로 prop function을 사용해서 data를 전달받을 수 있다.

        ``` (index.js)
            import React from "react";
            import ReactDOM from "react-dom";
            import App from "./App";
            import { ThemeProvider } from "styled-components";

            const darkTheme = {
                textColor: "whitesmoke",
                backgroundColor: "#111",
            };
            const lightTheme = {
                textColor: "#111",
                backgroundColor: "whitesmoke",
            };

            ReactDOM.render(
                <React.StrictMode>
                    <ThemeProvider theme={darkTheme}>
                        <App />
                    </ThemeProvider>
                </React.StrictMode>,
                document.getElementById("root")
            );

        ```
        ``` (App.js)
            const Wrapper = styled.div`
                display: flex;
                height: 100vh;
                width: 100vw;
                justify-content: center;
                align-items: center;
                background-color: ${(prop) => prop.theme.backgroundColor};
            `;
            const Title = styled.h1`
                color: ${(prop) => prop.theme.textColor};
            `;

            function App() {
                return (
                    <Wrapper>
                        <Title>Hello</Title>
                    </Wrapper>
                );
            }
        ```

- render : HTML태그 대신 styled-component 이름으로 사용한다.

        ```
            return (
                <Father>
                    <Box bgColor="teal" />
                    <Box bgColor="tomato" />
                </Father>
            );
        ```

### TypeScript

##### What?

- TypeScript는 JavaScript를 기반으로 한 프로그래밍 언어로 같은 JavaScript와 프로그래밍 언어는 아니나, JavaScript에 새로운 기능이 추가된 것으로 문법등 서로 비슷하다.

- TypeScript는 Strongly-typed 언어이다.

  - Strongly-typed : 프로그래밍 언어가 작동하기 전에 type을 확인한다.
  - code를 run 하기 전에 확인한다.

- Browser가 TypeScript를 이해하지 못하기 때문에 protection은 code가 run하기 전에 일어나고 User에게 publishing할 때 TypeScript가 compile해서 JavaScript로 만들어 준다.

##### How?

- 확장자 변경 : .js -> .tsx

## install

- npm install
  -> Update packge-json module 후에 react app이 정상 동작한다.
- npm run start
- npm install react-router-dom
- npm i prop-types
- npm i styled-components
- npm install @types/jest

- 깃 허브 배포 작업 Build

  - npm i gh -pages
  - npm run buiild

- Update deploy and predeploy, it on the pakage.json

  - npm run deploy

- install TypeScript

  - i) npx create-react-app@5.0.0 my-app --template typescript  
    ii) npm install --save typescript @types/node @types/react @types/react-dom @types/jest
    -> 설치 후에 tsconfig.json 설정
