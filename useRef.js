import React,{useRef} from 'react';
export default function App(){
    const saiRef=useRef(null);
    const handleChange=()=>{
        saiRef.current. focus();
        saiRef.current.value="saikishore"
}
    return(
        <div>
            <input ref={saiRef} />
            <button onClick={handleChange}>Click</button>
        </div>
    )
}