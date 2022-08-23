import React from "react";
import { todoT } from "../types/types";
import { todoApi } from "./axiosInstance";


export default function todoModule(){
  const [todoList,setTodoList] = React.useState<todoT[]|null>(null);
  const [todoLoading,setTodoLoading] = React.useState<boolean>(true);
  /**
   * createToDo
   * @1. 할 일을 추가할 수 있다.
   * @2. 내용없이 추가할 수 없다.
   */
  function createToDo(data:todoT){
    todoApi.post("todo",data);
  }
  /**
   * readToDo
   * @1. 모든 할 일을 조회할 수 있다.
   * @2. ID를 기반으로 특정 할 일을 조회할 수 있다.
  */
  function readToDo(id?:number){
    const findId = id !== undefined ? `/${id}` : "" ;
    todoApi.get(`todo${findId}`,(res:any)=>{
      setTodoList(res.data)
      setTodoLoading(false)
    })
  }
  /**
   * updateToDo
   * @1. ID를 제외한 모든 속성을 수정할 수 있다.
   * @2. 특정 할 일의 특정 태그를 수정할 수 있다.
  */
  function updateToDo(id:number){

  }
  /**
   * deleteToDo
   * @1. ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * @2. 모든 할 일을 제거할 수 있다.
   * @3. 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @4. 특정 할 일의 모든 태그를 제거할 수 있다.
  */
  function deleteToDo(id?:number){
    
  }
  return {createToDo,readToDo,updateToDo,deleteToDo,todoList,todoLoading}
}
