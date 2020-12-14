const express = require('express');
const bodyParser = require('body-parser');
const {
  aListPredictionsResponse,
  aV2Prediction: aPrediction,
} = require('@wix/ambassador-wix-atlas-service-web/builders');

const buildAtlasAutocompleteResponse = input => {
  if (!input) {
    return aListPredictionsResponse()
      .withPredictions([])
      .build();
  }
  const predictions = Array.from({ length: 5 }, (_, index) => {
    const mainText = `${input} ${index + 1}`;
    const secondaryText = 'Country';
    const description = `${mainText}, ${secondaryText}`;
    return aPrediction()
      .withSearchId(`${index}`)
      .withDescription(description)
      .withTextStructure({
        mainText,
        secondaryText,
      })
      .build();
  });

  const response = aListPredictionsResponse()
    .withPredictions(predictions)
    .build();

  return response;
};

const expressMiddleWare = function(router) {
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());
  router.get('/api/v2/predictions', function(req, res) {
    const {
      query: { input },
    } = req;
    res.json(buildAtlasAutocompleteResponse(input));
    res.end();
  });
};

module.exports = expressMiddleWare;
