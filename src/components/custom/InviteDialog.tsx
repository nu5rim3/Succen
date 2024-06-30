
import InviteUserForm from '../forms/invite-user-form';
import { DialogHeader, Dialog, DialogContent, DialogTitle, DialogDescription } from '../ui/dialog'

interface IInviteDialogProps {
    open: boolean;
    toggle: () => void;
}

const InviteDialog: React.FC<IInviteDialogProps> = ({ open, toggle }) => {
    return (
        <Dialog open={open} onOpenChange={toggle} modal>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle className='font-normal'>Invite Users</DialogTitle>
                    <DialogDescription>
                        Invite users to your for collaboration
                    </DialogDescription>
                </DialogHeader>
                <InviteUserForm toggle={toggle} />
            </DialogContent>
        </Dialog>
    )
}

export default InviteDialog