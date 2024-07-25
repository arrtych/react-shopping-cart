export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function round(value: number) {
  return Number(value.toFixed(2));
}

export const getAmount = (amount?: number) => {
  return amount ?? 0;
};
