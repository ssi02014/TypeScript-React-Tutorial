# ๐ป TypeScript-React-Tutorial
### TypeScript + React Tutorial ๐

<br />

## ๐จโ๐ป TypeScript + TypeScript Setting
* [CRA - Building TypeScript](https://create-react-app.dev/docs/adding-typescript/)

<br />

- TypeScript๋ฅผ ์ฌ์ฉํ์ฌ ์ Creact React App ํ๋ก์ ํธ ์์ํ๊ธฐ
```
  npx create-react-app my-app --template typescript
  yarn create react-app my-app --template typescript
```

<br />

- ๊ธฐ์กด Create React App ํ๋ก์ ํธ์ TypeScript๋ฅผ ์ถ๊ฐ
```
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  # ๋๋
  yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

<br />

## ๐จโ๐ป typesciprtreact.json
- ํ์ผ -> ๊ธฐ๋ณธ ์ค์  -> ์ฌ์ฉ์ ์ฝ๋ ์กฐ๊ฐ -> typescript.json ๊ฒ์
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

## ๐จโ๐ป React.FC
- `React.FC`๋ฅผ ์ฌ์ฉํ  ๋๋ `props`์ ํ์์ `Generics`๋ก ๋ฃ์ด์ ์ฌ์ฉํ๋ค. ์ด๋ ๊ฒ React.FC๋ฅผ ์ฌ์ฉํด์ ์ป์ ์ ์๋ ์ฅ์ ์ ๋ ๊ฐ์ง๊ฐ ์๋ค.
```
  1. props์ ๊ธฐ๋ณธ์ ์ผ๋ก children์ด ๋ค์ด๊ฐ ์๋ค.
  2. ์ปดํฌ๋ํธ์ defaultProps, propTypes, contextTypes๋ฅผ ์ค์  ํ  ๋ ์๋ ์์ฑ์ด ๋  ์ ์๋ค.
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

## ๐จโ๐ป ReducerExample
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