import { useState } from 'react';

const Form = ({
  submit
}) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
      e.preventDefault();
      console.log('the form value', value);
      submit(value);
      setValue('');
  }
    return (
        <div className="form-container">
            <form className="form-mint" onSubmit={e => handleSubmit(e)}>
                <label>
                    <span>Link to image</span>
                    <input 
                        value={value}
                        onChange={e =>setValue(e.target.value)}
                        type="text"
                        name="kryptoText"                        />
                </label>
                <button className="form-button" type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;
