exports.getYears = (req, res) => {
    const startYear = parseInt(req.query.start);
    const endYear = parseInt(req.query.end);
    let years = [];

    for (let year = startYear; year <= endYear; year++) {
        years.push(year);
    }

    res.json(years);
}