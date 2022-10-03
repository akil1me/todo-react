export default function TodoItem({ title, id, deliteTodo, isComplited, isComlitedd }) {
  return (
    <>
      <li className="card p-3 mb-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">

            <input className="form-check-input" type="checkbox" onChange={() => isComplited(id)} checked={isComlitedd} />

            <p className="mb-0 ms-3" style={{
              textDecoration: isComlitedd
                ? 'line-through'
                : 'none',
            }}> {title}</p>
          </div>

          <div>
            <button className="btn btn-danger" type="button" onClick={() => deliteTodo(id)}>delite</button>
          </div>
        </div>
      </li>
    </>
  )
}