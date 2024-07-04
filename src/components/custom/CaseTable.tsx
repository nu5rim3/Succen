import React, { useState } from 'react';
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table';
import 'tailwindcss/tailwind.css';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Checkbox } from '../ui/checkbox';
import { DropSelect } from './DropSelect';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from '../ui/pagination';
import { Button } from '../ui/button';
import { Download, FileSearch2 } from 'lucide-react';
import { Input } from '../ui/input';
import PdfViewDialog from './PdfViewDialog';

interface ICase {
    select?: null;
    fileName: string;
    updatedDate: string;
    caseTag: 'Negative' | 'Positive';
    caseType: string;
    tagDetails: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    actions?: any
}

const data: ICase[] = [
    {
        select: null,
        fileName: 'MAT-2210275.pdf',
        updatedDate: '2022-10-19',
        caseTag: 'Positive',
        caseType: 'Case type A',
        tagDetails: ['Criminal', 'Civil', 'Family', 'Property', 'Corporate', 'Others']
    },
    {
        select: null,
        fileName: 'MAT-2210275.pdf',
        updatedDate: '2022-10-19',
        caseTag: 'Negative',
        caseType: 'Case type B',
        tagDetails: ['Criminal', 'Civil', 'Family', 'Property', 'Corporate', 'Others']
    },
    {
        select: null,
        fileName: 'MAT-2210275.pdf',
        updatedDate: '2022-10-19',
        caseTag: 'Negative',
        caseType: 'Case type C',
        tagDetails: ['Criminal', 'Civil', 'Family', 'Property', 'Corporate', 'Others']
    },
    {
        select: null,
        fileName: 'MAT-2210275.pdf',
        updatedDate: '2022-10-19',
        caseTag: 'Negative',
        caseType: 'Case type D',
        tagDetails: ['Criminal', 'Civil', 'Family']
    },
    {
        select: null,
        fileName: 'MAT-2210275.pdf',
        updatedDate: '2022-10-19',
        caseTag: 'Positive',
        caseType: 'Case type E',
        tagDetails: ['Property', 'Corporate', 'Others']
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
    columnHelper.accessor('fileName', {
        header: () => 'File Name',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('updatedDate', {
        header: () => 'Updated Date',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('caseType', {
        header: () => 'Case Type',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('caseTag', {
        header: () => 'Case Tag',
        cell: ({ row }) => {
            const status: string = row.getValue("caseTag")
            const statusClass =
                status === "Positive" ? "bg-green-600/10 text-green-600" : "bg-red-400/10 text-red-400"
            return <span className={`px-4 py-1 rounded-3xl ${statusClass}`}>{status}</span>
        },

        footer: info => info.column.id,
    }),
    columnHelper.accessor('tagDetails', {
        header: () => 'Tag Details',
        cell: ({ row }) => {
            const tagDetails: string[] = row.getValue("tagDetails")

            return tagDetails.map((tag, index) =>
                <span key={index} className={`mr-1 px-4 py-1 rounded-3xl bg-gray-600/10`}>{tag}</span>
            )
        },

        footer: info => info.column.id,
    }),

    columnHelper.accessor('actions', {
        header: () => 'Actions',
        cell: () => {
            return <div className={`flex flex-row justify-end`}>
                <Button className="mr-2" variant='ghost' size='sm'><FileSearch2 /></Button>
                <Button variant='ghost' size='sm'><Download /></Button>
            </div>
        },
        footer: info => info.column.id,
    }),
];

type TCaseTable = {
    caseTypes: TSelectListType[]
}

const CaseTable: React.FC<TCaseTable> = ({ caseTypes }) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    const [pdfViewOpen, setPdfViewOpen] = useState(false);

    const toggleDialog = () => {
        setPdfViewOpen(!pdfViewOpen);
    }

    return (
        <div className="mx-auto p-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                <div className="space-x-2">
                    <ToggleGroup type="single" className='flex flex-col sm:flex-row'>
                        <ToggleGroupItem value="a" className='border dark:border-primary/10 rounded-3xl hover:bg-primary/90 hover:text-white data-[state=on]:bg-primary data-[state=on]:text-white'>All status <span className='bg-white text-black rounded-full ml-2 px-1'>829</span></ToggleGroupItem>
                        <ToggleGroupItem value="b" className='border dark:border-primary/10 rounded-3xl hover:bg-amber-500 hover:text-white data-[state=on]:bg-amber-500 data-[state=on]:text-white'>Complete <span className='bg-amber-500 text-white rounded-full ml-2 px-1'>244</span></ToggleGroupItem>
                        <ToggleGroupItem value="c" className='border dark:border-primary/10 rounded-3xl hover:bg-blue-800 hover:text-white data-[state=on]:bg-blue-800 data-[state=on]:text-white'>Incomplete <span className='bg-blue-800 text-white rounded-full ml-2 px-1'>673</span></ToggleGroupItem>
                    </ToggleGroup>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                    <Input type='search' className="bg-white w-full" placeholder="Search file name.." />
                    <DropSelect className="bg-white w-[140px] flex-shrink-0" placeHolder="All case type"
                        value={caseTypes[0]?.value}
                        itemList={caseTypes}
                        onChange={(e) => {
                            console.log(e)
                        }}
                    />
                    <DropSelect className="bg-white w-[140px] flex-shrink-0" placeHolder="Filter by date"
                        value={caseTypes[0]?.value}
                        itemList={caseTypes}
                        onChange={(e) => {
                            console.log(e)
                        }}
                    />
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
            </div>
            <PdfViewDialog open={pdfViewOpen} toggle={toggleDialog} />
        </div>
    );
};

export default CaseTable;
