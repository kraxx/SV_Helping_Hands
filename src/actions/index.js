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
