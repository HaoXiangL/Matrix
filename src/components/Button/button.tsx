import React from 'react';
import classNames from 'classnames';

export type ButtonSize = 'lg' | 'sm'

export type ButtonType  = 'primary'|'default'|'danger'|'link'
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
//把button中剩下的props事件，如onclick，拿出来，联合成一个类型，并把这个类型改成组件的props接口
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps =Partial< NativeButtonProps & AnchorButtonProps>

//修改props接口 由BaseButtonProps改成ButtonProps
const Button: React.FC<ButtonProps> = props => {
  //剩余的属性用扩展运算符拿出来
  const { btnType,className, disabled, size, children, href ,...restProps} = props;

  //btn, btn-lg btn-primary 使用classnames库实现多种classname统一
  const classes = classNames('btn',className,{
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  // 如果是Link属性，需要渲染a标签
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
