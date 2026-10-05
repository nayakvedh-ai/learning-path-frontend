function MessageInput() {
  return (
    <div className="border-top p-3 message-input">

      <div className="input-group">

        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
        />

        <button className="btn btn-primary">
          Send
        </button>

      </div>

    </div>
  )
}

export default MessageInput