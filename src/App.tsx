import React, {useRef} from 'react'

function App() {
    const refInput: React.LegacyRef<HTMLInputElement> = useRef(null)
    const refHeading: React.LegacyRef<HTMLHeadingElement> = useRef(null)
    const refLink: React.LegacyRef<HTMLAnchorElement> = useRef(null)

    const formSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        
        console.log(refInput.current? refInput.current.style.backgroundColor = "red" : null);
        
        console.log(refHeading.current.style.color = "orange");
        console.log(refHeading.current.textContent = "orange");
        console.log(refLink.current.textContent)
        console.log(refLink.current.href)
        
    }
    return (
        <div>
            <h1 ref={refHeading}>Formulár</h1>
            <form onSubmit={formSubmit}>
                <input type="text" ref={refInput}/>
                <input type="submit" />
            </form>
            <a href="https://www.google.com" ref={refLink}>GOOGLE</a>
        </div>
    );
}

export default App;
