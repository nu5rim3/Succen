import React from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import 'tailwindcss/tailwind.css';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Checkbox } from '../ui/checkbox';
import { DropSelect } from './DropSelect';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from '../ui/pagination';
import {RadioGroup, RadioItem} from "@/components/ui/radio.tsx";

interface ICase {
    select?: null;
    name: string;
    contractSignedDate: string;
    dateOfDeath: string;
    coCounsel: string;
    status: 'Complete' | 'Incomplete';
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
        status: 'Incomplete',
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
        status: 'Complete',
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
        status: 'Complete',
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
        status: 'Incomplete',
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
        status: 'Complete',
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
                status === "Incomplete" ? "bg-blue-800 text-white" : "bg-amber-500 text-white"
            return <span className={`px-4 py-1 ${statusClass}`}>{status}</span>
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

type TCaseTable = {
    caseTypes: TSelectListType[]
}

const CaseTable: React.FC<TCaseTable> = ({caseTypes}) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="mx-auto p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                <div className="space-x-2">
                    <ToggleGroup type="single" className='flex flex-col sm:flex-row'>
                        <ToggleGroupItem value="a" className='border rounded-none hover:bg-gray-700 hover:text-white data-[state=on]:bg-gray-700 data-[state=on]:text-white'>All status <span className='bg-white text-black rounded-full ml-2 px-1'>829</span></ToggleGroupItem>
                        <ToggleGroupItem value="b" className='border rounded-none hover:bg-amber-500 hover:text-white data-[state=on]:bg-amber-500 data-[state=on]:text-white'>Complete <span className='bg-amber-500 text-white rounded-full ml-2 px-1'>244</span></ToggleGroupItem>
                        <ToggleGroupItem value="c" className='border rounded-none hover:bg-blue-800 hover:text-white data-[state=on]:bg-blue-800 data-[state=on]:text-white'>Incomplete <span className='bg-blue-800 text-white rounded-full ml-2 px-1'>673</span></ToggleGroupItem>
                    </ToggleGroup>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <DropSelect className='bg-white w-full' />
                    <DropSelect className="bg-white w-[140px] flex-shrink-0" placeHolder="All Cases"
                                value={caseTypes[0]?.value}
                                itemList={caseTypes}
                                onChange={(e) => {
                                    console.log(e)
                                }}
                    />
                    <RadioGroup >
                        <RadioItem value="all" id="all">All time</RadioItem>
                        <RadioItem value="7d" id="7d">7 days</RadioItem>
                        <RadioItem value="30d" id="30d">30 days</RadioItem>
                    </RadioGroup>
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
                        <TableRow key={row.id} className='hover:bg-white dark:hover:bg-gray-700'>
                            {row.getVisibleCells().map(cell => (
                                <TableCell key={cell.id} className={`px-4 py-4 border-b`}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <Pagination className='justify-end flex-1'>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                {/* <div className="space-x-2">
                    <Button
                        className='rounded-none'
                        size="sm"
                        onClick={() => table.previousPage()}
                    // disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        className='rounded-none'
                        size="sm"
                        onClick={() => table.nextPage()}
                    // disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div> */}
            </div>
        </div>
    );
};

export default CaseTable;
