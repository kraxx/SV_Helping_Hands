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

function settings(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_SWITCH':
            var newState = {}
            newState.selected = state.selected.map(setting =>
            (setting.key === action.id)
            ? {...setting, value: !setting.value}
            : setting)
            return newState
        default:
            return state
    }
}

export default settings
