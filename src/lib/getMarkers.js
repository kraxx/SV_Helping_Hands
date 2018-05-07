export default function  getVisibleMarkers(markers, categoryFilters, searchFilters) {
    let filterMarkers = markers;
    for (let filter in categoryFilters) {
        if (!categoryFilters[filter].value) {
            filterMarkers = filterMarkers.filter(
                f => f.tag !== categoryFilters[filter].key
            )
        }
    }
    if (searchFilters.searchFilterOn === true) {
        let target = searchFilters.filterText.toLowerCase()
        filterMarkers = filterMarkers.filter(
            f =>
                (f.address.toLowerCase().includes(target) ||
                f.company.toLowerCase().includes(target) ||
                f.description.toLowerCase().includes(target))
        )
    }
    return filterMarkers;
}
