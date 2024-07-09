import CreateCaseDialog from '@/components/custom/CreateCaseDialog'
import ProductTable from '@/components/custom/ProductTable'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'
import { useState } from 'react'

const CreateProduct = () => {

    const [open, setOpen] = useState<boolean>(false);

    const toggleDialog = () => {
        setOpen(!open);
    }

    return (
        <>
            <Card className="bg-gray-100">
                <CardHeader>
                    <div className='flex flex-row justify-between items-end'>
                        <CardTitle>Products</CardTitle>
                        <Button variant={'default'} className='flex flex-row gap-3 justify-between items-end' onClick={toggleDialog}><Sparkles className='w-5 h-5' />Create Product</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <ProductTable toggleEdit={toggleDialog} />
                </CardContent>
            </Card>
            <CreateCaseDialog open={open} toggle={toggleDialog} tableRowDetail={null} />
        </>
    )
}

export default CreateProduct