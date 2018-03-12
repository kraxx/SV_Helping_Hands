export default function  getVisibleMarkers(markers, filters) {
    let filterMarkers = markers;
    for (let filter in filters) {
        if (!filters[filter].value) {
            filterMarkers = filterMarkers.filter(f => f.type !== filters[filter].key)
        }
    }
    return filterMarkers;
}
