import Property from "./Property";
import "./PropertyList.css"

function PropertyList({properties}) {
    return (
        <ul className="PropertyList">
            {properties.map((i) => (
                <Property 
                    key={i.id}
                    {...i}
                />
            ))}
        </ul>
    )
}

export default PropertyList;