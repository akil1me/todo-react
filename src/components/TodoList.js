import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {

  return (
    <>
      <ul className="todo list-unstyled mt-4">
        {
          todos.map((todo, index) => (<TodoItem key={index} {...todo} />))
        }
      </ul>
    </>
  )
}