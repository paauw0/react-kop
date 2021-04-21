import { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export declare type ButtonSize = 'lg' | 'sm';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    /** Description of prop "btnType" (a custom btnType). */
    btnType?: ButtonType;
    children: ReactNode;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * The world's most _basic_ button
 */
declare const Button: FC<ButtonProps>;
export default Button;
