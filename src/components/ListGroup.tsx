function ListGroup() {

    let items = ['item1', 'item2', 'item3'];

    const getMessage = () => {
        return items.length === 0 && <p>Empty List</p>;
    };


    return (
        <>
            <h1>My List Group</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item} onClick={() =>console.log("item")} >
                        {item}
                    </li>
                ))}
            </ul>
        </>

    )
};

// Suggested code may be subject to a license. Learn more: ~LicenseLog:140244218.
export default ListGroup;