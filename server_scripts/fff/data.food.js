TFCEvents.data(event => {
    event.foodItem('fff:food/raw_hot_dog', food => {
        food.hunger(2)
        food.protein(1)
        food.decayModifier(2)
    })

    event.foodItem('fff:food/cooked_hot_dog', food => {
        food.hunger(3)
        food.saturation(2)
        food.protein(2)
        food.decayModifier(1.5)
    })

    event.foodItem('fff:food/raw_hot_dog_bun', food => {
        food.hunger(1)
        food.saturation(0.5)
        food.grain(1)
        food.decayModifier(1.4)
    })

    event.foodItem('fff:food/uncut_hot_dog_bun', food => {
        food.hunger(1.5)
        food.saturation(0.7)
        food.grain(1)
        food.decayModifier(0.8)
    })

    event.foodItem('fff:food/cut_hot_dog_bun', food => {
        food.hunger(1.5)
        food.saturation(0.7)
        food.grain(1)
        food.decayModifier(0.8)
    })

    event.foodItem('fff:food/chopped_onion', food => {
        food.hunger(2)
        food.saturation(0.5)
        food.vegetables(1)
        food.decayModifier(0.6)
    })

    event.foodItem('fff:food/cucumber_product', food => {
        food.hunger(2)
        food.saturation(0.8)
        food.vegetables(1)
        food.decayModifier(0.4)
        food.water(6)
    })

    event.foodItem('fff:food/pickle', food => {
        food.hunger(2)
        food.saturation(0.8)
        food.vegetables(1)
        food.decayModifier(0.4)
        food.water(10)
    })

    event.foodItem('fff:food/pickle_spear', food => {
        food.hunger(0.5)
        food.saturation(0.4)
        food.vegetables(0.25)
        food.decayModifier(0.4)
        food.water(2.5)
    })

    event.foodItem('fff:food/sweet_relish', food => {
        food.hunger(1)
        food.saturation(0.8)
        food.vegetables(0.4)
        food.decayModifier(0.4)
        food.water(2.5)
    })

    event.foodItem('fff:food/tomato_wedge', food => {
        food.hunger(1)
        food.saturation(0.5)
        food.vegetables(0.5)
        food.decayModifier(3)
        food.water(2.5)
    })

    event.foodItem('fff:food/flurbens_tasty_glizzy', food => {
        food.hunger(10)
        food.saturation(6)
        food.protein(2.5)
        food.grain(1)
        food.vegetables(2)
        food.water(10)
        food.decayModifier(0.8)
    })

    event.foodItem('fff:food/raspberry_boba', food => {
        food.hunger(3)
        food.saturation(6)
        food.fruit(2.5)
        food.dairy(3)
        food.water(25)
        food.decayModifier(0.8)
    })

    event.foodItem('fff:food/taro_boba', food => {
        food.hunger(3)
        food.saturation(6)
        food.fruit(2.5)
        food.dairy(3)
        food.water(25)
        food.decayModifier(0.8)
    })
})
