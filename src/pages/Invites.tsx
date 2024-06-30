import InviteDialog from '@/components/custom/InviteDialog'
import UserTable from '@/components/custom/UserTable'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { UserPlus } from 'lucide-react'
import { useState } from 'react'

const Invites = () => {

    const [open, setOpen] = useState<boolean>(false);

    const toggleDialog = () => {
        setOpen(!open);
    }

    return (
        <>
            <div className='flex flex-col gap-2'>
                <Card className="bg-gray-100 dark:bg-gray-800">
                    <CardHeader>
                        <div className='flex flex-row justify-between items-end'>
                            <CardTitle>Invited Users</CardTitle>
                            <Button variant={'default'} className='flex flex-row gap-3 justify-between items-end' onClick={toggleDialog}><UserPlus className='w-5 h-5' />Invite a user</Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <UserTable />
                    </CardContent>
                </Card>

            </div>
            <InviteDialog open={open} toggle={toggleDialog} />
        </>
    )
}

export default Invites