StartupEvents.registry('block', (e) => {

  const cropCucumber = e.create("fff:cucumber", "tfc:crop") // initialize the cucumber plant
    .stages(7)
    .mapColor('plant')
    .hardness(0.4)
    .soundType('crop')
    .tagBlock('minecraft:mineable/hoe')
    .nutrient("potassium")
    .productItem(product => {
        product.tag('tfc:foods/usable_in_sandwich')
        product.tag('tfc:foods/usable_in_salad')
        product.food((food) => {
            food.hunger(2); // Amount of hunger restored
            food.saturation(2); // Saturation restored
            food.meat(false); // Indicates it's a meat item
            food.fastToEat(false); // Whether it's fast to eat like dried kelp
            food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
        });
    })
    .deadBlock(dead => {
        dead.hardness(0.4)
        dead.soundType('crop')
        dead.tagBlock('minecraft:mineable/hoe')
    })

  e.create('fff:cucumber_wild', 'tfc:wild_crop')
    .soundType('crop')
    .seeds('fff:cucumber_seeds')
    .food('fff:cucumber_product')
    .hardness(0.2)
    .tagBoth('tfc:wild_crops')
    .tagBlock('minecraft:mineable/hoe')
    .tagBlock('tfc:can_be_snow_piled')

  const cropMustard = e.create("fff:mustard", "tfc:crop") // initialize the mustard plant
    .mapColor('plant')
    .hardness(0.4)
    .soundType('crop')
    .tagBlock('minecraft:mineable/hoe')
    .nutrient("potassium")
    .deadBlock(dead => {
        dead.hardness(0.4)
        dead.soundType('crop')
        dead.tagBlock('minecraft:mineable/hoe')
    })

  e.create('fff:mustard_wild', 'tfc:wild_crop')
    .soundType('crop')
    .seeds('fff:mustard_seeds')
    .food('fff:mustard_product')
    .hardness(0.2)
    .tagBoth('tfc:wild_crops')
    .tagBlock('minecraft:mineable/hoe')
    .tagBlock('tfc:can_be_snow_piled')

  const cropCassava = e.create("fff:cassava", "tfc:crop") // initialize the cassava plant
    .mapColor('plant')
    .hardness(0.4)
    .soundType('crop')
    .tagBlock('minecraft:mineable/hoe')
    .nutrient("potassium")
    .productItem(product => {
        product.food((food) => {
            food.hunger(2); // Amount of hunger restored
            food.saturation(2); // Saturation restored
            food.meat(false); // Indicates it's a meat item
            food.fastToEat(false); // Whether it's fast to eat like dried kelp
            food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
       });
    })
    .deadBlock(dead => {
        dead.hardness(0.4)
        dead.soundType('crop')
        dead.tagBlock('minecraft:mineable/hoe')
    })

  e.create('fff:cassava_wild', 'tfc:wild_crop')
    .soundType('crop')
    .seeds('fff:cassava_seeds')
    .food('fff:cassava_product')
    .hardness(0.2)
    .tagBoth('tfc:wild_crops')
    .tagBlock('minecraft:mineable/hoe')
    .tagBlock('tfc:can_be_snow_piled')
});
