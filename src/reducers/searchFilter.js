const initialState = {
    searchFilterOn: false,
    filterText: '',
}

const searchFilter = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_FILTER_ON':
            return {
                searchFilterOn: true,
                filterText: action.text
            }
        case 'SEARCH_FILTER_OFF':
            return {
                searchFilterOn: false,
                filterText: ''
            }
        default:
            return state
    }
}

export default searchFilter
