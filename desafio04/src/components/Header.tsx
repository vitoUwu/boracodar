import { X } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Header() {
  return (
    <div className='flex gap-4 w-full items-center pb-3 border-b-2 border-gray-800'>
      <Avatar url='./avatar.png' />
      <div>
        <span className='font-medium'>Cecillia Sassaki</span>
        <p className='relative pl-4 after:top-1/2 after:-translate-y-1/2 after:left-0 text-teal-500 after:rounded-full after:h-3 after:aspect-square after:bg-teal-500 after:absolute'>
          online
        </p>
      </div>
      <button className='hover:bg-gray-700 w-8 h-8 rounded flex justify-center items-center transition-colors active:bg-gray-600 select-none ml-auto'>
        <span>
          <X weight='bold' />
        </span>
      </button>
    </div>
  );
}
