
import React, { useEffect, useState } from 'react'
import Table from '../../component/Table'
import { Navigate } from 'react-router-dom'
import './style.css'
import axios from 'axios'






const StoresPage = () => {

    const [stores, setStores] = useState([{}])
    const [isCreating, setIsCreating] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editRow, setEditRow] = useState(null)
    const [rowid, setRowid] = useState(null)
    const [isloading, setIsloading] = useState(true)
    const [isnotfound, setIsnotfound] = useState(false)


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get('https://some-data.onrender.com/stores')
                setStores(res.data)

            }
            catch (e) {
                console.log(e)
                setIsnotfound(true)

            }
            finally {
                setIsloading(false)
            }
        })();

    }, [])



    const handelDelete = (id) => {
        axios.delete(`https://some-data.onrender.com/stores/${id}`)
        setStores(stores.filter((store) => store.id !== id))

    }

    const handleClick = (row) => {
        setRowid(row.id)

    }


    const handelEdit = (id) => {
        console.log(id, "edited")
        setRowid(id)
        setIsEditing(true)
        setEditRow(id)

    }




    const colums = [
        {
            key: 'name',
            title: 'Name',

        },
        {
            key: 'cities',
            title: 'Cities',
            render: (store) => {
                return store.cities.map((city) => city + ' ')
            }
        },

        {
            key: 'actions',
            title: 'Actions',
            render: (store) => {
                return (
                    <div onClick={(e) => e.stopPropagation()}>
                        <button className='edit-btn' onClick={() => handelEdit(store.id)}>Edit</button>
                        <button className='delete-btn' onClick={() => handelDelete(store.id)}>Delete</button>
                    </div>
                )
            }
        }


    ]

    return (

        <div>
            <h1>Hello From Api</h1>
            <button className='create-btn' onClick={() => { setIsCreating(true) }}>Create</button>
            <Table data={stores} columns={colums} isloading={isloading} onrowclicked={handleClick} />
            {isCreating && <Navigate to={"/CreateStore"} replace />}
            {rowid && <Navigate to={`${rowid}`} replace />}
            {isEditing && <Navigate to={`${editRow}/EditStore`} replace />}
            {isnotfound && <Navigate to={"NotFound"} replace />}


        </div>

    )

}


export default StoresPage




