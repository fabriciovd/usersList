export default function AddButton({
    onClick

}) {
    return(
        <>
            <button className="btn-add btn" onClick={onClick}>Add new user</button>
        </>
    )
}