import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis,
    // CartesianGrid,
    Tooltip, Legend, ResponsiveContainer,
    TooltipProps,
} from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';

interface DataItem {
    month: string;
    CaseA: number;
    CaseB: number;
    CaseC: number;
    CaseD: number;
}

const data: DataItem[] = [
    { month: 'Jan 2024', CaseA: 40, CaseB: 30, CaseC: 20, CaseD: 10 },
    { month: 'Feb 2024', CaseA: 30, CaseB: 20, CaseC: 40, CaseD: 10 },
    { month: 'Mar 2024', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 40 },
    { month: 'Apr 2024', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 50 },
    { month: 'May 2024', CaseA: 20, CaseB: 30, CaseC: 80, CaseD: 40 },
    { month: 'Jun 2024', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 40 },
    { month: 'Jul 2024', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 20 },
    { month: 'Aug 2024', CaseA: 20, CaseB: 30, CaseC: 40, CaseD: 40 },
    { month: 'Sep 2024', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 60 },
    { month: 'Oct 2024', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 40 },
    { month: 'Nov 2024', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 40 },
    { month: 'Dec 2024', CaseA: 50, CaseB: 40, CaseC: 30, CaseD: 20 },
];

const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 rounded shadow-lg">
                <p className="font-semibold">{label}</p>
                {payload.map((entry, index) => (
                    <p key={`item-${index}`} className="text-sm">{`${entry.name}: ${entry.value}`}</p>
                ))}
            </div>
        );
    }

    return null;
};

const CaseAnalyticsChart: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                {/* <CartesianGrid strokeDasharray="3 3" className="stroke-current text-gray-200" /> */}
                <XAxis dataKey="month" className="stroke-current text-gray-600 hidden" />
                <YAxis className="stroke-current text-gray-600 hidden" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                {/* <defs>
                    <linearGradient id="colorCaseA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="95%" stopColor="#000080" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#000080" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorCaseB" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3535D1" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#3535D1" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorCaseC" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7D7DEA" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#7D7DEA" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="colorCaseD" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#BFBFE9" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#BFBFE9" stopOpacity={0.1} />
                    </linearGradient>
                </defs> fill="url(#colorCaseA)"*/}
                <Bar dataKey="CaseA" stackId="a" fill='#000080' radius={0} />
                <Bar dataKey="CaseB" stackId="a" fill='#3535D1' radius={0} />
                <Bar dataKey="CaseC" stackId="a" fill='#7D7DEA' radius={0} />
                <Bar dataKey="CaseD" stackId="a" fill='#BFBFE9' radius={0} />
            </BarChart>
        </ResponsiveContainer>
    );
}

export default CaseAnalyticsChart;
