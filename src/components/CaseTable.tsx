import React from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import 'tailwindcss/tailwind.css';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

interface ICase {
    select?: null;
    name: string;
    contractSignedDate: string;
    dateOfDeath: string;
    coCounsel: string;
    status: 'Open' | 'Closed';
    handlingFirm: string;
    caseType: string;
    createdDate: string;
    closedDate?: string;
}

const data: ICase[] = [
    {
        select: null,
        name: 'MAT-2210275',
        contractSignedDate: '2022-10-19',
        dateOfDeath: '2018-03-01 00:30:00',
        coCounsel: 'Dianne Russell',
        status: 'Closed',
        handlingFirm: 'WLF',
        caseType: 'Case type A',
        createdDate: '2018-03-01 00:30:00',
        closedDate: '2022-10-19',
    },
    {
        select: null,
        name: 'MAT-2210275',
        contractSignedDate: '2022-10-19',
        dateOfDeath: '2018-03-01 00:30:00',
        coCounsel: 'Dianne Russell',
        status: 'Open',
        handlingFirm: 'WLF',
        caseType: 'Case type B',
        createdDate: '2018-03-01 00:30:00',
    },
    {
        select: null,
        name: 'MAT-2210275',
        contractSignedDate: '2022-10-19',
        dateOfDeath: '2018-03-01 00:30:00',
        coCounsel: 'Dianne Russell',
        status: 'Open',
        handlingFirm: 'WLF',
        caseType: 'Case type C',
        createdDate: '2018-03-01 00:30:00',
    },
    {
        select: null,
        name: 'MAT-2210275',
        contractSignedDate: '2022-10-19',
        dateOfDeath: '2018-03-01 00:30:00',
        coCounsel: 'Dianne Russell',
        status: 'Closed',
        handlingFirm: 'WLF',
        caseType: 'Case type D',
        createdDate: '2018-03-01 00:30:00',
        closedDate: '2022-10-19',
    },
    {
        select: null,
        name: 'MAT-2210275',
        contractSignedDate: '2022-10-19',
        dateOfDeath: '2018-03-01 00:30:00',
        coCounsel: 'Dianne Russell',
        status: 'Open',
        handlingFirm: 'WLF',
        caseType: 'Case type E',
        createdDate: '2018-03-01 00:30:00',
    },
];

const columnHelper = createColumnHelper<ICase>()

const columns = [

    columnHelper.accessor('select', {
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    }),
    columnHelper.accessor('name', {
        header: () => 'Name',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('contractSignedDate', {
        header: () => 'Contract signed date',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('dateOfDeath', {
        header: () => 'Date of Death',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('coCounsel', {
        header: () => 'Co-Counsel',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
        header: () => 'Status',
        cell: ({ row }) => {
            const status: string = row.getValue("status")
            const statusClass =
                status === "Open" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
            return <span className={`px-4 py-1 rounded-full ${statusClass}`}>{status}</span>
        },

        footer: info => info.column.id,
    }),
    columnHelper.accessor('handlingFirm', {
        header: () => 'Handling firm',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('caseType', {
        header: () => 'Case Type',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('createdDate', {
        header: () => 'Created date',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('closedDate', {
        header: () => 'Closed date',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
];

const CaseTable: React.FC = () => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <div className="space-x-2">
                    <button className="bg-gray-200 text-black px-4 py-2 rounded">All status (829)</button>
                    <button className="bg-green-200 text-green-700 px-4 py-2 rounded">Open (244)</button>
                    <button className="bg-red-200 text-red-700 px-4 py-2 rounded">Closed (673)</button>
                </div>
                <div className="space-x-2">
                    <button className="bg-gray-200 text-black px-4 py-2 rounded">Filters</button>
                    <button className="bg-gray-200 text-black px-4 py-2 rounded">All case types</button>
                    <button className="bg-gray-200 text-black px-4 py-2 rounded">All time</button>
                </div>
            </div>
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map(headerGroup => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHead key={header.id} className="px-4 py-2 border-b-2">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows.map(row => (
                        <TableRow key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <TableCell key={cell.id} className={`px-4 py-4 border-b`}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CaseTable;
