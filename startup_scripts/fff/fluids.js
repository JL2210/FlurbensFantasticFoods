StartupEvents.registry("fluid", (e) => {
  e.create("fff:white_liquor") // initialize the white liquor fluid
    .thinTexture(0xdbeca4)
    .bucketColor(0xdbeca4)
    .tag("tfc:usable_in_barrel");

  e.create("fff:taro_milk") // initialize the taro milk fluid
    .thinTexture(0xf7f0ff)
    .bucketColor(0xf7f0ff)
    .tag("tfc:usable_in_barrel");
});
