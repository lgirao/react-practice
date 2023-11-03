function handleFormSubmit(evt) {
    // Prevents page refresh
    evt.preventDefault();
    console.log("SUBMITTED THE FORM");
}

export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    );
}