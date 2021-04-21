import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
declare type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | React.ReactElement;
    append?: string | React.ReactElement;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
