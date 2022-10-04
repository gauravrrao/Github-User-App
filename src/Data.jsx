import React, { useState, useEffect } from 'react'
import './data.css'


const Data = () => {


  const [items, setitems] = useState([])


  let getuser = async () => {
    let data = await fetch("https://api.github.com/users")

    let response = await data.json()
    setitems(response)
    console.log(response)
  }

  useEffect(() => {
    getuser()
  }, [])





  return (
    <>

      {
        items.map((cur) => {
          return(
          
            
            <div className="container">
            <div className="image">
              <img src={cur.avatar_url} className='img' />
            </div>
            <div className="box">
              <h2>{cur.login}</h2>
              <p>Web Developer</p>
              <div className="box2">
                <div className="inner-box">
                  <p>follower</p>
                  <p>86</p>
                </div>
                <div className="inner-box">
                  <p>following</p>
                  <p>500</p>
                </div>
                <div className="inner-box">
                  <p>Rating</p>
                  <p>2.8</p>
                </div>
              </div>
            </div>
          </div>
        
          )
      })
       
      }
    </>
  )
}

export default Data