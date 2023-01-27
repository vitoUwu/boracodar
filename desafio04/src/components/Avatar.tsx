type AvatarProps = {
  url?: string;
};

export function Avatar({ url }: AvatarProps) {
  return (
    <img
      height={48}
      width={48}
      src={url}
      className='rounded-full'
    />
  );
}
