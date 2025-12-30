
export const tracking = {
  purchase: (orderId: string, price: number) => {
    console.log(`Order ${orderId} = $${price}`);
  }
};
