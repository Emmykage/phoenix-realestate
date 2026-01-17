
const moneyFormat = (amount, currency = "GBP") => {
  try {
    const curr = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency,
      currencyDisplay: "narrowSymbol",
    });

    return curr.format(amount);
  } catch (error) {
    return `${currency?.toUpperCase()} ${amount?.toFixed(2) ?? "0.00"}`;
  }
};

export { moneyFormat };