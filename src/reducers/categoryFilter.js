const initialState = {
    selected: [
        {
            key: "food",
            value: true,
        },
        {
            key: "services",
            value: true,
        },
        {
            key: "health",
            value: true,
        },
        {
            key: "shelter",
            value: true,
        },
    ],
}

const categoryFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SWITCH':
            let newState = {}
            newState.selected = state.selected.map(setting => {
                if (setting.key === action.id) {
                    return {
                        ...setting,
                        value: !setting.value
                    }
                } else {
                    return setting
                }
            })
            return newState
        default:
            return state
    }
}

export default categoryFilter
