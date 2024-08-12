import { useEffect, useState } from "react";

const Casechk = (props) => {
    const [input, setInput] = useState('');
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        
        if (input.length < 5 || /\d/.test(input)) {
            setInvalid(true); 
        } else {
            setInvalid(false); 
        }
    }, [input]); 

    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    return (
        <>
            <br />
            <form>
                <label htmlFor="input">
                    Write something (more than 5 non-numerical characters is a valid input)
                </label>
                <br />
                <input
                    type="text"
                    id="input"
                    autoComplete="off"
                    onChange={inputHandler}
                    value={input} 
                />
            </form>
            <p>
                <span
                    style={{
                        backgroundColor: invalid ? 'lightpink' : 'lightgreen',
                        padding: '1Rem',
                    }}
                >
                    {invalid ? 'Input not valid' : 'Valid input'}
                </span>
            </p>
        </>
    );
};

export default Casechk;
