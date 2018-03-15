var food = require('./data/food');
const health = require('./data/health');
const services = require('./data/services');
const shelter = require('./data/shelter');

function compile() {
    let obj = food;
    obj = obj.concat(health);
    obj = obj.concat(services);
    obj = obj.concat(services);
    return obj;
}
const data = compile();
export default data;
