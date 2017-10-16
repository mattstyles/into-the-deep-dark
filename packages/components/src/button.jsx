
import oc from 'open-color'

const Button = ({children, onClick}) => (
  <button className='Btn' onClick={onClick}>
    {children}
    <style jsx>{`
      .Btn {
        background: ${oc.blue[5]};
        color: ${oc.white};
        padding: 0 3rem;
        font-size: 1.4rem;
        line-height: 3;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 150ms;
      }
      .Btn:hover {
        background: ${oc.blue[7]};
        text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
      }
      .Btn:active {
        background: ${oc.blue[8]};
      }
    `}</style>
  </button>
)

export default Button
