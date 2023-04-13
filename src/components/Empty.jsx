import { useEffect } from 'react'
import molehill from './embedded/molehill.png'

const RAND_DEFAULT = 5000
const RAND_MINIMUM = 1000

export default function Empty({ setIsShowing }) {

    useEffect(() => {
        let randMilliseconds = Math.ceil(Math.random() * RAND_DEFAULT + RAND_MINIMUM)
        let timer = setTimeout(() => {
            setIsShowing(true)
        }, randMilliseconds)

        return () => clearTimeout(timer)
    });

    return (
        <div>
            <img
                src={molehill}
                style={{ 'width': '30vw' }}
            />
        </div>
    )
}