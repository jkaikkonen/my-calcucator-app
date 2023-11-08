import { ACTTIONS } from "./App"

export default function OperationButton( {dispatch, operation}) {
    return (
         <button onClick={ () => dispatch ({type: ACTTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
     {digit}
     </button>
    )
}