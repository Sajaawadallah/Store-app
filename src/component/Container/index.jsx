import React from 'react'
import './style.css'

const Container = ({ children }) => {
    return (
        <div className='main__container'>
            {children}
        </div>
    )
}

export default Container
