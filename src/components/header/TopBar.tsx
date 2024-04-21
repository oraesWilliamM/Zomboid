import React from 'react'
import { Reddit, Steam, Facebook, Twitter, Youtube, Discord } from '../../Icons'


const TopBar = ({ }) => {
    return (
        <div>
            <div className="flex justify-between container m-auto items-center py-2">
                <div className="flex gap-2 text-[10px]">
                    <p className='text-[#999999]'>Stable Build: 41.78.16 <span className='text-white'>|</span></p>
                    <p className='text-[#999999]'>IWBUMS Beta: 41.78.16 <span className='text-white'>|</span></p>
                    <p className='text-white'>Version History <span>|</span></p>
                    <p className='text-white'>Wiki</p>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="text-[10px]">Follow us</span>
                    <a href="/"><Reddit /></a>
                    <a href="/"><Steam /></a>
                    <a href="/"><Facebook /></a>
                    <a href="/"><Twitter /></a>
                    <a href="/"><Youtube /></a>
                    <a href="/"><Discord /></a>

                </div>
                
            </div>

        </div>
    )
}




export default TopBar