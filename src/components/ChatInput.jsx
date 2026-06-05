import { useState } from "react";

export default function ChatInput() {

  const [text, setText] = useState("");

  const handleSend = () => {
    console.log(text);
    setText("");
  };

  return (
    <div className="border-t bg-white p-4">

      <div className="max-w-4xl mx-auto flex gap-2">

        <input
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
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