import { Button } from "../../../components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table"

const res = [
    {
        date: "01/06/2024",
        cidade: "São Paulo",
        reports: "4",
    },
    {
        date: "02/06/2024",
        cidade: "Porto Seguro",
        reports: "7",
    },
    {
        date: "03/06/2024",
        cidade: "Ilhabela",
        reports: "10",
    },
]

export function TableList() {
    return (
        <Table className="w-[50%] ml-28">
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">DATA</TableHead>
                    <TableHead className="text-center">CIDADE</TableHead>
                    <TableHead className="text-center">REPORTS</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {res.map((date) => (
                    <TableRow key={date.date}>
                        <TableCell className="text-center">{date.date}</TableCell>
                        <TableCell className="text-center">{date.cidade}</TableCell>
                        <TableCell className="text-center">{date.reports}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}