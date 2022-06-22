import './TabataForm.css';
import react, {useState} from 'react';

const TabataForm = (props) => {
    const [round, setRound] = useState(0);
    const [work, setWork] = useState(0);
    const [rest, setRest] = useState(0);

    const runHandler = () => {
        alert(round + ':' + work + ':' + rest);
    };

    const roundChangeHandler = (event) =>{
        setRound(event.target.value);
    };

    const workChangeHandler = (event) =>{
        setWork(event.target.value);
    };

    const restChangeHandler = (event) =>{
        setRest(event.target.value);
    };

    return (
        <div>
            <div>
                <label for="round">Round:</label>
                <input type="number" id="round" onChange={roundChangeHandler} />
                Times
            </div>
            <div>
                <label for="work">Work(sec):</label>
                <input type="number" id="work" onChange={workChangeHandler} />
            </div>
            <div>
                <label for="rest">Rest(sec):</label>
                <input type="number" id="rest" onChange={restChangeHandler} />
            </div>
            <button type="button" onClick={runHandler}>run</button>
        </div>
    );
};

export default TabataForm;