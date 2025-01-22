import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './Fetch.css'


export const Fetch = () => {

    const [products, setProducts] = useState()
    const [search, setSearch] = useState();

    let url = `https://fakestoreapi.com/products`

    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            // console.log(res.data)
            setProducts(res.data)
        })
    },[])

    function handleInput(e){
     setSearch(e.target.value)
    }
console.log(search);
    console.log(products, "products")
    let filterItem;
    if(products){
        filterItem = products.filter((item) =>
            item.title === search
        );
    }
   

    if(search){
        return (
            <>
                     <input type="text" placeholder="Search Products" name='search-item' className='search-input' onChange={handleInput}/>
                     <div className='item-container'>
               
                {
                   filterItem.map((item)=>{
                       return(
                            <div key={item.id} className='item'>
                                  <p className='item-title'>{item.title}</p>
                                  <p>Rs {item.price}</p>
                                  <img src={item.image} alt={item.title} width={"150px"} height={"150px"} />
                             </div>
                             
                       )
                    }) 
                }
        
        
            </div>
        
            </>
          )
    }
    else{
        return (
            <>
                     <input type="text" placeholder="Search Products" name='search-item' className='search-input' onChange={handleInput}/>

                     <div className='item-container'>
               
                {
                   products ? products.map((item)=>{
                       return(
                            <div key={item.id} className='item'>
                                  <p className='item-title'>{item.title}</p>
                                  <p>Rs {item.price}</p>
                                  <img src={item.image} alt={item.title} width={"150px"} height={"150px"} />
                             </div>
                             
                       )
                    }) : "No data found"
                }
        
        
            </div>
        
            </>
          )
    }



}