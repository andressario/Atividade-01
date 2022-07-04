import "./Button.css"

function Button (props){
    const titulo= props.titulo;
    const subtitulo = props.subtitulo;

    return(
    <div className='botao'>
        <button className='titulo'>
            <p>{titulo}</p>
               {subtitulo}
        </button>
    </div>
    );

}
export default Button;