const food = require('./data/food');
const health = require('./data/health');
const services = require('./data/services');
const shelter = require('./data/shelter');

const compile = () => {
    let obj = food;
    obj = obj.concat(health);
    obj = obj.concat(services);
    obj = obj.concat(shelter);
    return obj;
}

export const data = compile();

export const initialRegion = {
    latitude: 37.511360,
    longitude: -122.110966,
    latitudeDelta: 0.0912312,
    longitudeDelta: 0.04,
}
