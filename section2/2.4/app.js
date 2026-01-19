const add = (a, b) => {
    return a + b;
};

const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data Received');
        }, 1000);
    });
};

module.exports = { add, fetchData };