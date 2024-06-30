import React, {useState} from 'react';
import {
  BarChart, Bar, XAxis, YAxis,
  // CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import {ValueType, NameType} from 'recharts/types/component/DefaultTooltipContent';
import {Payload} from "recharts/types/component/DefaultLegendContent";

declare type MyTooltip<MyValue extends ValueType, MyName extends NameType> =
  TooltipProps<MyValue, MyName> & {
  external: { chartWidth: number };
};

interface LegendProps {
  payload?: Payload[];
}

interface DataItem {
  year: string;
  month: string;
  CaseA: number;
  CaseB: number;
  CaseC: number;
  CaseD: number;
}

const data: DataItem[] = [
  {year: '2024', month: 'Jan', CaseA: 40, CaseB: 30, CaseC: 20, CaseD: 10},
  {year: '2024', month: 'Feb', CaseA: 30, CaseB: 20, CaseC: 40, CaseD: 10},
  {year: '2024', month: 'Mar', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 40},
  {year: '2024', month: 'Apr', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 50},
  {year: '2024', month: 'May', CaseA: 20, CaseB: 30, CaseC: 80, CaseD: 40},
  {year: '2024', month: 'Jun', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 40},
  {year: '2024', month: 'Jul', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 20},
  {year: '2024', month: 'Aug', CaseA: 20, CaseB: 30, CaseC: 40, CaseD: 40},
  {year: '2024', month: 'Sep', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 60},
  {year: '2024', month: 'Oct', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 40},
  {year: '2024', month: 'Nov', CaseA: 20, CaseB: 30, CaseC: 10, CaseD: 40},
  {year: '2024', month: 'Dec', CaseA: 50, CaseB: 40, CaseC: 30, CaseD: 20},
];

const CustomTooltip: React.FC<MyTooltip<ValueType, NameType>> = ({active, payload, label, coordinate, external}) => {
  if (active && payload && payload.length) {
    const chartWidth = external.chartWidth;
    const tooltipWidth = 195; // Tooltip width
    const isLeft = (coordinate?.x || 0) + tooltipWidth > chartWidth;
    return (
      <div className="bg-white dark:bg-gray-700 p-6 w-[195px] shadow-lg relative">
        {isLeft ? (
          <div className="w-0 h-0 absolute top-1/4 -right-[12px]
                                border-t-[10px] border-t-transparent
                                border-l-[15px] border-l-white
                                border-b-[10px] border-b-transparent">
          </div>
        ) : (
          <div className="w-0 h-0 absolute top-1/4 -left-[12px]
                                border-t-[10px] border-t-transparent
                                border-r-[15px] border-r-white
                                border-b-[10px] border-b-transparent">
          </div>
        )}
        <p className="font-semibold mb-[20px]">{`${label}, ${payload?.[0]?.payload?.year}`}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between mb-[20px]">

            <div
              className="rounded-full w-[20px] h-[20px] flex items-center justify-center after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-white"
              style={{backgroundColor: entry.color}}/>
            <p className="text-sm">{`${entry.name}`}</p>
            <p className="text-sm">{`${entry.value}`}</p>

          </div>
        ))}
      </div>
    );
  }

  return null;
};

const CustomLegendIcon: React.FC<LegendProps> = (payload) => {

  return (
    <ul className="flex items-center justify-center gap-[72px] mt-8">
      {
        payload?.payload?.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center gap-[12px]">
            <div
              className="rounded-full w-[20px] h-[20px] flex items-center justify-center after:content-[''] after:w-1 after:h-1 after:rounded-full after:bg-white"
              style={{backgroundColor: entry.color}}/>
            <span>{entry.value}</span>
          </li>
        ))
      }
    </ul>
  )
};

const CaseAnalyticsChart: React.FC = () => {
  const [chartWidth, setChartWidth] = useState(0)
  return (
    <ResponsiveContainer width="100%" height={400} onResize={(width) => setChartWidth(width)}>
      <BarChart
        data={data}
        barCategoryGap="60px"
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" className="stroke-current text-gray-200" /> */}
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 14}} tickSize={16}/>
        <YAxis className="stroke-current text-gray-600" axisLine={false} tickLine={false} tick={{fontSize: 14}}
               tickSize={48}/>
        <Tooltip content={<CustomTooltip external={{chartWidth}}/>}/>
        <Legend content={<CustomLegendIcon/>}/>
        <Bar dataKey="CaseA" stackId="a" fill='#000080' radius={0} barSize={48}/>
        <Bar dataKey="CaseB" stackId="a" fill='#3535D1' radius={0} barSize={48}/>
        <Bar dataKey="CaseC" stackId="a" fill='#7D7DEA' radius={0} barSize={48}/>
        <Bar dataKey="CaseD" stackId="a" fill='#BFBFE9' radius={0} barSize={48}/>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CaseAnalyticsChart;
