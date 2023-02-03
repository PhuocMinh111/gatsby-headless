export const currencyFormat = (number: number, isPayment: boolean) => {
  return isPayment
    ? new Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD"
      }).format(number)
    : number;
};
