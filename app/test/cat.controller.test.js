const { add, subtract, multiply } = require('../controllers/cat.controller');

test('Create a Cat', async () => {
    expect(add(5, 5)).toStrictEqual(10)
    expect(add(100, 200)).toStrictEqual(300)
})