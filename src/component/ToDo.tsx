import React from "react";
import * as T from "./style/todoStyle";


export default function ToDo(){
  const [addTodo,setAddTodo] = React.useState(false);
  const todoList = [
  {
    id:1,
    todo:"프리온보딩 챌린지",
    check:false,
    category:"todo",
    tags:["타입스크립트","JSDoc"]
  },
  {
    id:2,
    todo:"2차 챌린지",
    check:true,
    category:"todo",
    tags:["프론트엔드코스"]
  }
  ];
  const addToDoList = () => {
    setAddTodo(false)
  }
  const ShowToDoList = () => {
    return (
      <T.TodoItems>
      {todoList.map((todo)=>{
        return(
          <T.TodoItem key={todo.id}>
            <T.Detail>
              <T.TodoContent><span>{todo.todo}</span></T.TodoContent>
              <T.TodoTag>{todo.tags.map((tag)=>{return <span>#{tag} </span>})}</T.TodoTag>
            </T.Detail>
            <T.Option>
              <T.CheckBox type="checkbox" />
              <T.DeleteBt>X</T.DeleteBt>
            </T.Option>
          </T.TodoItem>
        )
      })}
      </T.TodoItems>
    )
  }
  return (
    <T.Container>
      <T.Wrap>
        <T.Content>
          <T.Title>TODO LIST</T.Title>
          <ShowToDoList />
        </T.Content>
        {addTodo ? 
          <div>
            <input />
            <input />
            <button onClick={addToDoList}>
              등록
            </button>
          </div>
        : <T.AddToDo onClick={() => setAddTodo(true)}>
          <div>추가하기</div>
        </T.AddToDo>}
        
      </T.Wrap>
    </T.Container>
  )
  
}

