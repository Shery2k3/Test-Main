import styled from 'styled-components';

export const ExpenseItem = styled.li`
  list-style: none;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExpenseDate = styled.div`
  width: 50%;
  margin-right: 10px;
`;

export const ExpenseTitle = styled.div`
  width: 50%;
  margin-right: 10px;
`;

export const ExpensePrice = styled.div`
  flex: 1;
  margin-right: 10px;
`;

export const EditButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 5px;
  border: 1px solid #000;

  &:hover {
    background-color: transparent;
    color: #000;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff3333;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
  }
`;
