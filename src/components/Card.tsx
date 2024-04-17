interface Props {
    image?: string;
    link: string;
}

const Card = (
    { image = "https://projectzomboid.com/blog/content/themes/rw-project-zomboid/assets/images/logo.png",
        link = "/william" }: Props) => {
    return (
        <div className="flex justify-center">
            <a href={link}>
                <img src={image} alt="" />
            </a>
        </div>
    )
}

export default Card