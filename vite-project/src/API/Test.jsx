import {useState} from 'react';

function Test(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter</h1>
            <h2>Value {count}</h2>
            <button id="increase" onClick={() => setCount(count+1)}>+</button>
            <button id="deacrease" onClick={() => setCount(count-1)}>-</button>
            <button id="reset" onClick={() => setCount(0)}>reset</button>
        </div>
    )
}


/*
- Hook tất cả các hook
- Component
- Fetch 2 cách api, file
- Redux/ redux - tool kit
- GET,POST, DEL
- Test component bằng thư viện Jest và React Testing Library (RTL)
*/
export default Test