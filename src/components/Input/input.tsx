import React from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | React.ReactElement;
    append?: string | React.ReactElement;
    onChange? : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
    // 取出各种属性
    const {
        disabled,
        size,
        icon,
        prepend,
        append,
        style,
        ...restProps
    } = props

    // 根据属性计算不同的 className
    const cnames = classNames('kop-input-wrapper', {
        [`input-size-${size}`]: size,
        'is-disabled': disabled,
        'input-group': prepend || append,
        'input-group-append': !!append,
        'input-group-prepend': !!prepend
    })

    // 非受控组件转换受控组件错误处理
    const fixControlledValue = (value: any) => {
        if (typeof value === 'undefined' || value === null) {
            return ''
        }
        return value
    }

    // value 和 defaultValu 不共存
    if ('value' in props) {
        delete restProps.defaultValue
        restProps.value = fixControlledValue(props.value)
    }

    return (
        // 根据属性判断是否要添加特定的节点
        <div className={cnames} style={style}>
            {prepend && <div className="kop-input-group-prepend">{prepend}</div>}
            {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`}/></div>}
            <input 
                className="kop-input-inner"
                disabled={disabled}
                {...restProps}
            />
            {append && <div className="kop-input-group-append">{append}</div>}
        </div>
    )
}

export default Input