const Color = require('../models/color');
const jsontoxml = require('../utils/json2xml');
const Pages = require('../models/pages');


/**
 * @description function to generate list of colors per page.
 * @param {*} req in query, detailt of format (json or xml) and page
 * @param {*} res response  for the client
 */
function getColors(req, res) {
  const page = new Pages();

  Color.countDocuments().exec((err, total) => {
    page.total_recors = total;
    page.page = !isNaN(req.query.page) ? parseInt(req.query.page) : 1;
    page.total_pages =  page.total_recors / page.page_records
    const skips = page.page_records * (page.page - 1);
    Color.find({}, { '_id': false, '__v': false, 'color': false, 'pantone_value': false }).skip(skips).limit(page.page_records)
      .exec((err, colors) => {
        if (err) {
          res.status(500).send({ error: err })
        } else {
          page.page_records = colors.length;
          let result = {
            pagination: page,
            data: colors,
          };
          if (req.query.format == 'xml') {
            result = jsontoxml(JSON.parse(JSON.stringify(result)), true);
          }
          res.status(200).send(result);
        }
      });
  });
}


/**
 * @description function to generate detail of color.
 * @param {*} req in query, detailt of format (json or xml).
 * @param {*} res response  for the client.
 */
function getColor(req, res) {
  Color.findOne({ 'id': req.params.id }, { '_id': false, '__v': false })
    .exec((err, color) => {
      if (err) {
        res.status(500).send({ error: err })
      } else {
        let result = {
          data: color,
        };
        if (req.query.format == 'xml') {
          result = jsontoxml(JSON.parse(JSON.stringify(result)), false);
        }
        res.status(200).send(result);
      }
    });
}


/**
 * @description function to create a color.
 * @param {*} req in body, data of color.
 * @param {*} res response  for the client.
 */
function CreateColor(req, res) {
  try {
    const DataColor = req.body;
    const NewColor = new Color({
      id: DataColor.id,
      name: DataColor.name,
      year: DataColor.year,
      color: DataColor.color,
      pantone_value: DataColor.pantone_value,
    });

    NewColor.save((err, colortored) => {
      if (err) {
        res.status(500).send({ error: err })
      } else {
        res.status(201).send({
          message: 'Successful color creation',
        });
      }
    });
  } catch (e) {
    res.status(500).send({
      error: e,
    });
  }
}

module.exports = {
  getColor,
  getColors,
  CreateColor,
};
