// Produced by Arya the Elf
// Updated and made recipes automatable by JoaquinDG
// Help with various textures by Derpesore

ServerEvents.recipes((event) => {
  // Add crafting recipe for "Flurben's Tasty Glizzy"
  event.shapeless(
    Item.of("fff:flurbens_tasty_glizzy", 1), // arg 1: output
    [
      "fff:cut_hot_dog_bun",
      "fff:chopped_onion",
      "fff:sweet_relish",
      "fff:pickle_spear",
      "fff:tomato_wedge",
      "fff:yellow_mustard",
      "fff:cooked_hot_dog",
    ]
  );

  event.shapeless(
    Item.of("fff:chopped_onion", 4), //chopped onion recipe
    ["tfc:food/onion", "#forge:tools/knives"]
  );

  event.recipes.gtceu.cutter("fff:chopped_onion") // chopped onion recipe, gregtech cutter
		.itemInputs("tfc:food/onion")
		.itemOutputs("4x fff:chopped_onion")
		.duration(20)
		.EUt(3);

  event.shapeless(
    Item.of("fff:tomato_wedge", 4), // tomato wedge recipe
    ["tfc:food/tomato", "#forge:tools/knives"]
  );

  event.recipes.gtceu.cutter("fff:tomato_wedge") // tomato wedge recipe, gregtech cutter
		.itemInputs("tfc:food/tomato")
		.itemOutputs("4x fff:tomato_wedge")
		.duration(20)
		.EUt(3);

  event.shapeless(
    Item.of("fff:pickle_spear", 4), // pickle spear recipe
    ["fff:pickle", "#forge:tools/knives"]
  );

  event.recipes.gtceu.cutter("fff:pickle_spear") // pickle spear recipe, gregtech cutter
    .itemInputs("fff:pickle")
    .itemOutputs("4x fff:pickle_spear")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("fff:mustard_seeds", 4), // mustard seed recipe from pods
    ["fff:mustard_product"]
  );

  event.shapeless(
    Item.of("fff:ground_mustard", 1), // ground mustard recipe
    ["fff:mustard_seeds", "#forge:tools/mortars"]
  );

  event.recipes.gtceu.macerator("fff:ground_mustard") // ground mustard recipe, gregtech macerator
    .itemInputs("fff:mustard_seeds")
    .itemOutputs("fff:ground_mustard")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("fff:tapioca_starch", 1), // tapioca starch recipe
    ["fff:cassava_product", "#forge:tools/mortars"]
  );

  event.recipes.gtceu.macerator("fff:tapioca_starch") // tapioca starch recipe, gregtech macerator
    .itemInputs("fff:cassava_product")
    .itemOutputs("fff:tapioca_starch")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("fff:mustard_seeds", 1), // mustard seed recipe
    ["tfc:seeds/tomato", "#forge:dyes/yellow"]
  );

  event.shapeless(
    Item.of("fff:cassava_seeds", 1), // cassava seed recipe
    ["tfc:seeds/potato", "#forge:dyes/brown"]
  );
  event.shapeless(
    Item.of("fff:yellow_mustard", 1), // yellow mustard recipe, tfc buckets
    [
      "fff:ground_mustard",
      Item.of("tfc:wooden_bucket", {fluid:{Amount:1000,FluidName:"firmalife:yeast_starter"}})
    ]
  );
  event.recipes.gtceu.mixer("fff:yellow_mustard") // yellow mustard recipe, gregtech mixer
		.inputFluids(Fluid.of("tfc:vinegar", 100))
    .itemInputs("fff:ground_mustard")
    .itemOutputs("fff:yellow_mustard")
    .duration(20)
    .EUt(3);
