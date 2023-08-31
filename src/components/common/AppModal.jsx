import { useEffect, useState } from "react";

const  AppModal = (props)=> {
    
    const {close, title, text} = props
    const [isClose, setIsClose] = useState(false)

    useEffect(()=>{
        setIsClose(close)
    },[close, isClose])

    return(
        <div className={`app-modal-wrapper ${isClose && 'd-none'}`}>
            <div className='app-modal card w-25 position-absolute top p-3 d-non'>
                <div className="header d-flex pb-3 justify-content-between border-bottom">
                    <h3>{title}</h3>
                    <button className='btn btn-danger'>X</button>
                </div>
                <p className='py-3'>
                    {text}
                </p>
                <div className="action d-flex justify-content-between border-top pt-3 mt-2">
                    <button className='btn btn-danger'>cancel</button>
                    <button className='btn btn-dark'>Save</button>
                </div>
            </div>
        </div>
    )
}
export default AppModal;