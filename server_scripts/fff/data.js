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
      "fff:block/cucumber_0",
      "fff:block/cucumber_1",
      "fff:block/cucumber_2",
      "fff:block/cucumber_3",
      "fff:block/cucumber_4",
      "fff:block/cucumber_5",
      "fff:block/cucumber_6",
      "fff:block/cucumber_7",
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
      "fff:block/mustard_0",
      "fff:block/mustard_1",
      "fff:block/mustard_2",
      "fff:block/mustard_3",
      "fff:block/mustard_4",
      "fff:block/mustard_5",
      "fff:block/mustard_6",
      "fff:block/mustard_7",
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
      "fff:block/cassava_0",
      "fff:block/cassava_1",
      "fff:block/cassava_2",
      "fff:block/cassava_3",
      "fff:block/cassava_4",
      "fff:block/cassava_5",
      "fff:block/cassava_6",
      "fff:block/cassava_7",
    ],
    null
  );
});
