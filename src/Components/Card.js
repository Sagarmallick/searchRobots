import React from 'react';
import 'tachyons';
const Card = ({name,id,email}) =>{
    return(
        <div className='tc br3 dib bg-light-green ma2 pa3 bw2 grow shadow-5'>
        <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
export default Card;