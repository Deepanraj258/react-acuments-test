import React , {useReducer} from "react"
import {Card , Button, CardBody ,CardHeader} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  function reducer(state,action){
    switch(action.type){
      case'DEPOSIT':
      return{
        ...state,
        total: state.total + action.payload
      }

  
      case'WITHDRAW':
      return{
        ...state,
        total: state.total - action.payload,
         
      }

      case'DONATE_ALL':
      return{
        ...state,
        total: state.total - state.total
      }

  
  default:
  return state;
    }
  }
  const initialState = {
    total:0
    
  }
   const [state,dispatch] = useReducer(reducer,initialState)
  return(
   <Card className='container'>
   <CardHeader>Acuments Bank</CardHeader>
   <CardBody>
   <Button className ='secondary mr-2' onClick={()=> dispatch({type: 'DEPOSIT',payload:10000})}> {''}Deposit </Button>
  <Button className='danger mr-2' onClick={()=> state.total <= 0?'' :dispatch({type: 'WITHDRAW',payload:10000})}>{''} Withdraw </Button>
  <Button className='success' onClick={()=> dispatch({type: 'DONATE_ALL'})}>Donate All</Button>
  <p>Your Total Balance is {state.total}</p>
   </CardBody>
   </Card>
  )

}
export default App
