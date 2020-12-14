const express = require('express');
const bodyParser = require('body-parser');
const {
  aListPredictionsResponse,
  aV2Prediction: aPrediction,
  aV2GetPlaceResponse,
  aV2Place: aPlace,
  aCommonAddress,
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

const buildAtlasPlaceResponse = id => {
  const address = aCommonAddress()
    .withPostalCode(`0651${id}`)
    .build();
  const place = aPlace()
    .withPlaceId(id)
    .withAddress(address)
    .build();
  const response = aV2GetPlaceResponse()
    .withPlace(place)
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
  router.get('/api/v2/place', function(req, res) {
    const {
      query: { searchId },
    } = req;
    res.json(buildAtlasPlaceResponse(searchId));
    res.end();
  });
};

module.exports = expressMiddleWare;
