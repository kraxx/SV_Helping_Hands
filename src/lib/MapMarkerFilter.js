export default getVisibleMarkers = (markers, filters) => {
  var filterMarkers = markers
  for (var filter of filters) {
    // console.log("-----")
    // console.log(filter)
    if (!filter.value) {
      filterMarkers = filterMarkers.filter(f => f.type !== filter.key)
    }
  }
  return filterMarkers
}