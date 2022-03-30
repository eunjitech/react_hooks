import React from 'react';

import { useState } from 'react';

const useInput = (init, validation) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validation === 'function') {
      willUpdate = validation(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const CountFn = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return { item, setItem, incrementItem, decrementItem };
};

const UseInput = () => {
  const { item, incrementItem, decrementItem } = CountFn();
  const maxLen = (val) => val.length < 10 && !val.includes('@');
  const name = useInput('Ms. ', maxLen);

  return (
    <div className="App">
      <h1>안녕하세요! {item}</h1>
      <button onClick={incrementItem}>+</button>
      <button onClick={decrementItem}>-</button>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default UseInput;
