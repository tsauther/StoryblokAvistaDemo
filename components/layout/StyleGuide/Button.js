
const Button = ({blok}) => {
    return (
      <div className={blok.type}>
        <span>{blok.button_text}</span>
      </div>
    )
  }
  
  export default Button