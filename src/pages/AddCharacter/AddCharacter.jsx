import { useState, useRef, useEffect  } from "react"

//!Returning A Form

function AddCharacter(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)

  const [formData, setFormData] = useState({
    name: 'enter name',
    description: 'enter description',
    image: 'image url',
  })

  useEffect(()=>{
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  },[formData])

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]:evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddCharacter(formData)
  }

	return (
		<>
			<h1>Add Character</h1>
			<form autoComplete="off" ref ={formElement}
      onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Character's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange = {handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="description-input" className="form-label">
						Description (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="description-input"
						name="description"
            value={formData.description}
            onChange = {handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="image-input" className="form-label">
						Image
					</label>
					<input 
						type="text"
						className="form-control"
						id="image-input"
						name="image"
            value={formData.image}
            onChange = {handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled = {!validForm}
					>
						Add Character
					</button>
				</div>
			</form>
		</>
	)
}

export default AddCharacter