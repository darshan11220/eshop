import React from 'react'


let productName = "Product name here";
let productPrice = "$2";
let image_url = 'ape_1.png'

const home = () => {
    return (
        <>
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="./ape_1.png" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{productName}</h5>
    <p className="card-text">{productPrice}</p>
    <a href="#" className="btn btn-primary text-white">Go somewhere</a>
  </div> 
</div>
</div>
<div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{productName}</h5>
    <p className="card-text">{productPrice}</p>
    <a href="#" className="btn btn-primary text-white">Go somewhere</a>
  </div> 
</div>
</div>
<div className="col-md-4">
            <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{productName}</h5>
    <p className="card-text">{productPrice}</p>
    <a href="#" className="btn btn-primary text-white">Go somewhere</a>
  </div> 
</div>
</div>
</div>
</div>
        </>
    )
}

export default home
