import React from 'react';

import { useState } from 'react';

const useTabs = (init, allTabs) => {
  const [curIndex, setCurIndex] = useState(init);
  return {
    currentItem: allTabs[curIndex],
    changeItem: setCurIndex,
  };
};

const content = [
  {
    tab: 'Section 1',
    content: "I'm the content 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content 2",
  },
];

function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default UseTabs;
