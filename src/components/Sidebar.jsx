function Sidebar() {
  return (
    <aside className="col-md-3 col-lg-2 bg-light border-end p-3">

      <h5 className="mb-3">
        Chats
      </h5>

      <button className="btn btn-primary w-100 mb-3">
        + New Chat
      </button>

      <div className="list-group">

        <button className="list-group-item list-group-item-action">
          Previous Chat 1
        </button>

        <button className="list-group-item list-group-item-action">
          Previous Chat 2
        </button>

        <button className="list-group-item list-group-item-action">
          Previous Chat 3
        </button>

      </div>

    </aside>
  )
}

export default Sidebar