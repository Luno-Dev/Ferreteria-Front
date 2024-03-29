import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ReactOwlCarousel from 'react-owl-carousel'
import { useOptions } from '../../context/Hooks'
import { getAllUsersPro } from '../../utils/fetchUser'
import CardUsersPro from './CardUsersPro'

const CarouselUsersPro = () => {

    const [users, setUsers] = useState([]);

    const getData = async () => {

        const data = await getAllUsersPro();
        setUsers(data);
        setLoading(false);
    
    }

    useEffect(() => {
      
     getData();

    }, [])
    
  return (
    <section className="container mb-5">
    <h1 className="text-center m-5 products-title">NUESTROS PROFESIONALES</h1>
    {users && users.length > 0 ?
      <ReactOwlCarousel className='owl-theme h-50' loop margin={11}   {...useOptions}>

        {
          users.map((user) => (
            <div key={uuidv4()} className='item d-flex flex-column justify-content-center align-items-center'>
              <CardUsersPro className="card-orange" user={user}  /* handleClick={handleProductClick} */ /> 
            </div>
          )
          )}
      </ReactOwlCarousel>
       :
      <h2 className="text-center">Sin Profesionales</h2>

    }
    </section>
  )
}

export default CarouselUsersPro