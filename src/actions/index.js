export const toggleSwitch = id => {
    return {
        type: 'TOGGLE_SWITCH',
        id
    }
}

export const regionChange = region => {
    return {
        type: 'REGION_CHANGE',
        region
    }
}

export const searchFilterOn = text => {
    return {
        type: 'SEARCH_FILTER_ON',
        text
    }
}

export const searchFilterOff = () => {
    return {
        type: 'SEARCH_FILTER_OFF'
    }
}