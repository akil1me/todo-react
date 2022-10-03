import TodoItem from "./TodoItem";

export default function TodoList({ todos, deliteTodo, isComplited }) {

  return (
    <>
      <ul className="todo list-unstyled mt-4">
        {
          todos.map((todo, index) => (<TodoItem key={index} indeks={index} {...todo} deliteTodo={deliteTodo} isComplited={isComplited} />))
        }
      </ul>
    </>
  )
}