export const MIN_WALLET_BALANCE = 1;

export const canStartConsultation = (balance?: number | null) => {
  const numericBalance = Number(balance ?? 0);
  return Number.isFinite(numericBalance) && numericBalance >= MIN_WALLET_BALANCE;
};
