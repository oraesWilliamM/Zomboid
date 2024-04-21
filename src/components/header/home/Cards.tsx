import Socials from "./Socials";

interface Props {
    title?: string;
    image?: string;
    content?: string;
}
const Cards = ({ title, image, content }: Props) => {
    return (
        <div className="">
            <h2 className="my-5 mx-auto">{title}</h2>
            <img src={image} alt={title} width={385} height={255}/>
            <p className="">{content}</p>
        </div>
    )
}



export default Cards