import React from 'react';

type DisplayPropsType = {
    className: string
    incValue: number|string
}


function Display(props:DisplayPropsType) {

    return(
        <div className={props.className}>
           {props.incValue}
        </div>
    )

}

export default Display;