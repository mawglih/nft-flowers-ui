import { useState } from 'react';

const Form = ({
  submit
}) => {
  const [value, setValue] = useState('');
    return (
        <div className="form-container">
            <form className="form-mint" onSubmit={e => submit(e)}>
                <label>
                    <span>Input text for minting</span>
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
