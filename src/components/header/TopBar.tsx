import React from 'react'
import { Reddit, Steam, Facebook, Twitter, Youtube, Discord} from '../../Icons'


const TopBar = ({ }) => {
    return (
        <div>
            <div></div>
            <div>
                <a href="/">
                    <Reddit />
                </a>

                <a href="/">
                    <Steam />
                </a>
                <a href="/">
                    <Facebook />
                </a>
                <a href="/">
                    <Twitter />
                </a>
                <a href="/">
                    <Youtube />
                </a>

                <a href="/">
                    <Discord />
                </a>

            </div>
        </div>
    )
}

export default TopBar