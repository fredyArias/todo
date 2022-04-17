import React, { useState } from 'react'
import CreateTaskMenu from './CreateTaskMenu'

export default function PrincipalMenu() {
    const [ option, setoption ] = useState('')

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value
        setoption(inputValue)
    }

    return(
        <>
            {!option && (
                <div className='container'>
                    <section className='menu-section'>
                        <h1>Menú</h1>
                        <p>
                            1. Create Task <br />
                            2. View Tasks <br />
                            3. Exit <br />
                        </p>
                        <label htmlFor="option"><b>Insert:</b></label>
                        <input value={option} type="number" id="option" onChange={handleChange}/>
                    </section>
                </div>
            )}
            {option === '1' && <CreateTaskMenu />}
        </>
    )
}