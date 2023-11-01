function Property({name, rating, price}) {
    return (
        <li>
            <h2>{name}</h2>
            <h3>${price} a night</h3>
            <h4>{rating} ⭐</h4>
        </li>
    )
}

export default Property;