import { Input } from "@/components/ui/input";
import { Search, Undo2 } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { ROUTER_CONFIG } from "../../config/constants";
import { ShowMap } from "./components/map";
import { useFetchMapbox } from "./hook/useLocalMapBox";

export function Access() {
  const navigate = useNavigate();

  const reports = JSON.parse(localStorage.getItem("reports") || "[]");

  const [address, setAddress] = React.useState("");
  const [state, setState] = React.useState("");

  const [position, setPosition] = React.useState(null);

  const { getLocal } = useFetchMapbox();

  const loadOptions = async (inputValue) => {
    const response = await getLocal(inputValue);

    return response;
  };

  const handleChangeSelect = (event) => {
    event.preventDefault();
    setAddress(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const data = await loadOptions(event.target[1].value);

    setPosition(data.center);
    setState(data.context[0].text);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex py-16 space-x-2 justify-center"
      >
        <Button
          variant="destructive"
          onClick={() => navigate(ROUTER_CONFIG.HOME)}
        >
          <Undo2 size={16} color="#ffffff" />
        </Button>
        <Input
          placeholder="Pesquise o local desejado"
          onChange={handleChangeSelect}
          value={address}
        />
        <Button type="submit">
          <Search size={16} color="#ffffff" />
        </Button>
      </form>
      <div className="flex px-96 justify-center items-center">
        <ShowMap
          position={position}
          reports={reports}
          state={state}
          address={address}
        />
      </div>
    </>
  );
}
