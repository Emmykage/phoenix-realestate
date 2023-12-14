const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const usd_format = (amount) => USD.format(amount);

export { USD, usd_format };
