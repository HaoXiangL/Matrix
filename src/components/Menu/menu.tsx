import React, { useState, createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './menuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties; //react中style的类型
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
  menuName?:string;
}

//context接口
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

//创建context
export const MenuContext = createContext<IMenuContext>({ index: '0' });

const Menu: React.FC<MenuProps> = ({
  className,
  mode,
  style,
  children,
  defaultIndex,
  onSelect,
  defaultOpenSubMenus,
  menuName,
}) => {
  // 选择Menu 中active的state
  const [currentActive, setCurrentActive] = useState(defaultIndex);

  //添加类
  const classes = classNames('matrix-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });

  // 判断点击事件的active state
  const handleClick = (index: string) => {
    setCurrentActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  //传输的context
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  //循环props.children里的reactNode
  const renderChildren = () => {
    // 循环操作所有子组件
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 借助React.cloneElement帮全部子组件加入props.index
        return React.cloneElement(childElement, {
          index: `${index}`,
        });
      } else {
        console.error(
          'Waring: Menu has a child which is not a MenuItem component',
        );
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <span className='menuName'>
      {menuName}
      </span>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};
export default Menu;
