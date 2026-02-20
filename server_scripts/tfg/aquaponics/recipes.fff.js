ServerEvents.recipes(event => {
    global.FFF_GREENHOUSE_VEGETABLE_RECIPE_COMPONENTS.forEach(element => {
      generateCropGreenHouseRecipe(event, null, element.input, element.output, null, 1);
    });
});
