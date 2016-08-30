const incomplete = R.filter(R.whereEq({complete: false}));
const sortByDate = R.sortBy(R.prop('dueDate'));
const sortByDateDescend = R.compose(R.reverse, sortByDate);
const importantFields = R.project(['title', 'dueDate']);
const groupByUser = R.groupBy(R.prop('username'));
const activeByUser = R.compose(groupByUser, incomplete);
const gloss = R.compose(importantFields, R.take(5), sortByDateDescend);
const topData = R.compose(gloss, incomplete);
const topDataAllUsers = R.compose(R.map(gloss), activeByUser);
const byUser = R.useWith(R.filter, [R.propEq("username")]);

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

topData(byUser("Scott", tasks))
topDataAllUsers(tasks)
