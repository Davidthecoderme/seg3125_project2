const championsData = {
    en: [
        { name: 'Aatrox', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/db39563458aa28c3f3aa8990f2c964a0f7645097-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Darkin Blade' },
        { name: 'Ahri', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/55e7e901b1f69d72804665cfbeb1f4f59c8fa877-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Nine-Tailed Fox' },
        { name: 'Akali', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/abbd173df157f943496abb0638add119f753e3b2-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Rogue Assassin' },
        { name: 'Alistar', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/da8cefee5b85bca51360ccc1635ef5b0f6967767-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Minotaur' },
        { name: 'Amumu', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/092febba8905cff35940d036fd20b7e3ad4f428f-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Sad Mummy' },
        { name: 'Annie', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/220684b035ca0a0dc0d93c17ee058872d7c2a4e9-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Dark Child' },
        { name: 'Ashe', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6311d8de67f55496be4886a353372c8da713dade-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Frost Archer' },
        { name: 'Azir', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1636aeb5f8d604f7d3336428918146cac62c28e7-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Emperor of the Sands' },
        { name: 'Blitzcrank', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c6db939c90bf8e10b1b9baf77bc99c9bcd2d6981-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Great Steam Golem' },
        { name: 'Caitlyn', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/33eb2887813cb07d3b708800b93097a02182e98b-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Sheriff of Piltover' },
        { name: 'Darius', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f606418621ccec569ab1ec87e1084dfd8e45e5f1-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Hand of Noxus' },
        { name: 'Draven', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/374ea4cb505b1288172fd93d92064af5b7cbc298-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Glorious Executioner' },
        { name: 'Ekko', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f46b8d63d3ed969469ab6c3d3e5827a70a6e826a-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Boy Who Shattered Time' },
        { name: 'Elise', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9d7c852f03f09bd32aab843a98f3a4c371afa3ba-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Spider Queen' },
        { name: 'Evelynn', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e5cf98936e8b47a7909248518d7737dd610a137b-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Agony\'s Embrace' },
        { name: 'Fiora', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e76d371dc28d1bc79a3eb66df8597c12354cc69e-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Grand Duelist' },
        { name: 'Fizz', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d62b56e6f606e6e225a59879be46e0903a973dd0-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Tidal Trickster' },
        { name: 'Garen', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2acb7715797d4183b09fdbfb902ff52a0aa4e0cf-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Might of Demacia' },
        { name: 'Gragas', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/804047489514e31ac95e7d74878a167327021f99-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Rabble Rouser' },
        { name: 'Hecarim', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1be0f0e944bc9be2c15ebc782a3f69ea9e754499-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Shadow of War' },
        { name: 'Janna', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/51ae290a3a5b3ef613d1fbc52cb3d155c0491603-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Storm\'s Fury' },
        { name: 'Jax', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/241bbf174163f115aff498875f1aeb1ea1a65dcc-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Grandmaster at Arms' },
        { name: 'Jhin', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c7bcc3ab59371041a1035c0447fba1b4d3253d9e-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Virtuoso' },
        { name: 'Jinx', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e106881ea1263e6d13188d5d399c5b1f72849a3d-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Loose Cannon' },
        { name: 'Kai\'Sa', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/516bc1d22979ed9a290321b3474363875a3c7b10-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Daughter of the Void' },
        { name: 'Katarina', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2dc0f005113d17259f5a252f673b48195175c6ab-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Sinister Blade' },
        { name: 'Kha\'Zix', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/be64a88691695dc3b5d81f4bbbe32a617957930c-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Voidreaver' },
        { name: 'Lee Sin', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ce638264ec40c028d3355852192d8feeb969880e-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Blind Monk' },
        { name: 'LeBlanc', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/069ada8fd3eb1ee76d0b8f579655e99dddeb6874-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Deceiver' },
        { name: 'Leona', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ca5514aba585f54d0f193189d5be105a3b2bc510-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Radiant Dawn' },
        { name: 'Lux', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/4238fe90dd74b08a6e8172c31e3b1ae609afb3cd-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Lady of Luminosity' },
        { name: 'Malphite', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/afe536f3bd50d6f4862cc62dda9df824190a46f3-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Shard of the Monolith' },
        { name: 'Master Yi', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6843e7b0592caf9026f032161ddab664148a0232-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Wuju Bladesman' },
        { name: 'Miss Fortune', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/fb6f4d62835fa6e7ba97055baab49408c8c89273-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Bounty Hunter' },
        { name: 'Nami', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2988b76577008ad86a492a18ab5d206580abe21e-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Tidecaller' },
        { name: 'Nautilus', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/624a37702a1e54b5f239a40157d42f32dd853b33-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Titan of the Depths' },
        { name: 'Nidalee', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/32b6045d73da3659586c80a1b043ba3975dc97ed-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Bestial Huntress' },
        { name: 'Renekton', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d4650df7a5a7c35394ff0f861838f45028ddc247-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Butcher of the Sands' },
        { name: 'Riven', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0b9fbf46f30aa38d11f61d29430547279368c06a-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Exile' },
        { name: 'Sivir', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cae117f8c64d4354c92d32b2f02a44969c11bca0-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Battle Mistress' },
        { name: 'Sona', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8f0b8b20ffcdab53ab33314cd82ea62c2f4cd902-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Maven of the Strings' },
        { name: 'Soraka', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8a422facc9a83803afca14623ec9da507e07ee35-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Starchild' },
        { name: 'Teemo', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6fbbefbe39f97cf20befb9fafe815cafdadebb58-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Swift Scout' },
        { name: 'Thresh', role: 'Support', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dc18d5f07fcc968f28e850d46dc9632b7f8492fa-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Chain Warden' },
        { name: 'Tristana', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/03e864c901ae16c054f5afafa22b1fd68dfaf192-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Yordle Gunner' },
        { name: 'Vayne', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5312fde4581bdcab2353b9bed68b6fc3ce919501-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Night Hunter' },
        { name: 'Warwick', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a82cc4bce6d685b81bf8b31098738a0c0188335b-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Uncaged Wrath of Zaun' },
        { name: 'Yasuo', role: 'Top', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/bdbed4e6ca66f10b86f4dbc41db2d5c066ab9168-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Unforgiven' },
        { name: 'Zed', role: 'Mid', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/790ff0f287533f90d2d02132c15f54fb85394fdc-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'The Master of Shadows' }
    ],
    fr: [
        { name: 'Aatrox', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/db39563458aa28c3f3aa8990f2c964a0f7645097-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Lame des Darkin' },
    { name: 'Ahri', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/55e7e901b1f69d72804665cfbeb1f4f59c8fa877-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Renard à Neuf Queues' },
    { name: 'Akali', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/abbd173df157f943496abb0638add119f753e3b2-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Assassin Vagabond' },
    { name: 'Alistar', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/da8cefee5b85bca51360ccc1635ef5b0f6967767-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Minotaure' },
    { name: 'Amumu', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/092febba8905cff35940d036fd20b7e3ad4f428f-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Momie Mélancolique' },
    { name: 'Annie', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/220684b035ca0a0dc0d93c17ee058872d7c2a4e9-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Enfant des Ténèbres' },
    { name: 'Ashe', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6311d8de67f55496be4886a353372c8da713dade-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Archère de Givre' },
    { name: 'Azir', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1636aeb5f8d604f7d3336428918146cac62c28e7-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Empereur des Sables' },
    { name: 'Blitzcrank', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c6db939c90bf8e10b1b9baf77bc99c9bcd2d6981-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Grand Golem de Vapeur' },
    { name: 'Caitlyn', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/33eb2887813cb07d3b708800b93097a02182e98b-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Shérif de Piltover' },
    { name: 'Darius', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f606418621ccec569ab1ec87e1084dfd8e45e5f1-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Main de Noxus' },
    { name: 'Draven', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/374ea4cb505b1288172fd93d92064af5b7cbc298-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Bourreau Glorieux' },
    { name: 'Ekko', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/f46b8d63d3ed969469ab6c3d3e5827a70a6e826a-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Garçon Qui a Brisé le Temps' },
    { name: 'Elise', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9d7c852f03f09bd32aab843a98f3a4c371afa3ba-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Reine Araignée' },
    { name: 'Evelynn', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e5cf98936e8b47a7909248518d7737dd610a137b-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Étreinte de l\'Agonie' },
    { name: 'Fiora', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e76d371dc28d1bc79a3eb66df8597c12354cc69e-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Grande Duelliste' },
    { name: 'Fizz', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d62b56e6f606e6e225a59879be46e0903a973dd0-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Filou des Marées' },
    { name: 'Garen', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2acb7715797d4183b09fdbfb902ff52a0aa4e0cf-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Puissance de Demacia' },
    { name: 'Gragas', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/804047489514e31ac95e7d74878a167327021f99-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Agitateur' },
    { name: 'Hecarim', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1be0f0e944bc9be2c15ebc782a3f69ea9e754499-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Ombre de la Guerre' },
    { name: 'Janna', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/51ae290a3a5b3ef613d1fbc52cb3d155c0491603-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Fureur de la Tempête' },
    { name: 'Jax', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/241bbf174163f115aff498875f1aeb1ea1a65dcc-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Maître d\'Armes' },
    { name: 'Jhin', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/c7bcc3ab59371041a1035c0447fba1b4d3253d9e-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Virtuose' },
    { name: 'Jinx', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/e106881ea1263e6d13188d5d399c5b1f72849a3d-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Gâchette Folle' },
    { name: 'Kai\'Sa', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/516bc1d22979ed9a290321b3474363875a3c7b10-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Fille du Néant' },
    { name: 'Katarina', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2dc0f005113d17259f5a252f673b48195175c6ab-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Lame Sinistre' },
    { name: 'Kha\'Zix', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/be64a88691695dc3b5d81f4bbbe32a617957930c-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Faucheur du Néant' },
    { name: 'Lee Sin', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ce638264ec40c028d3355852192d8feeb969880e-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Moine Aveugle' },
    { name: 'LeBlanc', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/069ada8fd3eb1ee76d0b8f579655e99dddeb6874-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Trompeuse' },
    { name: 'Leona', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/ca5514aba585f54d0f193189d5be105a3b2bc510-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Aube Radieuse' },
    { name: 'Lux', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/4238fe90dd74b08a6e8172c31e3b1ae609afb3cd-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Dame de la Luminosité' },
    { name: 'Malphite', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/afe536f3bd50d6f4862cc62dda9df824190a46f3-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Éclat du Monolithe' },
    { name: 'Master Yi', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6843e7b0592caf9026f032161ddab664148a0232-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Maître Wuju' },
    { name: 'Miss Fortune', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/fb6f4d62835fa6e7ba97055baab49408c8c89273-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Chasseuse de Primes' },
    { name: 'Nami', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2988b76577008ad86a492a18ab5d206580abe21e-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Appel des Marées' },
    { name: 'Nautilus', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/624a37702a1e54b5f239a40157d42f32dd853b33-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Titan des Profondeurs' },
    { name: 'Nidalee', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/32b6045d73da3659586c80a1b043ba3975dc97ed-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Chasseresse Sauvage' },
    { name: 'Renekton', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d4650df7a5a7c35394ff0f861838f45028ddc247-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Boucher des Sables' },
    { name: 'Riven', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/0b9fbf46f30aa38d11f61d29430547279368c06a-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Exilée' },
    { name: 'Sivir', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cae117f8c64d4354c92d32b2f02a44969c11bca0-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Maîtresse de la Bataille' },
    { name: 'Sona', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8f0b8b20ffcdab53ab33314cd82ea62c2f4cd902-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Virtuose des Cordes' },
    { name: 'Soraka', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/8a422facc9a83803afca14623ec9da507e07ee35-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Enfant des Étoiles' },
    { name: 'Teemo', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6fbbefbe39f97cf20befb9fafe815cafdadebb58-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Éclaireur Véloce' },
    { name: 'Thresh', role: 'Soutien', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/dc18d5f07fcc968f28e850d46dc9632b7f8492fa-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Gardien des Chaînes' },
    { name: 'Tristana', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/03e864c901ae16c054f5afafa22b1fd68dfaf192-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Artilleuse Yordle' },
    { name: 'Vayne', role: 'ADC', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/5312fde4581bdcab2353b9bed68b6fc3ce919501-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Chasseresse Nocturne' },
    { name: 'Warwick', role: 'Jungle', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/a82cc4bce6d685b81bf8b31098738a0c0188335b-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'La Colère Sauvage de Zaun' },
    { name: 'Yasuo', role: 'Haut', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/bdbed4e6ca66f10b86f4dbc41db2d5c066ab9168-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'L\'Impardonnable' },
    { name: 'Zed', role: 'Milieu', image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/790ff0f287533f90d2d02132c15f54fb85394fdc-496x560.jpg?auto=format&fit=fill&q=80&w=420', description: 'Le Maître des Ombres' }

    ],
    default:'en',
};
  
export default championsData;