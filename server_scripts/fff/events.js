ItemEvents.foodEaten(event => {
  if (event.item.id == "fff:raspberry_boba" || event.item.id == "fff:taro_boba") {
      event.player.give(Item.of("fff:empty_cup", 1))
  }
})
