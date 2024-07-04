import React, { useState } from 'react';
import {
  // CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
  TooltipProps,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { Payload } from "recharts/types/component/DefaultLegendContent";

declare type MyTooltip<MyValue extends ValueType, MyName extends NameType> =
  TooltipProps<MyValue, MyName> & {
    external: { chartWidth: number };
  };

interface LegendProps {
  payload?: Payload[];
}

const data01 = [
  {
    "name": "Case A",
    "value": 400
  },
  {
    "name": "Case B",
    "value": 300
  },
  {
    "name": "Case C",
    "value": 300
  },
  {
    "name": "Case D",
    "value": 200
  },
];
const data02 = [
  {
    "name": "Case A",
    "value": 2400
  },
  {
    "name": "Case B",
    "value": 4567
  },
  {
    "name": "Case C",
    "value": 1398
  },
  {
    "name": "Case D",
    "value": 9800
  },
];

const colorsForData01 = ['#8AC268', '#A5D886', '#C7E5B5', '#DAF1CC'];
const colorsForData02 = ['#F47878', '#F58E8E', '#FFAEAE', '#FFD3D3'];

const CustomTooltip: React.FC<MyTooltip<ValueType, NameType>> = ({ active, payload }) => {
  if (active && payload && payload.length) {

    return (
      <div className="backdrop-blur rounded-3xl p-6 w-[150px] shadow-lg relative">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex flex-col items-center justify-center mb-[20px]">
            <p className="font-semibold text-center mb-[20px]">{`Tags of ${entry.name}`}</p>
            <p className="text-2xl">{`${entry.value}`}</p>
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
              style={{ backgroundColor: entry.color }} />
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
      <div className='flex flex-col sm:flex-row h-full items-center justify-between'>
        <PieChart width={900} height={300}>
          <Tooltip content={<CustomTooltip external={{ chartWidth }} />} />
          <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50}
            outerRadius={90} fill="#8AC268">
            {
              data01.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colorsForData01[index % colorsForData01.length]} />
              ))
            }
          </Pie>
          <Legend content={<CustomLegendIcon />} />

        </PieChart>
        <PieChart width={900} height={300}>
          <Tooltip content={<CustomTooltip external={{ chartWidth }} />} />
          <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#F47878" innerRadius={50}
            outerRadius={90} >
            {
              data02.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colorsForData02[index % colorsForData02.length]} />
              ))
            }
          </Pie>
          <Legend content={<CustomLegendIcon />} />
        </PieChart>
      </div>

    </ResponsiveContainer>
  );
}

export default CaseAnalyticsChart;
