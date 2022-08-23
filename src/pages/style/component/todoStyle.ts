	
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const Wrap = styled.div`
  position: relative;
  width: 20rem;
  height: 30rem;
  margin: 100px auto;
  border: 1px solid black;
`;
export const Title = styled.h2`
  box-sizing: border-box;
  text-align: center;
`;
export const Content = styled.div`
  
  
`;
export const TodoItems = styled.ul`
  
  margin: 0;
  padding: 0;
`;
export const TodoItem = styled.li`
  list-style: none;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
`;
export const TodoContent = styled.div`
  
`;
export const TodoTag = styled.div`
  font-weight: bold;
`;
export const Detail = styled.div`

`;
export const Option = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CheckBox = styled.input`
  padding: 0;
  margin: 0;
  width: 15px;
  border: 1px solid black;
  height: 15px;
`;
export const DeleteBt = styled.button`
  padding: 0;
  margin: 0;
  border: 1px solid black;
`;
export const AddToDo = styled.a`
  text-align: center;
  cursor: pointer;
  div{
    border: 1px solid black;
  }
`;