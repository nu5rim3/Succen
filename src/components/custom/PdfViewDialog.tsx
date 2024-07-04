
import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogFooter, DialogDescription } from '../ui/dialog'
import { ICase } from './CaseTable';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

interface IPdfViewDialogProps {
    tableRowDetail?: ICase | null;
    open: boolean;
    toggle: () => void;
}

const columnHelper = createColumnHelper<ICase>();

const columns = [
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
    })]

const PdfViewDialog: React.FC<IPdfViewDialogProps> = ({ open, toggle, tableRowDetail }) => {

    const data = tableRowDetail ? [tableRowDetail] : [];
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const handleDownload = (pdfUrl: string) => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <Dialog open={open} onOpenChange={toggle} modal>
            <DialogContent className="sm:max-w-7xl">
                <DialogHeader>
                    <DialogTitle className='font-normal'>{tableRowDetail?.fileName}</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
                <div className='w-full border border-primary/20 rounded-2xl'>
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map(headerGroup => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <TableHead key={header.id} className="px-4 py-2 border-b-1">
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
                            <TableRow>
                                <TableCell className='px-4 py-4'>{tableRowDetail?.updatedDate}</TableCell>
                                <TableCell className='px-4 py-4'>{tableRowDetail?.caseType}</TableCell>
                                <TableCell className='px-4 py-4'>
                                    {tableRowDetail?.caseTag === 'Positive' ? <span className='px-4 py-1 rounded-3xl bg-green-600/10 text-green-600'>{tableRowDetail?.caseTag}</span> : <span className='px-4 py-1 rounded-3xl bg-red-400/10 text-red-400'>{tableRowDetail?.caseTag}</span>}
                                </TableCell>
                                <TableCell className='px-4 py-4'>
                                    {tableRowDetail?.tagDetails?.map((tag, index) => <span key={index} className={`mr-1 px-4 py-1 rounded-3xl bg-gray-600/10`}>{tag}</span>)}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                <div className='w-full border border-primary/20 p-4 rounded-2xl'>
                    <iframe
                        src={'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf'}
                        width="100%"
                        height="600px"
                        className='rounded-2xl'
                        title="PDF Viewer"
                    />
                </div>
                <DialogFooter>
                    <Button onClick={() => handleDownload('https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf')}><Download className='mr-2' />Download</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default PdfViewDialog