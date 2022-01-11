import Form from 'react-bootstrap/Form'

const NewForm = ({ input, handleInput, handleSubmit, setBodyPart }) => {
  return (
    <div>
      <Form>
        <Form.Label>Body part</Form.Label>
        <br />
        <select onChange={event => setBodyPart(event.target.value) }>
          <option>Bicep</option>
          <option>Tricep</option>
          <option>Legs</option>
          <option>Chest</option>
          <option>Shoulder</option>
          <option>Back</option>
        </select>
        <br />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Exercise Name</Form.Label>
          <br />
          <Form.Control />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <br />
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <button>Submit</button>
      </Form>
    </div>
  )
};

export default NewForm
