import React from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <Div>
      <Input type="text" placeholder="検索" />
    </Div>
  );
};

export default Search;

const Div = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const Input = styled.input`
  height: 32px;
  width: 90%;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 8px;
  background-color: #f2f2f2;
  border: none;
`;
