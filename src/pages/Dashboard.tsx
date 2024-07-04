import CaseAnalyticsChart from "@/components/custom/CaseAnalyticsChart"
import CaseTable from "@/components/custom/CaseTable"
import { DropSelect } from "@/components/custom/DropSelect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileBarChart, FilePieChart } from "lucide-react"
import AnimatedNumbers from "react-animated-numbers";
import YearPicker from "@/components/custom/YearPicker.tsx";
import { useState } from "react";
import { CASE_TYPES } from "@/lib/constants.ts";
import CreateCaseDialog from "@/components/custom/CreateCaseDialog"

const Dashboard = () => {

    const [openCreate, setOpenCreate] = useState<boolean>(false);

    const toggleDialog = () => {
        setOpenCreate(!openCreate);
    }

    return (
        <div className="flex justify-center flex-col gap-10">
            {/* TODO: Must hide some times */}
            <div className="text-left animate-fade-up animate-duration-[2000ms] animate-delay-0">
                <h1 className="text-5xl font-normal">Hello Allex 👋</h1>
                <h1 className="text-4xl font-light">Welcome to Dashboard</h1>
            </div>
            <div className="flex flex-row gap-3 justify-end">
                <YearPicker className="w-44" />
                <Button className="" variant={'default'} onClick={() => toggleDialog()}>Create New Case</Button>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-3 gap-5">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>Total Case Tags</CardTitle>
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

                                <p className="text-gray-600 mb-2">Total case tags created compared to last year</p>
                            </div>
                            <Button className="bg-green-600 hover:bg-green-500 dark:bg-green-500">Increase 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>Positive Tags</CardTitle>
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
                                <p className="text-gray-600 mb-2">Total positive tags compared to last year</p>
                            </div>
                            <Button className="bg-red-400 hover:bg-red-500 dark:bg-red-500">Decrease 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <CardTitle>Negative Tags</CardTitle>
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
                                <p className="text-gray-600 mb-2">Total negative tags compared to last year</p>
                            </div>
                            <Button className="bg-green-600 hover:bg-green-500 dark:bg-green-500">Increase 5.5%</Button>
                        </div>

                    </CardContent>
                </Card>
            </div>
            <Card className="bg-gray-100">
                <CardHeader>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="flex flex-row gap-3 items-center">
                            <div className="rounded-full bg-white dark:bg-gray-700 p-3"><FilePieChart /></div>
                            <CardTitle className="flex flex-col">Case tags breakdown
                                <p className="text-base font-normal text-gray-600">Provides how many positive and negative tags for each case type</p>
                            </CardTitle>

                        </div>

                        <div className="flex flex-shrink-0 gap-2">
                            <YearPicker className="bg-white flex-1 w-[130px]"
                            />
                            <DropSelect className="bg-white flex-1 w-[200px]" placeHolder="All case type" value="all"
                                itemList={CASE_TYPES}
                            />
                        </div>
                    </div>

                </CardHeader>
                <CardContent>
                    <CaseAnalyticsChart />
                </CardContent>
            </Card>

            <Card className="bg-gray-100">
                <CardHeader>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="rounded-full bg-white dark:bg-gray-700 p-3"><FileBarChart /></div>
                        <CardTitle className="flex flex-col">File cases data
                            <p className="text-base font-normal text-gray-600">Provides how many positive and negative tags for each case type</p>
                        </CardTitle>

                    </div>
                </CardHeader>
                <CardContent>
                    <CaseTable />
                </CardContent>
            </Card>
            <CreateCaseDialog open={openCreate} toggle={toggleDialog} />
        </div>
    )
}

export default Dashboard