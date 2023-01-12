import { useState } from "react";
import RotateObjectIcon from "./assets/360.svg";
import CancelRotateObjectIcon from "./assets/x.svg";
import { Button } from "./components/Button";

export function App() {
  const [rotate, setRotate] = useState<boolean>(false);

  function handleToggleViewClick() {
    setRotate((state) => !state);
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-center items-center h-screen" style={{ fontFamily: 'Lato' }}>
      <div className="relative">
        <img src={`/src/assets/42404.${rotate ? 'gif' : 'png'}`} height="253px" width="449px" alt="Sofá de dois lugares feito de couro em cor Rosé" />
        <div
          className="h-12 w-12 select-none absolute right-3 top-3 cursor-pointer hover:ring-1 ring-main-900 rounded-full aspect-square flex justify-center items-center p-2 transition-all"
          onClick={handleToggleViewClick}
        >
          <img src={rotate ? CancelRotateObjectIcon : RotateObjectIcon} alt="Botão que ativa e desativa a rotação em 360 graus do item" />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3 mb-5">
          <p className="text-xs">CÓDIGO: 42404</p>
          <h1 className="font-semibold text-[32px]" style={{ fontFamily: 'Crimsom Pro' }}>Sofá Margot II - Rosé</h1>
          <p className="text-base">R$ 4.000</p>
        </div>
        <Button text="ADICIONAR À CESTA"/>
      </div>
    </div>
  )
}