const Chart = require('../models/chart');

exports.postChartData = (req, res, next) => {
    const chartType = req.body.chartType;
    const value = req.body.value;

    const chart = new Chart({chartType:chartType, value:value});
    return chart.save()
        .then(() => {
            res.status(200).json({
                message: 'chart created successfully'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getChartData = (req, res, next) => {
    Chart.find()
    .then(chart => {
          res.status(200).json({
              data: chart,
              message: 'success'
          });
    })
    .catch(err => console.log(err));
  };

  exports.getBarChartData = (req, res, next) => {
    Chart.find({chartType :'bar'})
    .then(chart => {
          res.status(200).json({
              data: chart,
              message: 'success'
          });
    })
    .catch(err => console.log(err));
  };
