import React, { useState} from 'react';


const Trail = ( {name,price,onShowProduct,onCalculateTotal})=>
{
  const [items,setItems]=useState(0);

  const buy=()=>
  {
    setItems(items+1);
    onCalculateTotal(price);
  }
  const pr =
  {
    padding: "20px",
  };
  return(
   <div style={pr}>
     <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={buy}>Add</button>
      <button onClick={()=>onShowProduct(name)}>View</button>
      <p>InCart : {items}</p>
      <hr/>
   </div>
  )
}
const Total=({totalCash})=>
{
    const pr = {
        padding:"20px",
    
    }
  return(
  <div style={pr}>
    <h2>Total : {totalCash} </h2>
  </div>
  )
}
const ProductList=()=>
  {
  const [total,setTotal]=useState(0);
  const calculateTotal= (price)=>
  {
    setTotal(total+price);
  }
  const ShowProduct=(name)=>
  {
    alert("Viweing : "+name);
  };
    return(
    <div>
      <Trail name="Android" price={80}
      onShowProduct={ShowProduct}
      onCalculateTotal={calculateTotal} />
      <Trail name="Apple" price={100}
      onShowProduct={ShowProduct}
      onCalculateTotal={calculateTotal}  />
      <Trail name="Pixel" price={110}
      onShowProduct={ShowProduct}
      onCalculateTotal={calculateTotal}/>
    <Total totalCash={total}/>
    </div>
    )
  }


export default ProductList;