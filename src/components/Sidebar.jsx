export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 text-white p-4">
      <button className="w-full border border-zinc-700 rounded-lg p-3 hover:bg-zinc-800">
        + Nouvelle conversation
      </button>

      <div className="mt-6">
        <p className="text-sm text-zinc-400">
          Conversations
        </p>

        <div className="mt-3 space-y-2">
          <div className="p-2 rounded hover:bg-zinc-800 cursor-pointer">
            Discussion 1
          </div>

          <div className="p-2 rounded hover:bg-zinc-800 cursor-pointer">
            Discussion 2
          </div>
        </div>
      </div>
    </aside>
  );
}