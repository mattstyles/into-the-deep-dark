
export const uid = () => {
  return (Math.random() * 10000000)
    .toFixed(0)
    .toString(16)
}
