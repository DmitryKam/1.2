import React from 'react';

type MyButtonPropsType = {
    className: string
    name:string
    onClick: ()=> void
}


function MyButton(props:MyButtonPropsType) {

    return(
        <div>
             <button
                 className={props.className}
                 onClick={props.onClick}
             >{props.name}</button>
        </div>
    )

}

export default MyButton;