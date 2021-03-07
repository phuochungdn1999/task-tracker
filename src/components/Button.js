import Protypes from 'prop-types';

const Button = ({color,text,onClick}) => {
   

    return (
        <div>
            <button style={{backgroundColor:color}} onClick={onClick} className='btn'>{text}</button>

        </div>
    )
}

Button.defaultProps={
    color:'steelblue'
}

Button.propTypes={
    text:Protypes.string,
    color:Protypes.string,
    onClick:Protypes.func
}

export default Button
