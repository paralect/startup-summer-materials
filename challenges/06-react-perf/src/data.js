import R from 'ramda';
import Chance from 'chance';

const rand = Chance();

const now = Date.now();

const data = R.times(() => ({
    _id: rand.guid(),
    firstName: rand.first(),
    lastName: rand.last(),
    text: rand.paragraph(),
    counter: 0,
    activity: R.times(i => ({
        time: now + i * 60000,
        count: rand.integer({
            min: 0,
            max: 100
        })
    }))(1000)
}))(500);

export default data;
