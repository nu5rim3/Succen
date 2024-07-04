
import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogFooter } from '../ui/dialog'

interface IPdfViewDialogProps {
    tableRowDetail?: string;
    open: boolean;
    toggle: () => void;
}

const PdfViewDialog: React.FC<IPdfViewDialogProps> = ({ open, toggle }) => {
    return (
        <Dialog open={open} onOpenChange={toggle} modal >
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle className='font-normal'>sample_file.pdf</DialogTitle>
                </DialogHeader>
                <div className='w-full border border-primary/20 p-4 rounded-2xl'>
                    detail table
                </div>
                <div className='w-full border border-primary/20 p-4 rounded-2xl'>
                    pdf perview
                </div>
                <DialogFooter>
                    <Button><Download className='mr-2' />Download</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default PdfViewDialog