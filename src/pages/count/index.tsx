import type { NextPage } from 'next';
import { useState } from 'react';
import styled from 'styled-components';

const Count: NextPage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <CountNum>{count}</CountNum>
      <HomeBlock>카운터 입니다.</HomeBlock>
    </>
  );
};

export default Count;

const HomeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountNum = styled.div`
  margin-top: 300px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
