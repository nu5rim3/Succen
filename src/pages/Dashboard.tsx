import CaseAnalyticsChart from "@/components/custom/CaseAnalyticsChart"
import CaseTable from "@/components/custom/CaseTable"
import {DropSelect} from "@/components/custom/DropSelect"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {FileBarChart} from "lucide-react"
import AnimatedNumbers from "react-animated-numbers";
import YearPicker from "@/components/custom/YearPicker.tsx";
import {useEffect, useState} from "react";
import {CASE_STATUSES} from "@/lib/constants.ts";
import {fetchCaseTypes} from "@/services/dashboard/dashboard.service.ts";

const Dashboard = () => {
    const [caseTypes, setCaseTypes] = useState<TSelectListType[]>([])
    const [chartFilters, setChartFilters] = useState({
        caseType: "all",
        status: "Pending",
        year: "all"
    })

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

    useEffect(() => {
        console.log({chartFilters})
    }, [chartFilters]);
    return (
        <div className="flex justify-center flex-col gap-10">
            {/* Must hide some times */}
            <div className="text-center animate-fade-up animate-duration-[2000ms] animate-delay-0">
                <h1 className="text-5xl font-normal">Hello Jonathan 👋</h1>
                <h1 className="text-4xl font-light">Here is your case analytics</h1>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-3 gap-5">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>Total Cases</CardTitle>
                            <YearPicker/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="w-full sm:col-span-2 mr-20">
                                <h2 className="text-5xl font-normal mb-5">
                                    <AnimatedNumbers
                                        includeComma
                                        transitions={(index) => ({
                                            type: "spring",
                                            duration: index + 0.7,
                                        })}
                                        animateToNumber={42000}

                                    />
                                </h2>

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
                            <YearPicker/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="w-full sm:col-span-2 mr-20">
                                <h2 className="text-5xl font-normal mb-5">
                                    <AnimatedNumbers
                                        includeComma
                                        transitions={(index) => ({
                                            type: "spring",
                                            duration: index + 0.7,
                                        })}
                                        animateToNumber={12940}

                                    />
                                </h2>
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
                            <YearPicker/>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <div className="w-full sm:col-span-2 mr-20">
                                <h2 className="text-5xl font-normal mb-5">
                                    <AnimatedNumbers
                                        includeComma
                                        transitions={(index) => ({
                                            type: "spring",
                                            duration: index + 0.7,
                                        })}
                                        animateToNumber={29060}

                                    />
                                </h2>
                                <p className="text-gray-600 mb-2">Total cases completed compared to last year</p>
                            </div>
                            <Button className="bg-green-600 hover:bg-green-500">Increase 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <Card className="bg-gray-100 dark:bg-gray-800">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex flex-row gap-3 items-center">
                            <div className="rounded-full bg-white dark:bg-gray-700 p-3"><FileBarChart/></div>
                            <CardTitle className="flex flex-col">Completed Cases
                                <p className="text-base font-normal text-gray-600">Total cases recevied compared to last
                                    year</p>
                            </CardTitle>

                        </div>

                        <div className="flex flex-shrink-0 gap-2">
                            <DropSelect className="bg-white flex-1 w-[140px]" placeHolder="All Cases"
                                        value={caseTypes[0]?.value}
                                        itemList={caseTypes}
                                        onChange={(e) => {
                                            console.log(e)
                                            setChartFilters(prevState => (
                                                {
                                                    ...prevState,
                                                    caseType: e
                                                }
                                            ))
                                        }}
                            />
                            <DropSelect className="bg-white flex-1 w-[140px]" placeHolder="Pending" value="Pending"
                                        itemList={CASE_STATUSES}
                                        onChange={(e) => {
                                            console.log(e)
                                            setChartFilters(prevState => (
                                                {
                                                    ...prevState,
                                                    status: e
                                                }
                                            ))
                                        }}
                            />
                            <YearPicker className="bg-white flex-1 w-[130px]"
                                        onChange={(e) => {
                                            console.log(e)
                                            setChartFilters(prevState => (
                                                {
                                                    ...prevState,
                                                    year: e
                                                }
                                            ))
                                        }}
                            />
                        </div>
                    </div>

                </CardHeader>
                <CardContent>
                    <CaseAnalyticsChart/>
                </CardContent>
            </Card>

            <Card className="bg-gray-100 dark:bg-gray-800">
                <CardHeader/>

                <CardContent>
                    <CaseTable caseTypes={caseTypes}/>
                </CardContent>
            </Card>

        </div>
    )
}

export default Dashboard