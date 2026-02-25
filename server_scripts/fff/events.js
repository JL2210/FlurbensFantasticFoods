ItemEvents.foodEaten(event => {
  if (event.item.id == "fff:food/raspberry_boba" || event.item.id == "fff:food/taro_boba") {
      event.player.give(Item.of("fff:empty_cup", 1))
  }
})
