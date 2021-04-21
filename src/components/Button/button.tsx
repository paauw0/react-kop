import React from 'react'
import classNames from 'classnames'
import { SizeType } from '../config-provider/SizeContext'

type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'ghost' | 'link' | 'danger'

type ButtonShape = 'circle' | 'round'

type ButtonHTMLType = 'submit' | 'button' | 'reset'

interface BaseButtonProps {
    /** 设置 Button 的 class */
    className?: string;
    /** 设置 Button 的类型 */
    type?: ButtonType;
    /** 设置 Button 的形状 */
    shape?: ButtonShape;
    /** 设置 Button 的尺寸 */
    size?: SizeType;
    /** 设置 Button 的禁用 */
    disabled?: boolean;
    /** 设置 Button 的背景透明 */
    ghost?: boolean;
    /** 设置 Button 的内容 */
    children?: React.ReactNode;
}

type NativeButtonProps = {
    htmlType?: ButtonHTMLType;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps& Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>

type AnchorButtonProps = {
    href?: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
    const {
        type,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props

    const classes = classNames('kop-btn', className, {
        [`kop-btn-${type}`]: type,
        [`kop-btn-${size}`]: size,
        'disabled': (type === 'link') && disabled
    })

    if (type === 'link' && href) {
        return (
            children
                ?
                    <a
                        className={classes}
                        href={href}
                        {...restProps}
                    >
                        <span>{children}</span>
                    </a>
                :
                    <></>
        )
    } else {
        return (
            children
                ?
                    <button
                        className={classes}
                        disabled={disabled}
                        {...restProps}
                    >
                        <span>{children}</span>
                    </button>
                :
                    <></>
        )
    }
}

Button.defaultProps = {
    // disabled: false,
    // type: 'default'
}

export default Button;