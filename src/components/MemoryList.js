//Component to display all memories
import MemoryItem from "./MemoryItem"

function MemoryList({ memories }) {

    const memoryComponents = memories.map(memory => {
        return <MemoryItem key={memory.id} memory={memory}/>
    })

    return (
        <ul className="memory-list">{memoryComponents}</ul>
    );
}

export default MemoryList;
