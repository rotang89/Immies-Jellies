const range = Array(27).fill().map((x,i) => i+1)

console.log(range)

export const photos = range.map(x => {
  return (
    {
      src: `gallery/photo${x}.jpg`,
      width: 1,
      height: 1
    }
  )
})