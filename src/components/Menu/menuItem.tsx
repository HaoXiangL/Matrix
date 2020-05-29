import React,{useContext} from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem:React.FC<MenuItemProps> = ({index,disabled,className,style,children}) => {
  //获取context
  const context = useContext(MenuContext)

  const classes = classNames('menu-item',className,{
    'is-disabled':disabled,
    //defaultIndex(从context中传入)和index比较
    'is-active': context.index === index
  })

  const handleClick = () => {
    if(context.onSelect && !disabled && (typeof index === 'string')){
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem
