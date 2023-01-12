interface ButtonProps {
  text: string;
}

export function Button({ text }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 border text-main-900 border-main-900 rounded-full hover:bg-main-900 hover:text-main-400 transition-all"
    >
      { text }
    </button>
  )
}