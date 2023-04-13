import { useEffect } from 'react'
import mole from './embedded/mole.png'

const RAND_DEFAULT = 5000
const RAND_MINIMUM = 1000

export default function Mole({ onMoleClick, setIsShowing }) {
    useEffect(() => {
        let randMilliseconds = Math.ceil(Math.random() * RAND_DEFAULT + RAND_MINIMUM)
        let timer = setTimeout(() => {
            setIsShowing(false)
        }, randMilliseconds)

        return () => clearTimeout(timer)
    });

    return (
        <div>
            <img
                src={mole}
                style={{ 'width': '30vw' }}
                onClick={onMoleClick}
            />
        </div>
    )
}