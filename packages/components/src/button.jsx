
const Button = ({children, onClick}) => (
  <button className='Btn' onClick={onClick}>
    {children}

    <style jsx>{`
      .Btn {
        background: rgb(52, 152, 220);
        color: white;
        padding: 0 3rem;
        font-size: 1.4rem;
        line-height: 3;
        border: none;
        border-radius: 4px;
      }
    `}</style>
  </button>
)

export default Button
