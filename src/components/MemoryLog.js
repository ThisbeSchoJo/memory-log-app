//Main component that will hold everything


import { v4 as uuid } from "uuid";
import { useState } from "react";

function NewPetForm({addPet}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      // id: uuid(),
      ...formData,
      likes: 0
    }

    // addPet(newPet)

    fetch("http://localhost:4000/pets", {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMemory) //newMemory has the info we want to send to the server
    })
    .then(response => {
      if(response.ok) {
        response.json().then(newMemoryData => addMemory(newMemoryData))
      }
      else {
        alert("Error: Unable to add new memory!")
      }
    })

    
    setFormData({
      memory: "",
      year: "",
      image: ""
    })
  }

  return (
    <div className="new-memory-form">
      <h2>New Memory</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="memory" placeholder="Memory" value={formData.memory} required/>
        <input onChange={updateFormData} type="text" name="year" placeholder="Year" value={formData.year} required/>
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
        <button type="submit">Add Memory</button>
      </form>
    </div>
  );
}
  
  export default MemoryLog;