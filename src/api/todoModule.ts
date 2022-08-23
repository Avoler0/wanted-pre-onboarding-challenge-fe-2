import { todoT } from "../types/types";
import { todoApi } from "./axiosInstance";


export default function todoModule(){
  /**
   * createToDo
   * : 할 일을 추가할 수 있다.
   * : 내용없이 추가할 수 없다.
   */



  function createToDo(data:todoT){
    todoApi.post("todo",data);
  }
  /**
   * @readToDo
   * @모든 할 일을 조회할 수 있다.
   * ID를 기반으로 특정 할 일을 조회할 수 있다.
  */
  function readToDo(id?:number){
    todoApi.get("todo/id",(res:any)=>{
      console.log(res);
    })
  }
  /**
   * updateToDo
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * 특정 할 일의 특정 태그를 수정할 수 있다.
  */
  function updateToDo(){

  }
  /**
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * 모든 할 일을 제거할 수 있다.
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * 특정 할 일의 모든 태그를 제거할 수 있다.
  */
  function deleteToDo(){
    
  }
  return {createToDo,readToDo,updateToDo,deleteToDo}
}