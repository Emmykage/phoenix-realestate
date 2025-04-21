
const moneyFormat = (amount, currency = "USD") => {
  try {
    const curr = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: currency,
      currencyDisplay: "narrowSymbol",
    });

    return curr.format(amount);
  } catch (error) {
    console.error(`Invalid currency code: ${currency}. Defaulting to NGN.`);
    return `${currency?.toUpperCase()} ${amount?.toFixed(2) ?? "0.00"}`;
  }
};

export { moneyFormat };