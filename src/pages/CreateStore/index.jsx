
import React, { useState } from 'react'
import axios from 'axios'

import StoreForm from '../../component/StoreForm'
import { Navigate } from 'react-router-dom'





const CreateStore = () => {
    const [isloading, setisloading] = useState(true)
    const [isGoToListPage, setIsGoToListPage] = useState(false)
    const [isnotfound, setIsnotfound] = useState(false)



    const handelCreate = async (body) => {
        try {
            await axios.post(`https://some-data.onrender.com/stores`, body)
            setIsGoToListPage(true)

        } catch (e) {
            console.log(e.message)
            setIsnotfound(true)
        }
        finally {
            setisloading(false)
        }


    }
    return (
        <>
            <h1>Edit Store </h1>

            <StoreForm handelsubmit={handelCreate} islodaing={isloading} />
            {isGoToListPage && <Navigate to={"/"} />}
            {isnotfound && <Navigate to={"NotFound"} replace />}

        </>
    )
}



export default CreateStore




