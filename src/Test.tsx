import React from 'react';

interface ITest {
  name?: string;
}
export const Test = ({ name }: ITest) => {
  return (
    <div className='bg-zinc-400 rounded-md'>
      <p className='text-green-500 font-sans font-medium'>
        This is a test Mr {name}
      </p>
    </div>
  );
};
