import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

export default function Chat() {
  return (
    <div className="h-screen flex">

      <Sidebar />

      <main className="flex-1 flex flex-col">

        <ChatWindow />

        <ChatInput />

      </main>

    </div>
  );
}