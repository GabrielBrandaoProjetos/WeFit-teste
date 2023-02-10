
import * as Styled from './styles';

interface ButtonProps{
  text: string, 
  color?: string, 
  width?: string, 
  children?: React.ReactNode
  onClick?: () => {}
}

export const Button: React.FC<ButtonProps> = (props) => {
  
  return(
    <Styled.Container>
      <button onClick={props.onClick} style={{ width: props.width}}>
        {props.children}
        {props.text}
      </button>
    </Styled.Container>
  )
}