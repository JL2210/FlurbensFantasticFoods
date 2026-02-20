TFCEvents.data((event) => {
  // knapping types
  event.knappingType(
    "fff:raw_dough", // item to knap
    1, // ingredient count
    1, // number of consumed ingredients
    "minecraft:block.mud.place", // sound effect
    true, // consume after complete
    false, // show knapped texture
    true, // spawn particles
    "fff:raw_dough", // jei icon
    "fff:dough_knapping" // knapping type name
  );

  // crops
  event.climateRange((climate) => {
    //set the climate range for the cucumber plant
    climate.maxHydration(95);
    climate.minHydration(23);
    climate.minTemperature(5);
    climate.maxTemperature(33);
  }, "fff:cucumber");

  event.climateRange((climate) => {
    //set the climate range for the mustard plant
    climate.maxHydration(95);
    climate.minHydration(23);
    climate.minTemperature(5);
    climate.maxTemperature(33);
  }, "fff:mustard");

  event.climateRange((climate) => {
    //set the climate range for the cassava plant
    climate.maxHydration(95);
    climate.minHydration(23);
    climate.minTemperature(12);
    climate.maxTemperature(40);
  }, "fff:cassava");

  event.firmalifePlantable(
    "fff:cucumber_seeds",
    "large",
    0, // tier
    7, // stages
    0.3, // extra seed chance
    "fff:cucumber_seeds",
    "fff:cucumber_product",
    "potassium",
    [
      "fff:block/crop/cucumber_age_0",
      "fff:block/crop/cucumber_age_1",
      "fff:block/crop/cucumber_age_2",
      "fff:block/crop/cucumber_age_3",
      "fff:block/crop/cucumber_age_4",
      "fff:block/crop/cucumber_age_5",
      "fff:block/crop/cucumber_age_6",
      "fff:block/crop/cucumber_age_7",
    ],
    null
  );

  event.firmalifePlantable(
    "fff:mustard_seeds",
    "large",
    0,
    7,
    0,
    "fff:mustard_seeds",
    "fff:mustard_product",
    "potassium",
    [
      "fff:block/crop/mustard_age_0",
      "fff:block/crop/mustard_age_1",
      "fff:block/crop/mustard_age_2",
      "fff:block/crop/mustard_age_3",
      "fff:block/crop/mustard_age_4",
      "fff:block/crop/mustard_age_5",
      "fff:block/crop/mustard_age_6",
      "fff:block/crop/mustard_age_7",
    ],
    null
  );

  event.firmalifePlantable(
    "fff:cassava_seeds",
    "large",
    0,
    7,
    0.5,
    "fff:cassava_seeds",
    "fff:cassava_product",
    "potassium",
    [
      "fff:block/crop/cassava_age_0",
      "fff:block/crop/cassava_age_1",
      "fff:block/crop/cassava_age_2",
      "fff:block/crop/cassava_age_3",
      "fff:block/crop/cassava_age_4",
      "fff:block/crop/cassava_age_5",
      "fff:block/crop/cassava_age_6",
      "fff:block/crop/cassava_age_7",
    ],
    null
  );
});
