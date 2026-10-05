import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import ChatWindow from "./components/ChatWindow"
import MessageInput from "./components/MessageInput"

function App() {
  return (
    <div className="container-fluid min-vh-100 p-0">

      <Navbar />

      <div className="row g-0">

        <Sidebar />

        <div className="col-md-9 col-lg-10">

          <ChatWindow />

          <MessageInput />

        </div>

      </div>

    </div>
  )
}

export default App