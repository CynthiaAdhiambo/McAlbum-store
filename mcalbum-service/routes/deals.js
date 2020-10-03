var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let JsonResponse = {
    "handsetCards":  [
      { imageName: 'artist4', title: 'Song: Senorita', cols: 2, rows: 1 },
      { imageName: 'mtrain',title: 'Song: Lie To Me', cols: 2, rows: 1 },
      { imageName: 'artist1',title: 'Song: Easy', cols: 2, rows: 1 },
      { imageName: 'sm',title: 'Song: Nervous', cols: 2, rows: 1 }
    ],
    "webCards": [
      { imageName: 'artist4',title: 'Song: Senorita', cols: 2, rows: 1 },
      { imageName: 'mtrain',title: 'Song: Lie To Me', cols: 1, rows: 1 },
      { imageName: 'artist1',title: 'Song: Easy', cols: 1, rows: 2 },
      { imageName: 'sm',title: 'Song: Nervous', cols: 1, rows: 1 }
    ]
  }
  res.json(JsonResponse)
});

module.exports = router;
