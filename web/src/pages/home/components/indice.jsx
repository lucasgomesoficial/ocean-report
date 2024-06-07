import * as React from "react";
import { Button } from "../../../components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../components/ui/drawer";
import { TableList } from "./table";
import { useFetchReports } from "../hook/useFetch";

export function DrawerDemo() {
  const { reports } = useFetchReports();

  function renderTable() {
    return reports.length > 0 ? (
      <TableList reports={reports} />
    ) : (
      <p>Nenhum relato encontrado</p>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-72 h-12 bg-secondary rounded-3xl border-2 border-primary "
        >
          <span className="text-lg text-primary font-semi-bold">
            Índices de Relatos
          </span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-center">
              Índices de Relatos por Estado
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              {renderTable()}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <div className="flex mx-56">
                <Button
                  variant="outline"
                  className="w-72 h-12 bg-primary rounded-3xl border-2 border-primary hover:bg-primary"
                >
                  <span className="text-lg text-secondary font-semi-bold">
                    Fechar
                  </span>
                </Button>
              </div>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
