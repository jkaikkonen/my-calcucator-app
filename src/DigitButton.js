import { ACTTIONS } from "./App"

export default function DigitButton( {dispatch, digit}) {
    return (
         <button onClick={ () => dispatch ({type: ACTTIONS.ADD_DIGIT, payload: { digit } })}
    >
     {digit}
     </button>
    )
}