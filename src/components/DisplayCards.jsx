import React from 'react'
import { NavLink } from 'react-router-dom'
import CardTile from './CardTile'

const DisplayCards = ({ title = "title here", linkText = "link text here", data }) => {
    return (
        <section className='py-5 border-t border-light-300'>
            <div className='flex items-center flex-wrap gap-3 mb-4'>
                <h2 className='text-dark-100 h2-medium capitalize'>{title}</h2>
                <NavLink className="paragraph-medium text-accent-100 underline" to="/">{linkText}</NavLink>
            </div> 
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {data && data.length > 0 && data.map(item => (
                    <CardTile key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default DisplayCards