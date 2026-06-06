import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;

    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="border-t bg-white p-4">
      <div className="max-w-4xl mx-auto flex gap-2">

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Posez une question..."
          className="flex-1 border rounded-xl p-3"
        />

        <button
          onClick={handleSend}
          className="bg-black text-white px-5 rounded-xl"
        >
          Envoyer
        </button>

      </div>
    </div>
  );
}