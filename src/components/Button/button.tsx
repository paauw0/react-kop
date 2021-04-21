import React from 'react'
import classNames from 'classnames'

// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }

// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }

export type ButtonSize = 'lg' | 'sm'

export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps {
    /**
     * className
     */
    className?: string;
    /** 设置 Button 的禁用 */
    disabled?: boolean;
    /** 设置 Button 的尺寸 */
    size?: ButtonSize;
    /** 设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/** 
 * Description of prop "Button component" (a custom btnType).
 */
const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
    } = props
    // btn, btn-lg, btn-primary
    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
    })
    if (btnType === 'link' && href) {
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>
        )
    }
}

Button.defaultProps = {
    /**
     * Checks if the button should be disabled
     */
    disabled: false,
    /**
    The btnType content of the button
    */
    btnType: 'default'
}

export default Button;