import { useState } from 'react'
import Record from './record'
import { product, category } from './data'

function App() {
  const [data, setData] = useState(product)

  const filterbtn = (category) => {
    console.log(category);
    if (category === 'all') {
      setData(product)
    }
    else {
      let finalData = product.filter((p) => {
        return (
          p.category === category
        )
      })
      setData(finalData)
    }
  }
  return (
    <>
      <Record category={category} product={data} filterbtn={filterbtn} />
    </>
  )
}

export default App
