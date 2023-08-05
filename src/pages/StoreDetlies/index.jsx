import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router-dom'




const StoreDetlies = () => {
    const [store, setStore] = useState([])
    const [isloading, setisloading] = useState(true)
    const [isnotfound, setIsnotfound] = useState(false)

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`https://some-data.onrender.com/stores/${id}`)
                setStore(res.data)


            }
            catch (err) {
                console.log(err)
                setIsnotfound(true)

            }
            finally {
                setisloading(false)
            }
        })();
    }, [id])


    return (
        <div>
            {!isloading &&

                <div key={id}>
                    <h1>{store.name}</h1>
                    <p>{store.cities?.map(city => city + ' ')}</p>



                </div>

            }

            {isloading && <h1>Loading...</h1>}
            {isnotfound && <Navigate to={"NotFound"} replace />}
        </div>
    )
}

export default StoreDetlies







