import React from 'react'

const Menu = () => {
    return (
        <div className=''>

            <ul className='flex gap-3 justify-center py-4 text-white'>
                <a href="">
                    <li className='uppercase text-[0.85rem] bgHover font-bold'>Menu</li>
                </a>
                <a href="">
                    <li className='uppercase text-[0.85rem] bgHover font-bold'>The Game</li>
                </a>
                <a href="">
                    <li className='uppercase text-[0.85rem] bgHover font-bold'>News</li>
                </a>
                <a href="">
                    <li className='uppercase text-[0.85rem] bgHover font-bold'>Forum</li>
                </a>
                <a href="">
                    <li className='uppercase text-[0.85rem] bgHover font-bold'>Support</li>
                </a>
                <a href="">
                    <li className='uppercase text-[0.85rem] bgHover font-bold'>Game map</li>
                </a>
                <a href="">
                    <li className='uppercase text-[0.85rem] bgHover font-bold'>jobs</li>
                </a>

            </ul>
        </div>
    )
}

export default Menu