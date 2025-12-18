import { motion } from "framer-motion";
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ageData = [
  { name: "18-24", value: 53 },
  { name: "25-34", value: 38 },
  { name: "35-44", value: 7 },
  { name: "Other", value: 2 },
];

const geoData = [
  { name: "USA", value: 75 },
  { name: "Canada", value: 10 },
  { name: "UK", value: 8 },
  { name: "India", value: 7 },
];

const COLORS = ["#2952FF", "#5C7CFF", "#8FA6FF", "#C2D0FF"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 shadow-lg">
        <p className="font-mono text-sm font-bold">{`${label ? label : payload[0].name} : ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

export const AudienceCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12">
      {/* Age Distribution */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="border border-border p-6 md:p-8"
      >
        <h3 className="text-lg md:text-xl font-bold mb-6 font-mono uppercase tracking-wider">Age Distribution</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={ageData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{ fontFamily: 'JetBrains Mono', fontSize: '12px', paddingTop: '20px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 text-sm text-muted-foreground border-l-2 border-primary pl-4">
          <span className="font-bold text-foreground">53% Gen Z</span> dominance signals high adaptability to new tech.
        </div>
      </motion.div>

      {/* Geography */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="border border-border p-6 md:p-8"
      >
        <h3 className="text-lg md:text-xl font-bold mb-6 font-mono uppercase tracking-wider">Top Geographies</h3>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={geoData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis 
                dataKey="name" 
                type="category" 
                tick={{ fontFamily: 'JetBrains Mono', fontSize: 12 }} 
                width={60}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#2952FF" barSize={20} radius={[0, 4, 4, 0]}>
                {geoData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#2952FF' : '#E5E5E5'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 text-sm text-muted-foreground border-l-2 border-primary pl-4">
          <span className="font-bold text-foreground">75% US Audience</span> ensures high purchasing power parity (PPP).
        </div>
      </motion.div>
    </div>
  );
};
