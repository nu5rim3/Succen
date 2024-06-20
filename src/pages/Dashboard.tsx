import CaseAnalyticsChart from "@/components/custom/CaseAnalyticsChart"
import CaseTable from "@/components/custom/CaseTable"
import { DropSelect } from "@/components/custom/DropSelect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileBarChart } from "lucide-react"

const Dashboard = () => {
    return (
        <div className="flex justify-center flex-col gap-10">
            {/* Must hide some times */}
            <div className="text-center">
                <h1 className="text-5xl font-normal">Hello Jonathan 👋</h1>
                <h1 className="text-4xl font-light">Here is your case analytics</h1>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-3 gap-5">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>Total Cases</CardTitle>
                            <DropSelect />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="col-span-2 mr-20">
                                <h2 className="text-5xl font-normal mb-5">42,000</h2>
                                <p className="text-gray-600 mb-2">Total cases recevied compared to last year</p>
                            </div>
                            <Button className="bg-green-600 hover:bg-green-500">Increase 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>Incomplete Cases</CardTitle>
                            <DropSelect />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="col-span-2 mr-20">
                                <h2 className="text-5xl font-normal mb-5">12,940</h2>
                                <p className="text-gray-600 mb-2">Total cases incompleted compared to last year</p>
                            </div>
                            <Button className="bg-red-400 hover:bg-red-500">Decrease 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>Completed Cases</CardTitle>
                            <DropSelect />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="col-span-2 mr-20">
                                <h2 className="text-5xl font-normal mb-5">29,060</h2>
                                <p className="text-gray-600 mb-2">Total cases completed compared to last year</p>
                            </div>
                            <Button className="bg-green-600 hover:bg-green-500">Increase 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <Card className="bg-gray-100">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex flex-row gap-3 items-center">
                            <div className="rounded-full bg-white p-3"><FileBarChart /></div>
                            <CardTitle className="flex flex-col">Completed Cases
                                <p className="text-base font-normal text-gray-600">Total cases recevied compared to last year</p>
                            </CardTitle>

                        </div>

                        <div className="flex gap-2">
                            <DropSelect className="bg-white" />
                            <DropSelect className="bg-white" />
                            <DropSelect className="bg-white" />
                        </div>
                    </div>

                </CardHeader>
                <CardContent>
                    <CaseAnalyticsChart />
                </CardContent>
            </Card>

            <Card className="bg-gray-100">
                <CardHeader />

                <CardContent>
                    <CaseTable />
                </CardContent>
            </Card>

        </div>
    )
}

export default Dashboard