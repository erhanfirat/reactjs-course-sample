import { useRef, useEffect, useState } from 'react';

const GreetingsFunction = (props) => {
    const [name, setName] = useState("");
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    })

    const inputChangeHandler = (event) => {
        setName(event.target.value);
    };

    return <div className='text-end'>
        <p>Merhaba {name ? name : "Anonim"}</p>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Username" value={name} ref={inputRef} onChange={(e) => inputChangeHandler(e)} />
        </div>
    </div>

}

export default GreetingsFunction;