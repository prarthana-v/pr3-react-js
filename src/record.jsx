import React from 'react'
import './assets/style.css'
const Record = ({ product, category, filterbtn }) => {
  return (
    <div className='body'>
      <div className="container">
        <div className="row " >
          <h1 align="center" className='my-3 text-light bolder'>App store</h1>

          <div className='pt-4 ' align="center">
            {
              category.map((item) => {
                return (
                  <button key={item.id} className='btn btn-secondary mx-3' onClick={() => filterbtn(item.category)}>{item.category}</button>
                )
              })
            }
          </div>
          <div className="d-flex flex-wrap pt-5">
            {
              product.map((item) => {
                //console.log(item);
                return (
                  <div className="col-3 p-3" key={item.id}>
                    <div className="card w-100 h-100" >
                      <div className="image" >
                        <img src={item.img} className="card-img-top" alt="..." />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <a href="#" className="btn btn-secondary">ADD</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Record
