function Message({ sender, text }) {
  if (sender === "user") {
    return (
      <div className="text-end mb-3">
        <div className="bg-primary text-white rounded p-3 d-inline-block message">
          {text}
        </div>
      </div>
    )
  }

  return (
    <div className="mb-3">
      <div className="bg-light rounded p-3 d-inline-block message">
        <strong>AI:</strong> {text}
      </div>
    </div>
  )
}

export default Message