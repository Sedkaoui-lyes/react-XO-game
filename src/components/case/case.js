import './case.css';
import {useState} from 'react'

const Case =(props)=>{
    const {setvalues, values, item, current, setCurrent} = props

    const changeValue = () => {
        if (!values[item]) {
            if (current === 'X') {
                const newValues = [...values];
                newValues[item] = 'X'
                setvalues(newValues)
                setCurrent('O')
            }
            if (current === 'O') {
                const newValues = [...values];
                newValues[item] = 'O'
                setvalues(newValues)
                setCurrent('X')
            }
        }
    }
    return(

        <div onClick={changeValue}
             className={'g-case'}>
            {values && values[item] && (
                <span>{values[item]}</span>
            )}
        </div>


    )
}
export default Case;