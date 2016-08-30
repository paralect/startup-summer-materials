const incomplete = v => v.filter(item => item.complete === false);
const sortByDate = v => v.slice(0).sort((a, b) => a.dueDate === b.dueDate ? 0 : a.dueDate < b.dueDate ? -1 : 1);
const sortByDateDescend = v => sortByDate(v).reverse();
const importantFields = v => v.map(item => ({ title: item.title, dueDate: item.dueDate }));
const groupByUser = v => v.reduce((result, item) => {
    if (result[item.username]) {
        result[item.username].push(item);
        return result;
    }
    result[item.username] = [item];
    return result;
}, {});
const activeByUser = v => groupByUser(incomplete(v));
const gloss = v => importantFields(sortByDateDescend(v).slice(0, 5))
const topData = v => gloss(incomplete(v));
const topDataAllUsers = v => activeByUser(v).map(gloss);
const byUser = (v, username) => v.filter(item => item.username === username);

const tasks = [
    {username: 'Michael', title: 'Curry stray functions', dueDate: '2014-05-06',
               complete: true, effort: 'low', priority: 'low'},
    {username: 'Scott', title: 'Add `fork` function', dueDate: '2014-05-14',
               complete: true, effort: 'low', priority: 'low'},
    {username: 'Michael', title: 'Write intro doc', dueDate: '2014-05-16',
               complete: true, effort: 'low', priority: 'low'},
    {username: 'Michael', title: 'Add modulo function', dueDate: '2014-05-17',
               complete: false, effort: 'low', priority: 'low'},
    {username: 'Michael', title: 'Separating generators', dueDate: '2014-05-24',
               complete: false, effort: 'medium', priority: 'medium'},
    {username: 'Scott', title: 'Fold algebra branch back in', dueDate: '2014-06-01',
               complete: false, effort: 'low', priority: 'low'},
    {username: 'Scott', title: 'Fix `and`/`or`/`not`', dueDate: '2014-06-05',
               complete: false, effort: 'low', priority: 'low'},
    {username: 'Michael', title: 'Types infrastucture', dueDate: '2014-06-06',
               complete: false, effort: 'medium', priority: 'high'},
    {username: 'Scott', title: 'Add `mapObj`', dueDate: '2014-06-09',
               complete: false, effort: 'low', priority: 'medium'},
    {username: 'Scott', title: 'Write using doc', dueDate: '2014-06-11',
               complete: false, effort: 'medium', priority: 'high'},
    {username: 'Michael', title: 'Finish algebraic types', dueDate: '2014-06-15',
               complete: false, effort: 'high', priority: 'high'},
    {username: 'Scott', title: 'Determine versioning scheme', dueDate: '2014-06-15',
                complete: false, effort: 'low', priority: 'medium'},
    {username: 'Michael', title: 'Integrate types with main code', dueDate: '2014-06-22',
               complete: false, effort: 'medium', priority: 'high'},
    {username: 'Richard', title: 'API documentation', dueDate: '2014-06-22',
               complete: false, effort: 'high', priority: 'medium'},
    {username: 'Scott', title: 'Complete build system', dueDate: '2014-06-22',
               complete: false, effort: 'medium', priority: 'high'},
    {username: 'Richard', title: 'Overview documentation', dueDate: '2014-06-25',
               complete: false, effort: 'medium', priority: 'high'}
];

topData(byUser(tasks, "Scott"))
topDataAllUsers(tasks)
