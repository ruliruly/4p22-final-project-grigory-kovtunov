import React from 'react';
import './input.css';
import PropTypes from 'prop-types';

export default class input extends React.Component {
    static defaultProps = {       //Изначально формируется в this.props только потом применяет
        name: '',                 //те props которые были переданны.Если они не переданны отобр-
        id:'',                    //ет то, что в static. Так же не будет и undefined если элемент
        type:'',                  //не передали. 
        placeholder: 'PLACEHOLDER' 
    }

    static propTypes = {                 
         name: PropTypes.string, 
         id: PropTypes.string,
         type: PropTypes.string,
         placeholder: PropTypes.string
    }

    render() {
   const { name, id, type, placeholder} = this.props;   //  Деструктуризация объекта 
        return (                                        // Что бы не писать их в атрибутах.
            <input className="CommonInput"              // name={this.props.name} 
                   name={ name }       //зизс как указатель на экземрляр текущего класса
                   id={ id }           //и свойство props унаследованное от Riact.Component.
                   type={ type }
                   placeholder={ placeholder } />
        )
    }
}
 