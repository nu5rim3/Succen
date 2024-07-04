
import CreateCaseTypeForm from '../forms/create-case-type-form';
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog'

interface ICreateCaseDialogProps {
    open: boolean;
    toggle: () => void;
}

const CreateCaseDialog: React.FC<ICreateCaseDialogProps> = ({ open, toggle }) => {
    return (
        <Dialog open={open} onOpenChange={toggle} modal >
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle className='font-normal'>Create a new case type</DialogTitle>
                    <DialogDescription>
                        Create a new case type for your needs
                    </DialogDescription>
                </DialogHeader>
                <CreateCaseTypeForm toggle={toggle} />
            </DialogContent>
        </Dialog>
    )
}

export default CreateCaseDialog