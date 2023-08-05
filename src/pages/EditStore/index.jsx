
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import StoreForm from '../../component/StoreForm'
import { Navigate } from 'react-router-dom'





const EditStore = () => {
    const [store, setStore] = useState()
    const [isloading, setisloading] = useState(true)
    const [isGoToListPage, setIsGoToListPage] = useState(false)
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



    const handelEdit = async (body) => {
        try {
            const { data } = await axios.put(`https://some-data.onrender.com/stores/${id}`, body)
            setStore(data)
            setIsGoToListPage(true)

        } catch (e) {
            console.log(e.message)
        }
        finally {
            setisloading(false)
        }


    }
    return (
        <>
            <h1>Edit Store {id}</h1>

            <StoreForm stores={store} handelsubmit={handelEdit} islodaing={isloading} />
            {isGoToListPage && <Navigate to={"/"} />}
            {isnotfound && <Navigate to={"NotFound"} replace />}

        </>
    )
}



export default EditStore




