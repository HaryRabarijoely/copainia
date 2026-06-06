import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";

import useChat from "../hooks/useChat";

export default function Chat() {

  const {
    messages,
    sendMessage,
  } = useChat();

  return (
    <div className="h-screen flex">

      <Sidebar />

      <main className="flex-1 flex flex-col">

        <ChatWindow
          messages={messages}
        />

        <ChatInput
          onSend={sendMessage}
        />

      </main>

    </div>
  );
}