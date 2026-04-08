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

});