//
//  event.shapeless(
//    Item.of("fff:tapioca_dough", 4), // tapioca dough recipe, tfc buckets
//    [
//      "fff:tapioca_starch",
//      Item.of("tfc:wooden_bucket", '{fluid:{Amount:1000,FluidName:"firmalife:yeast_starter"}}'),
//      "#tfc:sweetener",
//    ]
//  );
//
  event.shapeless(
    Item.of("fff:tapioca_dough", 4), // tapioca dough recipe, minecraft buckets
    ["fff:tapioca_starch", "minecraft:water_bucket", "#tfc:sweetener"]
  );

  event.recipes.gtceu.mixer("fff:tapioca_dough") // tapioca dough recipe, gregtech mixer
		.inputFluids(Fluid.of("minecraft:water", 250))
    .itemInputs("#tfc:sweetener", "fff:tapioca_starch")
    .itemOutputs("4x fff:tapioca_dough")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("fff:cucumber_seeds", 1), // cucumber seed recipe
    ["tfc:seeds/squash", "#forge:dyes/green"]
  );

  event.shapeless(
    Item.of("fff:cucumber_seeds", 1), // cucumber seed recipe
    ["fff:cucumber_product"]
  );

  event.shapeless(
    Item.of("fff:sweet_relish", 4), // sweet relish recipe
    ["fff:pickle_spear", "#forge:tools/knives", "#tfc:sweetener"]
  );

  event.recipes.gtceu.cutter("fff:sweet_relish") // sweet relish recipe, gregtech cutter
    .itemInputs("fff:pickle_spear")
    .itemOutputs("4x fff:sweet_relish")
    .duration(20)
    .EUt(3);

  event.shapeless(
    Item.of("fff:yellow_mustard", 1), // yellow mustard recipe, vanilla bucket
    ["fff:ground_mustard", "tfc:bucket/vinegar"]
  );

  event.shapeless(
    Item.of("fff:raw_dough", 1), // raw dough recipe
    ["#firmalife:foods/extra_dough"]
  );

  event.shapeless(
    Item.of("fff:cut_hot_dog_bun", 1), // cut hot dog bun recipe
    ["fff:uncut_hot_dog_bun", "#forge:tools/knives"]
  );

  event.recipes.gtceu.cutter("fff:cut_hot_dog_bun") // cut hot dog bun recipe, gregtech cutter
    .itemInputs("fff:uncut_hot_dog_bun")
    .itemOutputs("fff:cut_hot_dog_bun")
    .duration(20)
    .EUt(3);

  event.smelting(
    Item.of("fff:uncut_hot_dog_bun", 1), // uncut hot dog bun recipe
    "fff:raw_hot_dog_bun"
  );

  event.smelting(
    Item.of("tfc:powder/wood_ash",1), // Wood ash recipe from charcoal powder
    "gtceu:wood_dust"
  );

  event.smelting(Item.of("fff:cooked_hot_dog", 1), "fff:raw_hot_dog"); // cooked hot dog recipe, vanilla-style

  event.recipes.tfc
    .knapping("3x fff:raw_hot_dog_bun", "fff:dough_knapping", [
      // raw hot dog bun recipe
      "xxxxx",
      "     ",
      "xxxxx",
      "     ",
      "xxxxx",
    ])
    .ingredient("fff:raw_dough")
    .id("fff:dough_knapping/horizontal_raw_hot_dog_bun");

  event.recipes.tfc
    .knapping("3x fff:raw_hot_dog_bun", "fff:dough_knapping", [
      // raw hot dog bun recipe
      "x x x",
      "x x x",
      "x x x",
      "x x x",
      "x x x",
    ])
    .ingredient("fff:raw_dough")
    .id("fff:dough_knapping/vertical_raw_hot_dog_bun");

  event.recipes.tfc
    .heating("fff:raw_hot_dog", 200) // cooked hot dog recipe, tfc-style
    .resultItem(TFC.isp.of("1x fff:cooked_hot_dog"));

  event.recipes.tfc
    .barrel_sealed(72000) // pickle recipe
    .inputs("fff:cucumber_product", TFC.fluidStackIngredient("tfc:brine", 125))
    .outputItem(TFC.isp.of("1x fff:pickle"))
    .id("fff:barrel_sealed/pickle");

  event.recipes.tfc
    .barrel_sealed(3600) // cellulose pulp recipe
    .inputs(
      "#minecraft:logs",
      TFC.fluidStackIngredient("fff:white_liquor", 125)
    )
    .outputItem(TFC.isp.of("2x fff:cellulose_pulp"))
    .id("fff:barrel_cellulose_pulp");

  event.recipes.tfc
    .barrel_instant() // white liquor recipe
    .outputFluid(Fluid.of("fff:white_liquor", 1000))
    .inputFluid(TFC.fluidStackIngredient("tfc:lye", 1000))
    .inputItem("tfc:powder/sulfur");

  event.recipes.gtceu.chemical_reactor('fff:white_liquor') // white liquor recipe, gregtech chemical reactor
    .itemInputs('tfc:powder/sulfur')
    .inputFluids(Fluid.of("tfc:lye",2000))
    .outputFluids(Fluid.of("fff:white_liquor",2000))
    .EUt(32).duration(120);

  event.recipes.gtceu.chemical_reactor('tfc:lye') // lye chemical recipe, gregtech chemical reactor
    .itemInputs('4x tfc:powder/wood_ash')
    .inputFluids(Fluid.of("minecraft:water",1000))
    .outputFluids(Fluid.of("tfc:lye",1000))
    .EUt(32).duration(120);

  event.recipes.tfc // raspberry boba recipe, pot
    .pot(
      [
        "tfc:jar/raspberry",
        "#tfc:sweetener",
        "fff:boiled_boba_pearls",
        "fff:empty_cup",
      ],
      Fluid.of("minecraft:milk", 1000),
      100,
      100
    )
    .itemOutput(Item.of("fff:raspberry_boba"));

  event.recipes.tfc // raspberry boba recipe, pot
    .pot(
      [
        "tfc:jar/raspberry_unsealed",
        "#tfc:sweetener",
        "fff:boiled_boba_pearls",
        "fff:empty_cup",
      ],
      Fluid.of("minecraft:milk", 1000),
      100,
      100
    )
    .itemOutput(Item.of("fff:raspberry_boba"));

  event.recipes.gtceu.mixer("fff:raspberry_boba_sealed") // raspberry boba recipe, gregtech mixer
    .itemInputs("tfc:jar/raspberry", "#tfc:sweetener", "fff:boiled_boba_pearls", "fff:empty_cup")
    .inputFluids(Fluid.of("minecraft:milk",1000))
    .itemOutputs("fff:raspberry_boba")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu.mixer("fff:raspberry_boba") // raspberry boba recipe, gregtech mixer
    .itemInputs("tfc:jar/raspberry_unsealed", "#tfc:sweetener", "fff:boiled_boba_pearls", "fff:empty_cup")
    .inputFluids(Fluid.of("minecraft:milk",1000))
    .itemOutputs("fff:raspberry_boba")
    .duration(20)
    .EUt(3);

  event.recipes.tfc // taro boba recipe, pot
    .pot(
      [
        "#tfc:sweetener",
        "fff:boiled_boba_pearls",
        "fff:empty_cup",
      ],
      Fluid.of("fff:taro_milk",1000),
      100,
      100
    )
    .itemOutput(Item.of("fff:taro_boba"));

  event.recipes.gtceu.mixer("fff:taro_boba") // taro boba recipe, gregtech mixer
    .itemInputs('#tfc:sweetener', "fff:boiled_boba_pearls", "fff:empty_cup")
    .inputFluids(Fluid.of("fff:taro_milk",1000))
    .itemOutputs("fff:taro_boba")
    .duration(20)
    .EUt(3);

  event.recipes.tfc //1x boba
    .pot(
      Item.of("1x fff:unboiled_boba_pearls"),
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput(Item.of("fff:boiled_boba_pearls"))

  event.smelting("fff:boiled_boba_pearls","fff:unboiled_boba_pearls")
		.id("tfg:smelting/boiled_boba_pearls");

  event.recipes.tfc //2x boba
    .pot(
      [
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
      ],
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput([
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
    ]);

  event.recipes.tfc //3x boba
    .pot(
      [
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
      ],
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput([
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
    ]);

  event.recipes.tfc //4x boba
    .pot(
      [
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
      ],
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput([
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
    ]);

  event.recipes.tfc //5x boba
    .pot(
      [
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
        Item.of("1x fff:unboiled_boba_pearls"),
      ],
      Fluid.of("minecraft:water"),
      100,
      100
    )
    .itemOutput([
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
      Item.of("fff:boiled_boba_pearls"),
    ]);

  event.recipes.firmalife.oven({
    ingredient: { item: "fff:raw_hot_dog_bun" }, // oven recipe for uncut hot dog bun
    result_item: { item: "fff:uncut_hot_dog_bun" },
    duration: 200, // Adjust the cooking time as needed
    temperature: 300, // Adjust the temperature as needed
  });

  event.recipes.gtceu
    .extruder("hot_dog_casing") // hot dog casing recipe
    .notConsumable("gtceu:tiny_pipe_extruder_mold")
    .itemInputs("fff:cellulose_pulp")
    .itemOutputs("fff:hot_dog_casing")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .extruder("empty_cup") // empty cup recipe
    .notConsumable("gtceu:bottle_extruder_mold")
    .itemInputs("fff:cellulose_pulp")
    .itemOutputs("fff:empty_cup")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .extruder("fff:raw_hot_dog") // raw hot dog recipe
    .itemInputs("gtceu:meat_dust", "fff:hot_dog_casing")
    .itemOutputs("fff:raw_hot_dog")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .extruder("fff:raw_hot_dog_bun") // raw hot dog bun recipe
    .notConsumable("gtceu:normal_pipe_extruder_mold")
    .itemInputs("fff:raw_dough")
    .itemOutputs("fff:raw_hot_dog_bun")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .forming_press("fff:unboiled_boba_pearls") // umboiled boba recipe
    .notConsumable("gtceu:ball_casting_mold")
    .itemInputs("fff:tapioca_dough")
    .itemOutputs("fff:unboiled_boba_pearls")
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .brewery('firmalife:yeast_starter') // Brewery recipe for yeast starter
    .itemInputs('#tfc:foods/flour')
    .inputFluids(Fluid.of('firmalife:yeast_starter', 100))
    .outputFluids(Fluid.of('firmalife:yeast_starter', 600))
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .brewery('tfc:vinegar') // Brewery recipe for vinegar
    .itemInputs('#tfc:sweetener')
    .inputFluids(Fluid.of("minecraft:water", 250))
    .outputFluids(Fluid.of('tfc:vinegar', 250))
    .circuit(1)
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .mixer('tfc:brine') // Mixer recipe for brine
    .inputFluids(Fluid.of('tfc:vinegar', 1),Fluid.of('minecraft:water', 9))
    .outputFluids(Fluid.of('tfc:brine',10))
    .duration(20)
    .EUt(3);

  event.recipes.gtceu
    .mixer('fff:cellulose_pulp') // Mixer recipe for cellulose
    .itemInputs('#minecraft:logs')
    .inputFluids(Fluid.of('fff:white_liquor', 125))
    .itemOutputs('2x fff:cellulose_pulp')
    .duration(20)
    .EUt(3);

  event.recipes.gtceu.chemical_reactor("fff:pickle") // pickle recipe, gregtech chemical reactor
    .itemInputs("fff:cucumber_product")
    .inputFluids(Fluid.of("tfc:brine",125))
    .itemOutputs("fff:pickle")
    .duration(20)
    .EUt(3);


  event.recipes.gtceu
    .extractor('fff:taro_milk') // Extractor recipe for taro milk
    .itemInputs('tfc:food/taro_root')
    .outputFluids(Fluid.of('fff:taro_milk', 125))
    .duration(20)
    .EUt(3);

  event.recipes.create.crushing(
    Item.of("2x fff:tapioca_starch"),
    "fff:cassava_product"
  );

  event.recipes.create.milling(
    Item.of("2x fff:tapioca_starch"),
    "fff:cassava_product"
  );
  event.recipes.create.crushing(
    Item.of("2x fff:ground_mustard"),
    "fff:mustard_seeds"
  );
  event.recipes.create.milling(
    Item.of("2x fff:ground_mustard"),
    "fff:mustard_seeds"
  );
});
