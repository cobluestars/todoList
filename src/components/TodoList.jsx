import React, { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkState, setCheckState] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    axios
      .get("http://localhost:4000/todos").then((res) => {       //조회
        setTodoList(res.data);
      }).catch((error) => {
        setErrorMessage("에러났지롱");
      });
  }

  function onSubmit() {
    axios
      .post("http://localhost:4000/todos/", {       //생성
        content: todo
      })
      .then(() => {
        window.location.reload();
        // setTodoList([...todoList, { content: todo }]);
        // setTodo("");
      });
  }

  function onDelete(id) {
    axios.delete("http://localhost:4000/todos/" + id).then(() => {      //삭제
        window.location.reload();
    })
  }

  function handleCheck(event, id, content) {
    axios.put("http://localhost:4000/todos/" + id, {        //수정
        content: content,
        checked: event.target.checked
    }).then(() => {
        window.location.reload();
    })
  }

  return (
    <div>
      <h4 className="text-center">일정 관리</h4>
      <hr />
      <div className="d-flex justify-content-between">
        <div className="flex-fill">
          <input
            onChange={(event) => setTodo(event.target.value)}
            value={todo}
            className="form-control"
            placeholder="일정 등록"
          />
        </div>
        <button onClick={onSubmit} className="btn btn-primary ms-3">
          등록
        </button>
      </div>
      <hr />
      {errorMessage ? (
        <div className="text-danger h4 text-center">{errorMessage}</div>
      ) : (
        ""
      )}
      <div>
        {todoList.map((item, index) => {
          return (
            <div className="card mt-2" key={index}>
                <div className="card-body d-flex justify-content-between align-items-center" key={index}>
                    <div>
                        <input
                            checked={item.checked}
                            onChange={(event) => handleCheck(event, item.id, item.content)}
                            className="form-check-input me-2"
                            type="checkbox"
                        />
                        <span
                            style={{textDecoration: item.checked ? "line-through" : "",
                                    color: item.checked ? "gray" : "black"}}
                        >
                            {item.content}
                        </span>
                    </div>
                    <button onClick={() => onDelete(item.id)} className="btn btn-danger">삭제</button>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
