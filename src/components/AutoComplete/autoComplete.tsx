import React, { FC, useState, ChangeEvent, KeyboardEvent, ReactElement, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'

import Transition from '../Transition/transition'

interface DataSourceObject {
    value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    // fetchSuggestions: (str: string) => string[];
    // onSelect?: (item: string) => void;
    // renderOption?: (item: string) => ReactElement;
    // fetchSuggestions: (str: string) => DataSourceType[];
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement;
}


const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        onSelect,
        renderOption,
        value,
        ...restProps
    } = props

    const [ inputValue, setInputValue ] = useState(value as string)
    const [ suggestions, setSuggestions ] = useState<DataSourceType[]>([])
    const [ loading, setLoading ] = useState(false)
    const [ highlightIndex, setHighlightIndex ] = useState(-1)
    const [ showDropdown, setShowDropdown] = useState(false)

    const debouncedValue = useDebounce(inputValue, 500)

    const triggerSearch = useRef(false)
    const componentRef = useRef<HTMLDivElement>(null)

    useClickOutside(componentRef, () => {setSuggestions([])})

    useEffect(() => {
        if (debouncedValue && triggerSearch.current) {
            const results = fetchSuggestions(debouncedValue)
            if (results instanceof Promise) {
                console.log('triggered')
                setLoading(true)
                results.then(data => {
                    setLoading(false)
                    setSuggestions(data)
                    if (data.length > 0) {
                        setShowDropdown(true)
                    }
                })
            } else {
                setSuggestions(results)
                if (results.length > 0) {
                    setShowDropdown(true)
                }
            }
        } else {
            setSuggestions([])
            setShowDropdown(false)
        }
        setHighlightIndex(-1)
    }, [debouncedValue]) // eslint-disable-line
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setInputValue(value)
        triggerSearch.current = true
    }

    const highlight = (index: number) => {
        if (index < 0) index = 0
        if (index >= suggestions.length) index = suggestions.length - 1
        setHighlightIndex(index)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        switch(e.keyCode) {
            case 13:
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex]) 
                }
                break
            case 38:
                highlight(highlightIndex - 1)
                break
            case 40:
                highlight(highlightIndex + 1)
                break
            case 27:
                setShowDropdown(false)
                break
            default:
                break
        }
    }

    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value)
        setSuggestions([])
        setShowDropdown(false)
        if (onSelect) {
            onSelect(item)
        }
        triggerSearch.current = false
    }

    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item) : item.value
    }

    const generateDropdown = () => {
        return (
            <Transition
                in={showDropdown || loading}
                animation="zoom-in-top"
                timeout={300}
                onExited={() => {setSuggestions([])}}
            >
                <ul className="kop-suggestion-list">
                    {loading && <div className="suggstions-loading-icon"><Icon icon="spinner" spin /></div>}
                    {suggestions.map((item, index) => {
                        const classes = classNames('suggestion-item', {
                            'is-active': index === highlightIndex
                        })
                        return (
                            <li key={index} className={classes} onClick={() => {handleSelect(item)}}>
                                {renderTemplate(item)}
                            </li>
                        )
                    })}
                </ul>
            </Transition>
        )
    }

    return (
        <div className="kop-auto-complete" ref={componentRef}>
            <Input
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                {...restProps}
            />
            {suggestions.length > 0 ? generateDropdown() : null}
        </div>
    )
}

export default AutoComplete