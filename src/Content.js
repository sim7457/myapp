import { useState } from "react";
import './common.css';

const Content = ({ name }) => {
    const [num, setNum] = useState(0);
    const [on, setOn] = useState('');
    // let num = 0;

    const toggleOn = () => { }

    return (
        <div className="content">
            {console.log(name, num)}
            <span>{name} {num} </span>
            <button onClick={() => setNum(num + 1)}>Click</button>
            {/* btn.addEventListner('click', ()=> fn()) */}
        </div>
    )
}

export default Content;