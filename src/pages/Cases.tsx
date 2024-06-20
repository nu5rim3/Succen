import CaseTable from "@/components/custom/CaseTable"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

const Cases = () => {
    return (
        <Card className="bg-gray-100">
            <CardHeader>
                <CardTitle>Case List</CardTitle>
            </CardHeader>

            <CardContent>
                <CaseTable />
            </CardContent>
        </Card>
    )
}

export default Cases