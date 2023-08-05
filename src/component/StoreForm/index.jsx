import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './style.css'

const FORMARRAY = [
    {
        id: "name",
        name: "name",
        type: "text",
        label: "Name",
    },
    {
        id: "cities",
        name: "cities",
        type: "text",
        label: "Cities",
    }
]

const StoreForm = ({ stores, handelsubmit, islodaing }) => {

    console.log(stores)
    const [store, setStore] = useState({
        name: " ",
        cities: " ",

    })
    const [isgetfirstdata, setIsgetfirstdata] = useState(true)


    useEffect(() => {

        if (stores && isgetfirstdata) {

            setStore({
                name: stores.name,
                cities: stores.cities
            })
            setIsgetfirstdata(false)

        }


    },
        [stores, isgetfirstdata]
    )


    const handelSubmit = (e) => {
        console.log(store, 'saja')
        e.preventDefault()
        const data = {
            name: store.name,
            cities: store.cities
        }

        handelsubmit(data)
    }


    const handelChange = (e) => {
        const { id, value } = e.target;
        setStore((prevState) => ({
            ...prevState,
            [id]: value
        }));
    }









    return (


        <form onSubmit={handelSubmit}>
            {FORMARRAY.map((item) => (
                <div key={item.id}>
                    <label htmlFor={item.id}>{item.label}</label>
                    <input type={item.type} id={item.id} name={item.name} value={store[item.id]} onChange={handelChange} />
                </div>
            ))}

            <button type='submit'>
                {islodaing ? 'loading...' : 'submit'}
            </button>
        </form>
    )
}

export default StoreForm





