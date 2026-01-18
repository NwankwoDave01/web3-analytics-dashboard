export const summary = {
  portfolioBalance: 12430.23,
  performance7d: 870.45,
  performancePct: 7.8,
  recentTransactionsCount: 23,
};

export const allocation = [
  { name: "Ethereum", value: 55 },
  { name: "USDC", value: 20 },
  { name: "Bitcoin", value: 15 },
  { name: "Other", value: 10 },
];

export const performance = [
  { day: "Mon", value: 560 },
  { day: "Tue", value: 590 },
  { day: "Wed", value: 610 },
  { day: "Thu", value: 640 },
  { day: "Fri", value: 690 },
  { day: "Sat", value: 720 },
  { day: "Sun", value: 760 },
];

export const transactions = [
  { tx: "Swapped 0.2 ETH → USDC", type: "Swap", amount: -2290.5, date: "Apr 23, 2024" },
  { tx: "Received USDC", type: "Receive", amount: 620, date: "Apr 23, 2024" },
  { tx: "Bought MATIC", type: "Buy", amount: -875.3, date: "Apr 22, 2024" },
  { tx: "Swapped USDC → ETH", type: "Swap", amount: -850, date: "Apr 22, 2024" },
  { tx: "Bridged WETH to Arbitrum", type: "Bridge", amount: -630.15, date: "Apr 22, 2024" },
];
