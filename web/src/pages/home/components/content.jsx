import { Button } from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { ROUTER_CONFIG } from "../../../config/constants";
import { DrawerDemo } from "./indice";

export function Content() {
  const navigate = useNavigate();
  const goAccess = () => {
    navigate(ROUTER_CONFIG.ACCESS);
  };

  return (
    <>
      <div className=" flex py-10 justify-center">
        <h2 className="text-neutral-500 text-2xl font-semi-bold">
          Com a OceanReport, sua contribuição para um oceano melhor
        </h2>
      </div>
      <div className=" px-96 justify-center gap-40">
        <div className="flex justify-center">
          <Button
            onClick={goAccess}
            className="w-72 h-12 bg-primary rounded-3xl border-2 border-primary"
          >
            <span className="text-lg text-secondary font-semi-bold">
              Começa Aqui
            </span>
          </Button>
        </div>
        <div className="flex justify-center mt-8 mb-8">
          <DrawerDemo />
        </div>
      </div>
    </>
  );
}
