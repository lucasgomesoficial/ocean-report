import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { ShowMap } from "./components/map";
import { useFetchMapbox } from "./hook/useLocalMapBox";

export function Access() {
  const reports = JSON.parse(localStorage.getItem("reports") || "[]");

  const [address, setAddress] = React.useState("");
  const [state, setState] = React.useState("");

  const [position, setPosition] = React.useState(null);

  const { getLocal } = useFetchMapbox();

  const loadOptions = async (inputValue) => {
    if (inputValue.length < 5) return;
    const response = await getLocal(inputValue);

    return response;
  };

  const handleChangeSelect = (event) => {
    event.preventDefault();
    setAddress(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!address) return;
    const data = await loadOptions(event.target[0].defaultValue);

    setPosition(data.center);
    setState(data.context[0].text);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex py-16 space-x-2 justify-center"
      >
        <Input
          placeholder="Pesquise o local desejado"
          onChange={handleChangeSelect}
          value={address}
        />
        <Button type="submit">
          <div>
            <Search size={16} color="#ffffff" />
          </div>
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
