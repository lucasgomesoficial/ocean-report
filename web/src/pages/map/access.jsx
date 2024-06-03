import { Map } from "./components/map";
import { Input } from "@/components/ui/input"
import { Button } from "../../components/ui/button";
import { Search } from "lucide-react";

export function Access() {
    return (
        <>
            <div className=" flex py-16 space-x-2 justify-center">
                <Input placeholder="Pesquise o local desejado" />
                <Button type="submit">
                    <div>
                        <Search size={16} color="#ffffff" />
                    </div>
                </Button>
            </div>
            <div className="flex px-96 justify-center items-center">
                <Map />
            </div>
        </>
    )
}