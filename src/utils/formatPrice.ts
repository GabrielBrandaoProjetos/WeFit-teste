
export function formatPrice(price: number){
  const priceReal = price.toFixed(2).toString().split(".")[0]
  const priceCents = price.toFixed(2).toString().split(".")[1]

  return `${priceReal},${priceCents}`
}