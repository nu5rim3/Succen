import CaseAnalyticsChart from "@/components/CaseAnalyticsChart"
import CaseTable from "@/components/CaseTable"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const Dashboard = () => {
    return (
        <div className="flex justify-center flex-col gap-10">
            {/* Must hide some times */}
            <div className="text-center">
                <h1 className="text-4xl font-semibold">Hello Jonathan &#x1F91A;</h1>
                <h1 className="text-3xl">Here is your case analytics</h1>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-3 gap-5">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span className="text-gray-800">Total Cases</span>
                            <Button className="flex justify-between gap-2 bg-gray-300 rounded-full">All Time <ChevronDown size={18} /></Button>
                        </CardTitle>

                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="col-span-2 mr-20">
                                <h2 className="text-5xl font-semibold mb-5">42,000</h2>
                                <p className="text-gray-600">Total cases recevied compared to last year</p>
                            </div>
                            <Button className="bg-green-600">Increase 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span className="text-gray-800">Incomplete Cases</span>
                            <Button className="flex justify-between gap-2 bg-gray-300 rounded-full">All Time <ChevronDown size={18} /></Button>
                        </CardTitle>

                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="col-span-2 mr-20">
                                <h2 className="text-5xl font-semibold mb-5">42,000</h2>
                                <p className="text-gray-600">Total cases incompleted compared to last year</p>
                            </div>
                            <Button className="bg-red-400">Decrease 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            <span className="text-gray-800">Completed Cases</span>
                            <Button className="flex justify-between gap-2 bg-gray-300 rounded-full">All Time <ChevronDown size={18} /></Button>
                        </CardTitle>

                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="col-span-2 mr-20">
                                <h2 className="text-5xl font-semibold mb-5">42,000</h2>
                                <p className="text-gray-600">Total cases completed compared to last year</p>
                            </div>
                            <Button className="bg-green-600">Increase 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-800 mb-2">Completed Cases</p>
                            <p className="text-lg font-normal text-gray-600">Provide a monthly breakdown of total cases</p>
                        </div>

                        <div className="flex gap-2">
                            <Button className="flex justify-between gap-2 bg-gray-300 rounded-full">All case types <ChevronDown size={18} /></Button>
                            <Button className="flex justify-between gap-2 bg-gray-300 rounded-full">Open case <ChevronDown size={18} /></Button>
                            <Button className="flex justify-between gap-2 bg-gray-300 rounded-full">2024 <ChevronDown size={18} /></Button>
                        </div>
                    </CardTitle>

                </CardHeader>
                <CardContent>
                    <CaseAnalyticsChart />
                </CardContent>
            </Card>

            <Card>
                <CardHeader />

                <CardContent>
                    <CaseTable />
                </CardContent>
            </Card>

        </div>
    )
}

export default Dashboard