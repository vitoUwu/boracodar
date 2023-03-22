import { Title } from "../components/Title";

export function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Title>
        <span className="text-violet-600">Woops!</span> Página não encontrada
      </Title>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-8xl text-violet-600/20">
        404
      </span>
    </div>
  );
}
