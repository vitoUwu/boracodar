import { useRef, useState } from "react";
import { Header } from "./components/Header";
import { Message } from "./components/Message";
import { TextInput } from "./components/TextInput";

type IMessage = {
  content: string;
  isFromSender: boolean;
  createdAt: Date;
  includeDate?: boolean;
};

export function App() {
  const messagesBottomRef = useRef<null | HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([
    {
      content: "Tenho uma ideia incrível para um projeto! 😍",
      createdAt: new Date(),
      isFromSender: false,
    },
    {
      content: "Sério? Me conta mais.",
      createdAt: new Date(),
      isFromSender: true,
    },
    {
      content:
        "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
      createdAt: new Date(),
      isFromSender: false,
    },
    {
      content: "#boraCodar! 🚀",
      createdAt: new Date(),
      isFromSender: true,
    },
  ]);

  function appendMessage(message: IMessage) {
    setMessages((oldMessages) => [
      ...oldMessages,
      {
        ...message,
        includeDate:
          !oldMessages.at(-1)?.isFromSender ||
          oldMessages.at(-1)?.createdAt.getMinutes() !==
            new Date().getMinutes(),
      },
    ]);
    messagesBottomRef.current!.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='px-3 md:px-20 py-10 flex flex-1 h-screen justify-center'>
      <div className='max-w-5xl w-full flex flex-col'>
        <Header />
        <div className='flex flex-col h-full gap-1 overflow-y-auto overflow-x-clip pr-1'>
          {messages.map((message, index) => (
            <Message
              key={message.createdAt.getTime() + index}
              isFromSender={message.isFromSender}
              createdAt={message.createdAt}
              includeDate={message.includeDate}>
              {message.content}
            </Message>
          ))}
          <div
            ref={messagesBottomRef}
            className='mt-10'
          />
        </div>
        <TextInput
          onTextSend={(message) =>
            appendMessage({
              content: message,
              isFromSender: true,
              createdAt: new Date(),
            })
          }
        />
      </div>
    </div>
  );
}
