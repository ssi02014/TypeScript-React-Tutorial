import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  idx?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({ text, person }) => {
  const [count, setCount] = useState<TextNode>({
    text: '',
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const div = useRef<HTMLInputElement>(null);

  setCount({
    text: 'Minjae',
  });

  const handleChange = () => {

  }

  return (
    <div ref={div}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;