import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
    theme? : ThemeProps
}

const Icon: React.FC<IconProps> = (props) => {
    // icon-primary icon-secondary icon-xxx ...
    const { className, theme, ...restProps } = props
    const classes = classNames('kop-icon', className, {
        [`icon-${theme}`]: theme
    })
    return (
        <FontAwesomeIcon className={classes} {...restProps} />
    )
  }
  
export default Icon