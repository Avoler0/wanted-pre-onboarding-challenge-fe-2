import React from "react";
import todoModule from "../api/todoModule";
import * as T from "../pages/style/component/todoStyle";
import { todoT } from "../types/types";


export default function ToDo(){
  /** todo 추가 창을 불러오기 위한 상태관리 */
  const [addTodo,setAddTodo] = React.useState(false);
  const {todoList,readToDo,todoLoading} = todoModule();
  React.useEffect(()=>{
    readToDo();
  },[])
  /**
   * addToDoList
   * @1. todo를 추가 할 수 있는 input창을 불러옵니다.
   */
  const addToDoList = () => {
    setAddTodo(false)
  }
  /**
   * ShowToDoList
   * @1. 받아온 todoList 데이터를 사용하여 JSX요소로 렌더링 해줍니다.
   * @returns JSX요소
   */
  const ShowToDoList = () => {
    return (
      <T.TodoItems>
      {todoList?.map((todo:todoT)=>{
        return(
          <T.TodoItem key={todo.id}>
            <T.Detail>
              <T.TodoContent><span>{todo.content}</span></T.TodoContent>
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
    <>
    {todoLoading ? <div>로딩중</div> :
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
    }
    
    </>
  )
  
}

