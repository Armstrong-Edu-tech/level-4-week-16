const { add, fetchData } = require('./app');

test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(6);
});

test('fetches data successfully', async () => {
    const data = await fetchData();
    expect(data).toBe('Data Received');
});