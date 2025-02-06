//Component for entering new memories
import { useState } from 'react'

function NewMemoryForm({ addMemory }) {

    const [formData, setFormData] = useState({
      memory: "",
      date: "",
      image: ""
    })

    //Updates formData when the user types into an input field
    function updateFormData(event) {
      setFormData({ 
        ...formData, 
        [event.target.name]: event.target.value 
      })
    }

    //Creates a new memory object and sends it to db.json
    function handleSubmit(event) {
      event.preventDefault()

      const newMemory = {
        ...formData,
        likes:0
      }

      fetch("http://localhost:4000/memories", {
        method: "POST",
        headers: {
          "Content-Type" : "application.json",
          "Accept" : "application.json"
        },
        body: JSON.stringify(newMemory)
      })
      .then(response => {
        if (response.ok) {
          response.json().then(newMemoryData => addMemory(newMemoryData))
        } else {
          alert("Error: Unable to add new memory!")
        }
      })

      //Reset form fields:
      setFormData({
        memory: "",
        date: "",
        image: ""
      })
    }
  
    return (
      <div className="new-memory-form">
        <h2>New Memory</h2>
        <form onSubmit={handleSubmit}>
          <input onChange={updateFormData} type="text" name="memory" placeholder="Memory" value={formData.memory} required />
          <input onChange={updateFormData} type="text" name="date" placeholder="Date" value={formData.date} required />
          <input onChange={updateFormData} type="text" name="image" placeholder="Image" value={formData.image} required />
          <button type="submit">Add Memory</button>
        </form>
      </div>
    );
}

export default NewMemoryForm;