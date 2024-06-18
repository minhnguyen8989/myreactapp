function ListGroup() {

    const items = ['item1', 'item2', 'item3'];

    return (
        <>
            <h1>My List Group</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item" key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </>

    )
};

// Suggested code may be subject to a license. Learn more: ~LicenseLog:140244218.
export default ListGroup;