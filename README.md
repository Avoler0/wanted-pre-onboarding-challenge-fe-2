## 프리온보딩 프론트엔드 챌린지 2차 ( 정윤서 )

#### 함수의 기능은 모두 작동하지 않음을 알려드립니다.

```
📦src
 ┣ 📂api
 ┃ ┣ 📜axiosInstance.ts
 ┃ ┣ 📜httpRequest.ts
 ┃ ┗ 📜todoModule.ts
 ┣ 📂component
 ┃ ┗ 📜ToDo.tsx
 ┣ 📂pages
 ┃ ┣ 📂style
 ┃ ┃ ┗ 📂component
 ┃ ┃ ┃ ┗ 📜todoStyle.ts
 ┃ ┗ 📜index.tsx
 ┣ 📂types
 ┃ ┗ 📜types.ts
```

#### 📂api
##### 📜axiosInstance.ts
> axiosCreate부분으로 간편하고 가독성이 좋은 방법으로 사용하기 위해 axios를 설정해주는 코드
##### 📜httpRequest.ts
> axiosInstance에서 전달받은 axios를 처리해주는 부분
##### 📜todoModule.ts
> json-server를 바탕으로 get,post,patch,delete등 데이터 통신을 위해 만들어진 함수들이 모여진 파일
##### createToDo()
- 할 일을 추가할 수 있습니다.
- 내용없이 추가할 수 없습니다.
##### readToDo()
- 모든 할 일을 조회할 수 있습니다.
- ID를 기반으로 특정 할 일을 조회할 수 있습니다.
##### updateToDo()
- ID를 제외한 모든 속성을 수정할 수 있습니다.
- 특정 할 일의 특정 태그를 수정할 수 있습니다.
##### deleteToDo()
- ID를 기반으로 특정 할 일을 삭제할 수 있습니다.
- 모든 할 일을 제거할 수 있습니다.
- 특정 할 일의 특정 태그를 삭제할 수 있습니다.
- 특정 할 일의 모든 태그를 제거할 수 있습니다.
#### 📂component
##### 📜ToDo.tsx
> todoList를 렌더링 해주거나 , 추가해주는 페이지
#### 📂pages
> 컴포넌트에 있는것들을 최종적으로 페이지별로 나누어 관리해주는 폴더
#### 📂types
> 각 코드들이 사용되며 필요한 type들을 정리해둔 폴더
