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


## 📈 
### 🔍
## 👨‍💻
### 🏃‍♂️