import {useSelector} from 'react-redux'
import Alert from 'react-bootstrap/Alert';
const AffErr = () => {
    const errrrrr = useSelector(state=> state.ErrorReducer)
  return (
    <div>
        {
            errrrrr.map((el,i,t)=> 
              <Alert  variant="danger">
         {el.msg}
        </Alert>)
        }
    </div>
  )
}

export default AffErr