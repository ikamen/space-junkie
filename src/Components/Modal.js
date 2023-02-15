import {createPortal} from 'react-dom';

function Modal(props) {
    return (
        <>
            {props.isOpen && 
                createPortal((
                    <div className='portalOverlay' style={{backgroundImage: `url(${props.starMap})`}}>
                        <p>Modal</p>
                    </div>
                ),document.getElementById('portal'))
            }
        </>
    )
}

export default Modal