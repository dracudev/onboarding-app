export function Card({ title, description, bgColor, image, nextStep }) {
    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={nextStep}>Next Step</button>
        </>
    )
}