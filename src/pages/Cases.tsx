import CaseTable from "@/components/custom/CaseTable"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import {useEffect, useState} from "react";
import {fetchCaseTypes} from "@/services/dashboard/dashboard.service.ts";

const Cases = () => {

    const [caseTypes, setCaseTypes] = useState<TSelectListType[]>([])


    useEffect(() => {
        fetchCaseTypes()
            .then(({data: {data}}) => {
                setCaseTypes(data.map(d => ({name: d.caseType, value: d.value})))
            })
            .catch(error => {
                console.log(error)
                setCaseTypes([])
            })
    }, []);

    return (
        <Card className="bg-gray-100 dark:bg-gray-800">
            <CardHeader>
                <CardTitle>Case List</CardTitle>
            </CardHeader>

            <CardContent>
                <CaseTable caseTypes={caseTypes} />
            </CardContent>
        </Card>
    )
}

export default Cases