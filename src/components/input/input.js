import React from 'react';
import './input.css';
//import PropTypes from 'prop-types';

export default class input extends React.Component {
    static defaultProps = {       
        name: '',                 
        id:'',                   
        type:'',                  
        placeholder:'' 
    }

    // static propTypes = {                 
    //      name: PropTypes.string,
    //      id: PropTypes.string,
    //      type: PropTypes.string,
    //      placeholder: PropTypes.string
    // }
    render() {
      const { name, id, type, placeholder} = this.props;
        return (                                        
            <input className="common-input"              
                   name={ name }       
                   id={ id }           
                   type={ type }
                   placeholder={ placeholder } />
        )
    }
};
