export function Error({ children: error }: { children: string }) {
  return (
    <span role="alert" className="text-red-600 mt-1">
      {error}
    </span>
  );
}
