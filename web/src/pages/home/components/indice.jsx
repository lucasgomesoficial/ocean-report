import * as React from "react"
import { Button } from "../../../components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../../components/ui/drawer"
import { TableList } from "./table"


export function DrawerDemo() {
    const [goal, setGoal] = React.useState(350)

    function onClick() {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className="w-72 h-12 bg-secondary rounded-3xl border-2 border-primary "><span className="text-lg text-primary font-semi-bold">Índices de Relatos</span></Button>
            </DrawerTrigger>
            <DrawerContent>
                    <div className="mx-auto w-full max-w-2xl">
                        <DrawerHeader>
                            <DrawerTitle className="text-center">Índices de Relatos por Cidade</DrawerTitle>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                            <div className="flex items-center justify-center space-x-2">
                                <TableList />
                            </div>
                        </div>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <div className="flex mx-56">
                                    <Button variant="outline" className="w-72 h-12 bg-primary rounded-3xl border-2 border-primary hover:bg-primary"><span className="text-lg text-secondary font-semi-bold">Fechar</span>
                                    </Button>
                                </div>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
            </DrawerContent>
        </Drawer>
    )
}
