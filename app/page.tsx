"use client";

import { allocation, performance, summary, transactions } from "./data/mock";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
} from "recharts";

const COLORS = ["#6C8CFF", "#34D399", "#FBBF24", "#A78BFA"]; // if you want, we can remove custom colors later

function formatMoney(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 rounded-2xl bg-[#0F1624] p-5 border border-white/5">
            <div className="text-lg font-semibold">Web3 Analytics</div>
            <div className="mt-6 space-y-2 text-white/80">
              {["Dashboard", "Wallet Analytics", "Tokens", "Settings"].map((item) => (
                <div
                  key={item}
                  className={`rounded-xl px-4 py-3 hover:bg-white/5 cursor-pointer ${
                    item === "Dashboard" ? "bg-white/5 text-white" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          {/* Main */}
          <main className="col-span-12 md:col-span-9 space-y-6">
            <header className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Dashboard</h1>
              <div className="text-sm text-white/70">Dark Mode</div>
            </header>

            {/* Top cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Portfolio Balance">
                <div className="text-2xl font-semibold">{formatMoney(summary.portfolioBalance)}</div>
                <div className="text-sm text-emerald-400 mt-1">+{summary.performancePct}%</div>
              </Card>
              <Card title="7d Performance">
                <div className="text-2xl font-semibold">+{formatMoney(summary.performance7d)}</div>
                <div className="text-sm text-emerald-400 mt-1">last 7 days</div>
              </Card>
              <Card title="Recent Activity">
                <div className="text-2xl font-semibold">{summary.recentTransactionsCount}</div>
                <div className="text-sm text-white/60 mt-1">transactions</div>
              </Card>
            </section>

            {/* Charts */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Token Allocation">
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={allocation} dataKey="value" innerRadius={55} outerRadius={80}>
                        {allocation.map((_, idx) => (
                          <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-white/70">
                  {allocation.map((a) => (
                    <div key={a.name} className="flex justify-between">
                      <span>{a.name}</span>
                      <span>{a.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card title="Portfolio Performance">
                <div className="h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performance}>
                      <XAxis dataKey="day" stroke="rgba(255,255,255,0.35)" />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#6C8CFF" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </section>

            {/* Table */}
            <Card title="Recent Transactions">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-white/60">
                    <tr className="border-b border-white/10">
                      <th className="py-3 text-left font-medium">Transaction</th>
                      <th className="py-3 text-left font-medium">Type</th>
                      <th className="py-3 text-right font-medium">Amount</th>
                      <th className="py-3 text-right font-medium">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((t, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="py-3">{t.tx}</td>
                        <td className="py-3 text-white/70">{t.type}</td>
                        <td className={`py-3 text-right ${t.amount >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                          {t.amount >= 0 ? "+" : "-"}
                          {formatMoney(Math.abs(t.amount))}
                        </td>
                        <td className="py-3 text-right text-white/60">{t.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-[#0F1624] p-5 border border-white/5">
      <div className="text-sm text-white/70 mb-3">{title}</div>
      {children}
    </div>
  );
}
