import React, { useState } from "react";
import Button from "./Components/Button";

function App() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [incorrect, setIncorrect] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [disable, setDisable] = useState(true);

    const inactive = () => {
        setDisable(user === '' || pass === '')
    }

    const validateData = (e) => {
        e.preventDefault()
        if (user === 'ADL' && pass === '252525') {
            setCorrect(true);
            setTimeout(() => {
                setCorrect(false);
            }, 2000)
        } else if (user !== 'ADL' || pass !== '252525') {
            setIncorrect(true);
            setTimeout(() => {
                setIncorrect(false)
            }, 2000);
            return
        } else {
            setUser('');
            setPass('');
        }
    }

    return (
        <div className="App">
            <h1 className="text-center">Formulario React</h1>
            <div>
                <form onSubmit={validateData}>
                    {incorrect ? <p className="incorrect text-center">Los datos son incorrectos!</p> : null}
                    <div className="mb-3">
                        <label className="form-label fw-bold fs-5" htmlFor="user">Usuario</label>
                        <input type="text" value={user} className="form-control" id="user" 
                        onChange={(e) => {
                                            setUser(e.target.value) 
                                            inactive()}}/>                                                          
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold fs-5" htmlFor="pass">Contraseña
                        </label>
                        <input type="password" value={pass} className="form-control" id="pass" 
                        onChange={(e) => { 
                                            setPass(e.target.value)
                                            inactive()}} />
                    </div>
                    <Button disable={disable} text="Iniciar sesión" />
                    {correct ? <p className="correct text-center">Has iniciado sesión correctamente</p> : null} 
                </form>
            </div>
        </div>
    );
}

export default App;
