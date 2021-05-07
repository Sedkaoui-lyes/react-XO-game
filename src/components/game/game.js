import { Card, Container } from '@material-ui/core';
import Case from '../case/case';
import './game.css';
import {useEffect, useState} from 'react';
import Swal from 'sweetalert2'

const Game =()=>{

    const initab = ['','','','','','','','','',]
    const [values, setvalues] = useState(initab)
    const [current, setCurrent] = useState('X')
    useEffect(() => {
        checkWinner();
    }, [current])

    const checkWinner = () => {
        const winner = current === 'X' ? 'O' : 'X';
        const iswinner =
            values[0] === winner && values[1] == winner && values[2] === winner ||
            values[3] === winner && values[4] == winner && values[5] === winner ||
            values[6] === winner && values[7] == winner && values[8] === winner ||
            values[0] === winner && values[3] == winner && values[6] === winner ||
            values[1] === winner && values[4] == winner && values[7] === winner ||
            values[2] === winner && values[5] == winner && values[8] === winner ||
            values[0] === winner && values[4] == winner && values[8] === winner ||
            values[2] === winner && values[4] == winner && values[6] === winner;
        if (iswinner) {
            Swal.fire(winner + ' IS THE WINNER', '', 'success')
                .then(ok => {
                    if (ok.isConfirmed) {
                        setvalues(initab)
                    }
                })
        }
    }
    return (

        <div className={'g-container'}>
            <div className={'g-head'}>
                <span className={'text-1'}>X-O GAME</span>
                <span className={'text-2'}>{current} TURN</span>    
            </div>
            <div>
                <Card className={'g-card'}>
                    <Case item={0} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>  
                    <Case item={1} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>
                    <Case item={2} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>
                    <Case item={3} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>
                    <Case item={4} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>
                    <Case item={5} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>
                    <Case item={6} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>
                    <Case item={7} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>
                    <Case item={8} current={current} setCurrent={setCurrent} values={values} setvalues={setvalues}/>
                </Card>

            </div>



        </div>



    )
}
export default Game;