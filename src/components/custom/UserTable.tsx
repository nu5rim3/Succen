import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Checkbox } from '../ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface IUser {
    select?: null;
    name: string;
    email: string;
    status: 'Accepted' | 'Rejected' | 'Pending';
    caseType?: string[];
    createdDate: string;
}

const data: IUser[] = [
    {
        name: 'jhon',
        email: 'jhon@gmail.com',
        status: 'Accepted',
        caseType: ['case A', 'case B', 'case C'],
        createdDate: '07/25/2024'
    },
    {
        name: 'steve',
        email: 'steve@gmail.com',
        status: 'Pending',
        caseType: ['case A'],
        createdDate: '07/25/2024'
    },
    {
        name: 'paul',
        email: 'paul@gmail.com',
        status: 'Rejected',
        caseType: ['case A'],
        createdDate: '07/25/2024'
    },

]

const columnHelper = createColumnHelper<IUser>()

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
    columnHelper.accessor('email', {
        header: () => 'Email',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
    columnHelper.accessor('caseType', {
        header: () => 'Case Types',
        cell: ({ row }) => {
            const caseTypes: string[] = row.getValue("caseType")
            return caseTypes.map((item: string, index: number) => <div key={index}>{item}, </div>)
        },
        footer: info => info.column.id,
    }),
    columnHelper.accessor('status', {
        header: () => 'Status',
        cell: ({ row }) => {
            const status: string = row.getValue("status")
            // TODO: write a switch case for get the status look
            let statusClass = ''
            switch (status) {
                case 'Accepted':
                    statusClass = 'bg-green-800'
                    break;
                case 'Rejected':
                    statusClass = 'bg-red-400'
                    break;
                case 'Pending':
                    statusClass = 'bg-yellow-400'
                    break;
            }
            return <span className={`px-4 py-1 text-white ${statusClass}`}>{status}</span>
        },

        footer: info => info.column.id,
    }),
    columnHelper.accessor('createdDate', {
        header: () => 'Invited date',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
];

const UserTable = () => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
    return (
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
    )
}

export default UserTable