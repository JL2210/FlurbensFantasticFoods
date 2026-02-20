StartupEvents.registry('block', (e) => {

  const cropCucumber = e.create("fff:cucumber", "tfc:crop") // initialize the cucumber plant
    .nutrient("potassium")
    .productItem(product => {
        product.tag("tfc:foods");
        product.food((food) => {
            food.hunger(2); // Amount of hunger restored
            food.saturation(2); // Saturation restored
            food.meat(false); // Indicates it's a meat item
            food.fastToEat(false); // Whether it's fast to eat like dried kelp
            food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
        });
    });
  for(var i = 0; i <= 8; i++) { // XXX: Workaround for Notenoughmail/KubeJS-TFC#36
    cropCucumber.textureAt(i, "fff:block/cucumber_" + i);
  }

  const cropMustard = e.create("fff:mustard", "tfc:crop") // initialize the mustard plant
    .nutrient("potassium");
  for(var i = 0; i <= 8; i++) {
    cropMustard.textureAt(i, "fff:block/mustard_" + i);
  }

  const cropCassava = e.create("fff:cassava", "tfc:crop") // initialize the cassava plant
    .nutrient("potassium")
    .productItem(product => {
        product.tag("tfc:foods");
        product.food((food) => {
            food.hunger(2); // Amount of hunger restored
            food.saturation(2); // Saturation restored
            food.meat(false); // Indicates it's a meat item
            food.fastToEat(false); // Whether it's fast to eat like dried kelp
            food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
       });
    });
  for(var i = 0; i <= 8; i++) {
    cropCassava.textureAt(i, "fff:block/cassava_" + i);
  }
});
