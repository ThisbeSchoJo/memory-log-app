//Component for entering new memories
import {useState} from 'react'

function NewMemoryForm() {

    const [formData, setFormData] = useState({
      memory: "",
      date: "",
      image: ""
    })
  
}

export default NewMemoryForm;