//Component for each individual memory

function MemoryItem({memory}) {

    return (
        <li className="memory">
            <img src={memory.image} alt={memory.description}/>
            <h4>{memory.description}</h4>
            <div className="button-div">
                <button className="like-button">{memory.likes} Likes</button>
                <button className="delete-button">Delete</button>
            </div>
        </li>
    )
}

export default MemoryItem;