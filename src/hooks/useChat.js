import { useState } from "react";

export default function useChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Bonjour 👋 Comment puis-je vous aider ? ",
    },
  ]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Réponse simulée
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Vous avez écrit : "${text}"`,
        },
      ]);
    }, 500);
  };

  return {
    messages,
    sendMessage,
  };
}