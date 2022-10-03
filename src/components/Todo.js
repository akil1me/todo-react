import { useState, useMemo } from "react";
import TodoList from "./TodoList";

import "./todo.scss"

const Todo = () => {
  const [todo, setTodo] = useState([])
  const [inputValue, setIputValue] = useState("");

  const addPost = (evt) => {
    evt.preventDefault()
    const obj = {
      title: inputValue,
      id: new Date().getTime(),
      isComlitedd: false
    }

    setTodo([...todo, obj])
    setIputValue("")
  }

  const removePost = () => {
    setTodo([])
    setIputValue("")
  }

  const deliteTodo = (id) => {
    let newTodo = todo.filter((item) => item.id !== id)
    setTodo(newTodo);
  }

  const isComplited = (id) => {
    let newTodo = todo.map((item) => {
      if (item.id === id) {
        item.isComlitedd = !item.isComlitedd;
      }
      return item;
    })
    setTodo(newTodo);

    console.log(newTodo);
  }

  return (
    <>
      {/* Main */}
      <main>
        <section className="todo">
          <h1 className="text-center h1">Todo React</h1>

          <form className="todo__form" onSubmit={addPost} onReset={removePost}>
            <div className="row todo__content">
              <div className="col-6 p-0">
                <input className="form-control"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setIputValue(e.target.value)}
                  placeholder="Add todo" required />
              </div>

              <div className="col-6">
                <button className="btn btn-primary" type="submit">Add</button>
                <button className="btn btn-danger ms-2" type="reset">Clear</button>
              </div>
            </div>
          </form>

          <TodoList todos={todo} deliteTodo={deliteTodo} isComplited={isComplited} />
        </section>
      </main>
    </>
  )
}

export default Todo;