
import CreateCaseTypeForm from '../forms/create-case-type-form';
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog'
import { IProduct } from './ProductTable';

interface ICreateCaseDialogProps {
    tableRowDetail: IProduct | null;
    open: boolean;
    toggle: () => void;
}

const CreateCaseDialog: React.FC<ICreateCaseDialogProps> = ({ open, toggle, tableRowDetail }) => {
    return (
        <Dialog open={open} onOpenChange={toggle} modal >
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle className='font-normal'>Create a new product</DialogTitle>
                    <DialogDescription>
                        Create a product for find tune the document search
                    </DialogDescription>
                </DialogHeader>
                <CreateCaseTypeForm toggle={toggle} action={tableRowDetail !== null ? 'UPDATE' : 'SAVE'} />
            </DialogContent>
        </Dialog>
    )
}

export default CreateCaseDialog