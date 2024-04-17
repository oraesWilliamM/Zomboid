import React from 'react'

interface Props {
    title?: string;
    subtitle?: string;
    hasPrice?: boolean;
    price?: string;
    hasSocials?: boolean;
    socials?: string;
    hasIconLeft?: boolean;
    iconLeft?: string;
    color: string;


}

const Socials = ({ title, subtitle, hasPrice, price, hasSocials, socials, hasIconLeft, iconLeft, color }: Props) => {
    return (
        <div className={`bg-[${color}]`}>
            <h2>{title}</h2>
            {hasPrice ? <p>{price}</p> : null}
            {subtitle ? <h3>{subtitle}</h3> : null}
            {hasSocials ? <img src={socials} alt={title} /> : null}
            {hasIconLeft ? <img src={iconLeft} alt={title} /> : null}
        </div>
    )
}

export default Socials