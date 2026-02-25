//Produced by Arya The Elf
//Updated and made recipes automatable by JoaquinDG

// Register custom items and recipes
StartupEvents.registry("item", e => {

  const rawHotDog = e
    .create("fff:food/raw_hot_dog")
    .tag("tfc:foods")
    .tag("firmalife:foods/heatable")
    .food((food) => {
      food.hunger(3); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(true); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const cookedHotDog = e
    .create("fff:food/cooked_hot_dog")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(4); // Amount of hunger restored
      food.saturation(4); // Saturation restored
      food.meat(true); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const groundMustard = e
    .create("fff:ground_mustard")

  const yellowMustard = e
    .create("fff:yellow_mustard")

  const hotDogCasing = e
    .create("fff:hot_dog_casing")

  const cellulosePulp = e
    .create("fff:cellulose_pulp")

  const tapiocaStarch = e
    .create("fff:tapioca_starch")

  const tapiocaDough = e
    .create("fff:tapioca_dough")

  const rawBoba = e
    .create("fff:unboiled_boba_pearls")

  const cookedBoba = e
    .create("fff:boiled_boba_pearls")

  const emptyCup = e
    .create("fff:empty_cup")

  const rawDough = e
    .create("fff:raw_dough")
    .tag("tfc:any_knapping");

  const raspberryBoba = e
    .create("fff:food/raspberry_boba")
    .tag("tfc:foods")
    .tooltip(Text.translatable("fff.tooltip.food.raspberry_boba"))
    .useAnimation("drink")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(true); // Whether it can be eaten when the player is not hungry
      food.eaten((ctx) => {
        const random = Math.random(); // Generate a random number between 0 and 1
        const probability = 0.1; // Set the desired probability (in this case, 10%)
        if (["Dragonium10190", "Angelic_Arya"].includes(ctx.player.username) && random <= probability) {
          ctx.player.potionEffects.add(
            "fff:choking",
            40,
            0,
            false,
            true
          );
        }
      });
    });

  const taroBoba = e
    .create("fff:food/taro_boba")
    .tag("tfc:foods")
    .tooltip(Text.translatable("fff.tooltip.food.taro_boba"))
    .useAnimation("drink")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(true); // Whether it can be eaten when the player is not hungry
      food.eaten((ctx) => {
        const random = Math.random(); // Generate a random number between 0 and 1
        const probability = 0.25; // Set the desired probability (in this case, 25%)
        if (["Dragonium10190", "Angelic_Arya"].includes(ctx.player.username) && random <= probability) {
          ctx.player.potionEffects.add(
            "fff:choking",
            40,
            0,
            false,
            true
          );
        }
      });
    });

  const rawHotDogBun = e
    .create("fff:food/raw_hot_dog_bun")
    .tag("tfc:foods")
    .tag("tfc:foods/dough")
    .tag("firmalife:foods/extra_dough")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(1); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const hotDogBun = e
    .create("fff:food/uncut_hot_dog_bun")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(1); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const cutHotDogBun = e
    .create("fff:food/cut_hot_dog_bun")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(1); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const choppedOnion = e
    .create("fff:food/chopped_onion")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(3); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const pickle = e
    .create("fff:food/pickle")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const pickleSpear = e
    .create("fff:food/pickle_spear")
    .tag("tfc:foods")
    .tag("tfc:foods/usable_in_sandwich")
    .food((food) => {
      food.hunger(1); // Amount of hunger restored
      food.saturation(1); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const sweetRelish = e
    .create("fff:food/sweet_relish")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(2); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const tomatoWedge = e
    .create("fff:food/tomato_wedge")
    .tag("tfc:foods")
    .tag("tfc:foods/vegetables")
    .tag("tfc:foods/usable_in_sandwich")
    .food((food) => {
      food.hunger(3); // Amount of hunger restored
      food.saturation(2); // Saturation restored
      food.meat(false); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    });

  const flurbensTastyGlizzy = e
    .create("fff:food/tasty_glizzy")
    .tag("tfc:foods")
    .food((food) => {
      food.hunger(8); // Amount of hunger restored
      food.saturation(0.8); // Saturation restored
      food.meat(true); // Indicates it's a meat item
      food.fastToEat(false); // Whether it's fast to eat like dried kelp
      food.alwaysEdible(false); // Whether it can be eaten when the player is not hungry
    })
    .tooltip(Text.translatable("fff.tooltip.food.tasty_glizzy"));

});
