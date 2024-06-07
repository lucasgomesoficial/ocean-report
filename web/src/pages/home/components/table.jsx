import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

export function TableList({ reports }) {
  return (
    <Table className="w-[60%] ml-28">
      <TableHeader>
        <TableRow>
          <TableHead>ESTADO</TableHead>
          <TableHead className="text-center">RELATO(S)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map(({ id, name, reports }) => (
          <TableRow key={id}>
            <TableCell>{name}</TableCell>
            <TableCell className="text-center">{reports}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
