// priority: 99

Platform.setModName("fff", "Flurben's Fantastic Foods");

StartupEvents.registry("mob_effect", (event) => {
  event
    .create("fff:choking")
    .harmful()
    .effectTick((entity, level) => {
      if (entity.age % 20 == 0) entity.attack(1);
    });
});
