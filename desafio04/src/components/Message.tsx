import clsx from "clsx";

type MessageProps = {
  children: string;
  isFromSender?: boolean;
  createdAt: Date;
  includeDate?: boolean;
};

export function Message({
  children,
  isFromSender = false,
  createdAt,
  includeDate = true,
  ...rest
}: MessageProps) {
  const messageTime = new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(createdAt);

  return (
    <div
      className={clsx("flex flex-col gap-1", {
        "items-end": isFromSender,
      })}
      {...rest}>
      {includeDate ? (
        <span className='text-sm text-gray-500'>{messageTime}</span>
      ) : null}
      <span
        className={clsx(
          "rounded-lg px-3 py-1 w-fit max-w-full text-ellipsis overflow-hidden",
          {
            "bg-teal-600 rounded-tr-none ml-3": isFromSender,
            "bg-purple-700 rounded-tl-none mr-3": !isFromSender,
          }
        )}>
        {children}
      </span>
    </div>
  );
}
