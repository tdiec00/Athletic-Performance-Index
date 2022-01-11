

const NewForm = ({ input, handleInput, handleSubmit, handleBodyInput }) => {

  const { name, description, bodyPart } = input;

  return (
    
    <>
      <label>Choose a body part</label>
      <br />
      <select id="bodyPart" value={bodyPart} onChange={handleBodyInput}>
        <option>List of body Parts</option>
        <option>Bicep</option>
        <option>Tricep</option>
        <option>Legs</option>
        <option>Chest</option>
        <option>Shoulder</option>
        <option>Back</option>
      </select>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name of exercise</label>
        <br />
        <input
          id="name"
          value={name}
          onChange={handleInput}
        ></input>
        <br />
        <label>Description of exercise</label>
        <br />
        <input
          id="description"
          value={description}
          onChange={handleInput}
        ></input>
        <br />
        <button>Submit</button>
      </form>
    </>
    
  )
};
export default NewForm
