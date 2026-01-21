import React from 'react';

export const wrapSnakeCase = (text: string) => {
  if (typeof text !== 'string') return text;
  return text.split('_').map((part, i, arr) => (
    <React.Fragment key={i}>
      {part}{i < arr.length - 1 && <><wbr />_</>}
    </React.Fragment>
  ));
};
