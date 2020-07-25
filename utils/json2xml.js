const jsonxml = require('jsontoxml');

module.exports = function jsontoxml(result, pagination) {
  let xmlData;
  if (pagination) {
    xmlData = jsonxml({
      pagination: result.pagination,
      data: [result.data.length > 0 ? {
        name: 'colors',
        children: [
          result.data.map((data) => {
            return jsonxml({color: data});
          }),
        ],
      } : {name: 'colors', text: ' '},
      ],

    }, {xmlHeader: true});
  } else {
    xmlData = jsonxml({
      data: jsonxml({color: result.data}),

    }, {xmlHeader: true});
  }

  return xmlData;
};

