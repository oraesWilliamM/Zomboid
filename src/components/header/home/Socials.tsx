import React from 'react'

interface Props {
    title?: string;
    subtitle?: string;
    hasPrice?: boolean;
    price?: number;
    hasSocials?: boolean;
    socials?: string;
    hasIconLeft?: boolean;
    iconLeft?: string;
    color?: string;
    link?: string
}

const Socials = ({ title, subtitle, hasPrice, price, hasSocials, socials, hasIconLeft, iconLeft, color, link }: Props) => {
    const formatedPrice = price?.toLocaleString("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    return (
        <a href={link}>
            <div className={`bg-${color} text-white max-w-[20%]`}>
                <h2 className='text-sm text-center'>{title}</h2>
                <div className='flex items-center gap-3'>
                    <div className=''>
                        {hasIconLeft ? <img src={iconLeft} alt={title} width={50} height={50} /> : null}
                    </div>
                    <div className='text-lg m-auto'>
                        {subtitle ? <h3 className='font-bold '>{subtitle}</h3> : null}
                        {hasPrice ? <p>{formatedPrice}</p> : null}

                    </div>
                </div>
                <div className='flex justify-end'>
                    {hasSocials ? <img className='w-[40px]' src={socials} alt={title} width={100} height={20} /> : null}
                </div>
            </div>
        </a>
    )
}

export default Socials