import React from 'react'

const FilterBar = () => {
    return (
        <div className='flex items-center gap-[15px] py-5'>
            <p className='text-dark-200 paragraph-medium'>Similar:</p>
            <ul className='flex items-center gap-2 md:gap-3 flex-wrap'>
                <li><button className='border border-dark-200 py-[10px] px-5 subtle-medium rounded-md text-dark-200 transition-all duration-300 ease-in-out hover:bg-dark-200 hover:text-light-100'>Frontend</button></li>
                <li><button className='border border-dark-200 py-[10px] px-5 subtle-medium rounded-md text-dark-200 transition-all duration-300 ease-in-out hover:bg-dark-200 hover:text-light-100'>Backend</button></li>
                <li><button className='border border-dark-200 py-[10px] px-5 subtle-medium rounded-md text-dark-200 transition-all duration-300 ease-in-out hover:bg-dark-200 hover:text-light-100'>Graphic Designer</button></li>
            </ul>
        </div>
    )
}

export default FilterBar;