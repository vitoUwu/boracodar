import { PaperPlaneRight } from "phosphor-react";
import { useRef } from "react";

type TextInputProps = {
  onTextSend: (message: string) => void;
};

export function TextInput({ onTextSend }: TextInputProps) {
  const inputRef = useRef<null | HTMLInputElement>(null);

  function handleSendClick() {
    const message = inputRef.current?.value.trim();
    if (message?.length) {
      onTextSend(message);
      inputRef.current!.value = "";
    }
  }

  return (
    <div className='w-full flex items-center gap-3 justify-between bg-gray-800 rounded-full p-3 mt-1 focus-within:ring-2 focus-within:ring-teal-700'>
      <input
        type='text'
        placeholder='Digite sua mensagem'
        className='bg-transparent w-full focus:outline-none'
        ref={inputRef}
        onKeyDown={(event) =>
          event.code === "Enter" && !event.shiftKey && handleSendClick()
        }
      />
      <button onClick={handleSendClick}>
        <PaperPlaneRight
          weight='fill'
          size={20}
        />
      </button>
    </div>
  );
}
