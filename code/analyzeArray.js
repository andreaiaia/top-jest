const analyze = (arr) => {
    let tot = 0
    const avg = arr.reduce((tot, current) => tot + current, tot) / arr.length;
    const min = arr.reduce((curr, next) => curr < next ? curr : next);
    const max = arr.reduce((curr, next) => curr > next ? curr : next);

    return {
        average: avg,
        min: min,
        max: max,
        length: arr.length
    };
};

module.exports = analyze;