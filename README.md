# 💻 TypeScript-React-Tutorial
### TypeScript + React Tutorial 😁

<br />

## 👨‍💻 TypeScript + TypeScript Setting
* [CRA - Building TypeScript](https://create-react-app.dev/docs/adding-typescript/)

<br />

- TypeScript를 사용하여 새 Creact React App 프로젝트 시작하기
```
  npx create-react-app my-app --template typescript
  yarn create react-app my-app --template typescript
```

<br />

- 기존 Create React App 프로젝트에 TypeScript를 추가
```
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  # 또는
  yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

<br />

## 👨‍💻 typesciprtreact.json
- 파일 -> 기본 설정 -> 사용자 코드 조각 -> typescript.json 검색
```json
  {
    ...

    "TypeScript React Function Component": {
      "prefix": "rh",
      "body": [
        "import React from 'react';",
        "",
        "interface Props {",
        "",
        "}",
        "",
        "const r$1: React.FC<Props> = () => {",
        "\treturn (",
        "\t\t<div>",
        "",
        "\t\t</div>",
        "\t);",
        "}",
        "",
        "export default $1;"
      ],
      "description": "TypeScript React Function Component"
    }
  }
```

<br />

## 👨‍💻 React.FC
- `React.FC`를 사용할 때는 `props`의 타입을 `Generics`로 넣어서 사용한다. 이렇게 React.FC를 사용해서 얻을 수 있는 장점은 두 가지가 있다.
```
  1. props에 기본적으로 children이 들어가 있다.
  2. 컴포넌트의 defaultProps, propTypes, contextTypes를 설정 할 때 자동 완성이 될 수 있다.
```

<br />

```ts
  import React from 'react';
  import { useState } from 'react';

  interface Props {
    children: (
      data : {
        count: number, 
        setCount: React.Dispatch<React.SetStateAction<number>>
      }
    ) => JSX.Element | null
  }

  const Counter: React.FC<Props> = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
      <div>
        {children({ count, setCount })}
      </div>
    );
  }

  export default Counter;
```

<br />

## 👨‍💻 ReducerExample
```ts
  import React, { useReducer } from "react";

  type Actions = 
    | { type: "add"; text: string }
    | { type: "remove"; idx: number};

  interface Todo {
    text: string;
    complete: boolean;
  }

  type State = Todo[];

  const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
      case "add":
        return [...state, { text: action.text, complete: false }];
      case "remove":
        return state.filter((_, i) => action.idx !== i);
      default:
        return state;
    }
  }

  export const ReducerExample: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, []);

    return (
      <div>
        {JSON.stringify(todos)}
        <button
          onClick={() => {
            dispatch({ type: "add", text: "..." })
          }}
        > 
        +
        </button>
      </div>
    );
  }
```

<br />