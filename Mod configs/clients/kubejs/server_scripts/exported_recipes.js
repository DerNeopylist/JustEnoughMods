ServerEvents.recipes(event => {


        event.shaped(
                Item.of('waystones:warp_stone'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        B: 'minecraft:ender_pearl',
                        A: 'minecraft:amethyst_shard',
                        C: 'productivemetalworks:molten_ender_bucket',
                        D: 'chipped:ancient_emerald_block'
                }
        )
        event.remove(
                {
                        output: 'waystones:warp_stone',
                        input: 'minecraft:emerald'
                }
        )
        event.shaped(
                Item.of('torchmaster:megatorch'),
                [
                        'AAA',
                        'BCB',
                        'DCD'
                ],
                {
                        C: '#minecraft:logs',
                        B: 'minecraft:echo_shard',
                        A: 'minecraft:torch',
                        D: 'minecraft:gold_block'
                }
        )
        event.remove(
                {
                        output: 'torchmaster:megatorch',
                        input: 'minecraft:diamond'
                }
        )
  
  //Building Gadgets 2: Building Gadget
  event.shaped(
    Item.of('buildinggadgets2:gadget_building', 1),
    [
      'ABA',
      'CBC',
      'ADA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:emerald',
      C: 'minecraft:scaffolding',
      D: 'mekanism:elite_control_circuit'
    }
  )
  event.remove(
    { 
      output: 'buildinggadgets2:gadget_building',
      input: 'minecraft:lapis_lazuli'
    }
  )
  
  //Building Gadgets 2: Exchanging Gadget
  event.shaped(
    Item.of('buildinggadgets2:gadget_exchanging', 1),
    [
      'ABA',
      'CBD',
      'AEA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:emerald',
      C: 'minecraft:iron_pickaxe',
      D: 'minecraft:scaffolding',
      E: 'mekanism:elite_control_circuit'
    }
  )
  event.shaped(
    Item.of('buildinggadgets2:gadget_exchanging', 1),
    [
      'ABA',
      'DBC',
      'AEA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:emerald',
      C: 'minecraft:iron_pickaxe',
      D: 'minecraft:scaffolding',
      E: 'mekanism:elite_control_circuit'
    }
  )
  event.remove(
    { 
      output: 'buildinggadgets2:gadget_exchanging',
      input: 'minecraft:lapis_lazuli'
    }
  )
  
  //Building Gadgets 2: Cup Paste Gadget
  event.shaped(
    Item.of('buildinggadgets2:gadget_cut_paste', 1),
      [
        'ABA',
        'CBD',
        'AEA'
      ],
      {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:iron_pickaxe',
        D: 'minecraft:scaffolding',
        E: 'mekanism:elite_control_circuit'
      }
  )
  event.shaped(
    Item.of('buildinggadgets2:gadget_cut_paste', 1),
      [
        'ABA',
        'DBC',
        'AEA'
      ],
      {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:iron_pickaxe',
        D: 'minecraft:scaffolding',
        E: 'mekanism:elite_control_circuit'
      }
  )
  event.remove(
    { 
      output: 'buildinggadgets2:gadget_cut_paste',
      input: 'minecraft:lapis_lazuli'
    }
  )
  
  //Building Gadgets 2: Copy Paste Gadget
  event.shaped(
    Item.of('buildinggadgets2:gadget_copy_paste', 1),
    [
      'ABA',
      'CBD',
      'AEA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:emerald',
      C: 'minecraft:map',
      D: 'minecraft:scaffolding',
      E: 'mekanism:elite_control_circuit'
    }
  )
  event.shaped(
    Item.of('buildinggadgets2:gadget_copy_paste', 1),
    [
      'ABA',
      'DBC',
      'AEA'
    ],
    {
      A: 'minecraft:iron_ingot',
      B: 'minecraft:emerald',
      C: 'minecraft:map',
      D: 'minecraft:scaffolding',
      E: 'mekanism:elite_control_circuit'
    }
  )
  event.remove(
    { 
      output: 'buildinggadgets2:gadget_copy_paste',
      input: 'minecraft:lapis_lazuli'
    }
  )
  
  //Building Gadgets 2: Destruction Gadget
  event.shaped(
    Item.of('buildinggadgets2:gadget_destruction', 1),
      [
        'ABA',
        'CBD',
        'AEA'
      ],
      {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:ender_pearl',
        D: 'minecraft:iron_pickaxe',
        E: 'mekanism:elite_control_circuit'
      }
  )
  event.shaped(
    Item.of('buildinggadgets2:gadget_destruction', 1),
      [
        'ABA',
        'DBC',
        'AEA'
      ],
      {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:redstone',
        C: 'minecraft:ender_pearl',
        D: 'minecraft:iron_pickaxe',
        E: 'mekanism:elite_control_circuit'
      }
  )
  event.remove(
    { 
      output: 'buildinggadgets2:gadget_destruction',
      input: 'minecraft:lapis_lazuli'
    }
  )
});
