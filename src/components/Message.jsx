import ReactMarkdown from "react-markdown";

export default function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl p-4 rounded-xl ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white border"
        }`}
      >
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}