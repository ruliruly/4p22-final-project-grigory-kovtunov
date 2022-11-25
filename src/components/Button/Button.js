import './Button.css';

function Button({children = 'кнопка'}) {             
    return (                           
        <button className='CommonButton'>{ children }</button>//предустановленное свойство props 
    )                                                               //позволяющее втавлять элементы тежлц <>..</>
}
export default Button;