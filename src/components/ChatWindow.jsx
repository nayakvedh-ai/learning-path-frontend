import Message from "./Message"

function ChatWindow() {
  return (
    <main className="col-md-9 col-lg-10 chat-area">

      {/* Chat Header */}
      <div className="border-bottom p-3">
        <h4 className="mb-0">
          AI Assistant
        </h4>

        <small className="text-muted">
          Ask questions about agriculture
        </small>
      </div>

      {/* Messages */}
      <div className="chat-messages p-4">

        <Message
          sender="ai"
          text="Hello! How can I help you today?"
        />

        <Message
          sender="user"
          text="Hello! I need help with my crops."
        />

      </div>

    </main>
  )
}

export default ChatWindow