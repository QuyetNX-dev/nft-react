export const bigNumber = (number) => {
  if (number > 1e9) return `${(number / 1e9).toFixed(2)}B`;
  if (number > 1e6) return `${(number / 1e6).toFixed(2)}M`;
  if (number > 1e3) return `${(number / 1e3).toFixed(2)}K`;
  return `${number.toFixed(2)}M`;
};
