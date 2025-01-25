interface CardProps {
    title: string;
    description: string;
    image: string;
}

function Card ({title, description, image}: CardProps) {
    return (
        <>
        <div className="card">
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <img src={image} alt='Card image cap' />
            </div>

        </div>
        </>
    )
}

export default Card;