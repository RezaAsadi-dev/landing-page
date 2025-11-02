import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingUp } from "lucide-react";

const accuracyData = [
  {
    name: "ایده آل",
    nameEn: "Ideal",
    value: 92,
    color: "#60a5fa", // blue-400
    description: "دقت بسیار بالا در شرایط ایده آل (داده های باکیفیت، لهجه استاندارد)"
  },
  {
    name: "متوسط",
    nameEn: "Average",
    value: 83,
    color: "#22d3ee", // cyan-400
    description: "دقت خوب در شرایط متوسط (داده های با کیفیت متوسط لهجه های مختلف)"
  },
  {
    name: "چالش‌برانگیز",
    nameEn: "Challenging",
    value: 75,
    color: "#2dd4bf", // teal-400
    description: "دقت پایینتر در شرایط چالش برانگیز (نویز زیاد کیفیت پایین داده)"
  }
];

export default function AccuracySection() {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 mt-20 sm:p-6 md:p-8 relative">
      <div className="max-w-6xl w-full space-y-6 sm:space-y-8 px-2 sm:px-4">
        <div className="text-center space-y-2 sm:space-y-3 md:space-y-4 transition-transform duration-300 mb-[20px]">
          <p className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] text-black" >نمودار دقت FarsiFlow</p>
          <p className="-mt-1 sm:-mt-2 text-[#d8d8d8] tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-xs sm:text-sm md:text-base">FARSIFLOW ACCURACY CHART FOR PERSIAN LANGUAGE </p>
        </div>

        <div className="  p-5 sm:p-6 md:p-8 lg:p-12  transition-transform duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            {/* Chart Section */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-600 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-slate-700">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white" dir="rtl">نمایش نموداری دقت</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={accuracyData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                    <XAxis
                      type="number"
                      domain={[0, 100]}
                      tick={{ fill: "#fff", fontSize: 12 }}
                      axisLine={{ stroke: "#64748b" }}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fill: "#fff", fontSize: 12 }}
                      axisLine={{ stroke: "#64748b" }}
                      width={80}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(15, 23, 42, 0.9)",
                        border: "1px solid #475569",
                        borderRadius: "8px",
                        color: "#fff"
                      }}
                      formatter={(value: number) => [
                        `${value}%`,
                        "دقت"
                      ]}
                      labelFormatter={(label) => label}
                    />
                    <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                      {accuracyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Info Cards Section */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
             
              {accuracyData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 md:p-6 bg-gray-600 rounded-lg sm:rounded-xl border transition-all duration-300 hover:scale-[1.02]"
                  style={{ borderColor: `${item.color}40` }}
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-base sm:text-lg font-semibold text-white" dir="rtl">
                        {item.name}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: item.color }}>
                      {item.value}%
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-white text-right leading-relaxed" dir="rtl">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-200 mt-1">{item.nameEn}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


