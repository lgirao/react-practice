// function handleMouseOver() {
//     console.log("HOVERED OVER ME")
// }

// function handleClick() {
//     console.log("CLICKED THE BUTTON");
// }

function Clicker({message, buttonText}) {
    // function handleClick() {
    //     alert(message);
    // }

    return (
        <div>
            <button onClick={() => alert(message)}>{buttonText}</button>
        </div>
        // <div>
        //     <p onMouseOver={handleMouseOver}>Hover Over Me</p>
        //     <button onClick={handleClick}>Click</button>
        // </div>
    );
}

export default Clicker;