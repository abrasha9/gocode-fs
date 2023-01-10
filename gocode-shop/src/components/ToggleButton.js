import React, {useContext} from 'react'
import { MyContext } from '../MyContext'

const ToggleButton = () => {
    const dataFromContext = useContext(MyContext);

    const toggleTextChanger = () => {
        if (dataFromContext.toggleText === 'hide me!!'){
            dataFromContext.setToggleText('');
        } else {
            dataFromContext.setToggleText('hide me!!');
        }
    }
  return (
    <div>
        <h1>{dataFromContext.toggleText}</h1>
        <button onClick={toggleTextChanger}>CLICK TO REMOVE TEXT</button>  
    </div>
  )
}

export default ToggleButton