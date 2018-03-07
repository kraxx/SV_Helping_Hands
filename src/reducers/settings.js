const initialState = {
    selected: [
        {
            key: "Food",
            value: true,
        },
        {
            key: "Clothing",
            value: true,
        },
        {
            key: "Health",
            value: true,
        },
        {
            key: "Shelter",
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