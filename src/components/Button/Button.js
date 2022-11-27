import './Button.css';

function Button({children = 'кнопка'}) {             
    return (                           
        <button className='common-button'>{ children }</button> 
    )                                                               
}
export default Button;