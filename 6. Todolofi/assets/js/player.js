document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const currentSong = document.getElementById('currentSong');
    const pauseButton = document.getElementById('pauseButton');
    let currentTrack = 0; // Índice da música atual
    const tracks = [
        { name: '2 de janeiro - Linearwave, FaOut', src: '/assets/sounds/2 de janeiro - Linearwave, FaOut.m4a'},
        { name: '2ois - Collateral Lab', src: '/assets/sounds/2ois - Collateral Lab.m4a'},
        { name: 'A dose of peace - DJ Lagoa', src: '/assets/sounds/a dose of peace - DJ Lagoa.m4a'},
        { name: 'A holiday trip - middt, kanves', src: '/assets/sounds/A holiday trip - middt, kanves.m4a'},
        { name: 'Abasi - Hush Child, Rebecca Mardal', src: '/assets/sounds/Abasi - Hush Child, Rebecca Mardal.m4a'},
        { name: 'About that night - Pelicano, FaOut', src: '/assets/sounds/about that night… - colours in the dark, Pelicano, FaOut.m4a'},
        { name: 'Act III - Hush Child, Rebecca Mardal', src: '/assets/sounds/Act III - Hush Child, Rebecca Mardal.m4a'},
        { name: 'Afterwards - Ricardo Schneider, Leticia Filizzola', src: '/assets/sounds/afterwards - Ricardo Schneider, Leticia Filizzola.m4a'},
        { name: 'Alissa - Igor Utzig, middt', src: '/assets/sounds/Alissa - Igor Utzig, middt.m4a'},
        { name: 'All i wanted - middt', src: '/assets/sounds/all i wanted - middt.m4a'},
        { name: 'Alma - Epifania', src: '/assets/sounds/Alma - Epifania.m4a'},
        { name: 'Alumiar - Seuab', src: '/assets/sounds/Alumiar - Seuab.m4a'},
        { name: 'Alô, tudo bem  - Mugambi, Vakyr', src:  "/assets/sounds/Alô, tudo bem  - Mu'gambi, Vakyr.m4a"},
        { name: 'Amanhã Eu Faço Festa - IzaBeats, FaOut', src: '/assets/sounds/Amanhã Eu Faço Festa - IzaBeats, FaOut.m4a'},
        { name: 'Amor Ao Sol - Damien Sebe', src: '/assets/sounds/Amor Ao Sol - Damien Sebe.m4a'},
        { name: 'Apollo - Igor Utzig, middt', src: '/assets/sounds/Apollo - Igor Utzig, middt.m4a'},
        { name: 'Aroeira - Raul Coca, Epifania, Gabriel Cavalcanti', src: '/assets/sounds/Aroeira - Raul Coca, Epifania, Gabriel Cavalcanti.m4a'},
        { name: 'Arpoador - Geezmo, IzaBeats', src: '/assets/sounds/Arpoador - Geezmo, IzaBeats.m4a'},
        { name: 'Ausência - middt', src: '/assets/sounds/Ausência - middt.m4a'},
        { name: 'Açaí - FaOut, Epifania, Gabriel Cavalcanti, Pelicano', src: '/assets/sounds/Açaí - FaOut, Epifania, Gabriel Cavalcanti, Pelicano.m4a'},
        { name: 'Balneário - ChillsmokeႿ', src: '/assets/sounds/Balneário - ChillsmokeႿ.m4a'},
        { name: 'Barra Shoreline - Rod Correa', src: '/assets/sounds/Barra Shoreline - Rod Correa.m4a'},
        { name: 'Before the sun leaves - Paulo Vaz, FaOut, Geezmo', src: '/assets/sounds/before the sun leaves - Paulo Vaz, FaOut, Geezmo.m4a'},
        { name: 'Beira Mar - Leo Franciozi', src: '/assets/sounds/Beira Mar - Leo Franciozi.m4a'},
        { name: 'Bença - Collateral Lab', src: '/assets/sounds/Bença - Collateral Lab.m4a'},
        { name: 'Bis - FaOut', src: '/assets/sounds/Bis - FaOut.m4a'},
        { name: 'Black Gold - Ricardo Schneider, Pointy Features', src: '/assets/sounds/Black Gold - Ricardo Schneider, Pointy Features.m4a'},
        { name: 'Blue eyes - Mill3ristic', src: '/assets/sounds/blue eyes - Mill3ristic.m4a'},
        { name: 'Blue Noir - Mister Decaf, Chill Select', src: '/assets/sounds/Blue Noir - Mister Decaf, Chill Select.m4a'},
        { name: 'Bom Fim - F_rlan, apollw', src: '/assets/sounds/Bom Fim - F_rlan, apollw.m4a'},
        { name: 'Bossa - LOFI LAND', src: '/assets/sounds/bossa - LOFI LAND.m4a'},
        { name: 'Bossa Boa - BekaWak', src: '/assets/sounds/Bossa Boa - BekaWak.m4a'},
        { name: 'Bossa da Vizinha - 2f U-Flow', src: '/assets/sounds/Bossa da Vizinha - Jonny Green Producer, 2f U-Flow.m4a'},
        { name: 'Bossa Hop - IzaBeats, FaOut', src: '/assets/sounds/Bossa Hop - IzaBeats, FaOut.m4a'},
        { name: 'Bossa Jam - Lynde, Teau', src: '/assets/sounds/Bossa Jam - Lynde, Teau.m4a'},
        { name: 'Bossa Para Dois - FaOut', src: '/assets/sounds/Bossa Para Dois - FaOut.m4a'},
        { name: 'Bossa Para Fernanda - Linearwave', src: '/assets/sounds/Bossa Para Fernanda - Linearwave.m4a'},
        { name: 'Bossabeat - Funkyloco', src: '/assets/sounds/Bossabeat - Funkyloco.m4a'},
        { name: 'Breath of Nature - FaOut, Miyuki Kuzuoka', src: '/assets/sounds/Breath of Nature - FaOut, Miyuki Kuzuoka, A-bug.m4a'},
        { name: 'Brisadeiro - Geezmo', src: '/assets/sounds/Brisadeiro - Geezmo.m4a'},
        { name: 'Burnquist - DJ Lagoa', src: '/assets/sounds/Burnquist - DJ Lagoa.m4a'},
        { name: 'Caipirinha - DJ Lagoa', src: '/assets/sounds/Caipirinha - DJ Lagoa.m4a'},
        { name: 'Cajá - Seuab', src: '/assets/sounds/Cajá - Seuab.m4a'},
        { name: 'Cambalear - DoisPês', src: '/assets/sounds/cambalear - DoisPês.m4a'},
        { name: 'Campeche - Ray Ben Rue', src: '/assets/sounds/Campeche - Ray Ben Rue.m4a'},
        { name: 'Candy - GAB5, Sefer Dillan', src: '/assets/sounds/candy - GAB5, Sefer Dillan.m4a'},
        { name: 'Capitão de Areia - Afterclapp', src: '/assets/sounds/Capitão de Areia - Afterclapp.m4a'},
        { name: 'Capoeira - Ricardo Schneider, FaOut', src: '/assets/sounds/Capoeira - Ricardo Schneider, FaOut.m4a'},
        { name: 'Career Mode - F_rlan, Henrique Herrera', src: '/assets/sounds/Career Mode - F_rlan, Henrique Herrera, Theo Juarez.m4a'},
        { name: 'Carmine - Nightmare Beats', src: '/assets/sounds/Carmine - Nightmare Beats.m4a'},
        { name: "Cascades - Chiccote's Beats", src: "/assets/sounds/Cascades - Chiccote's Beats.m4a"},
        { name: 'Cherish - Hush Child, OEDERA, Rebecca Mardal', src: '/assets/sounds/Cherish - Hush Child, OEDERA, Rebecca Mardal.m4a'},
        { name: "Chillin' at cosmic flight - middt", src: "/assets/sounds/chillin' at cosmic flight - middt.m4a"},
        { name: 'Chuva - Pelicano', src: '/assets/sounds/Chuva - Pelicano.m4a'},
        { name: 'Coast - H U M A', src: '/assets/sounds/Coast - H U M A.m4a'},
        { name: 'Coconut Zen - Toti Cisneros, LUXID AXID', src: '/assets/sounds/Coconut Zen - Toti Cisneros, LUXID AXID.m4a'},
        { name: 'Coffee Jam - Walter Villaça, Leo Motta', src: '/assets/sounds/Coffee Jam - Walter Villaça, Leo Motta.m4a'},
        { name: 'Confete e serpentina - LOFI LAND', src: '/assets/sounds/Confete e serpentina - LOFI LAND, FaOut, Ricardo Schneider, BOSSIFY.m4a'},
        { name: 'Connection - FaOut', src: '/assets/sounds/connection - FaOut.m4a'},
        { name: 'Contra Maré - middt, Raul Coca', src: '/assets/sounds/Contra Maré - middt, Raul Coca.m4a"'},
        { name: 'Copacabana - stumbled across', src: '/assets/sounds/Copacabana - stumbled across.m4a"'},
        { name: 'Corrupião - Seuab, AxioM-R, Nosllyah', src: '/assets/sounds/Corrupião - Seuab, AxioM-R, Nosllyah.m4a"'},
        { name: 'Cosmopolitan - Billy Wuot', src: '/assets/sounds/cosmopolitan - Billy Wuot.m4a'},
        { name: 'Cozy night - Beaumont', src: '/assets/sounds/cozy night - Beaumont.m4a'},
        { name: 'Crossing Waters - GAB5, FaOut', src: '/assets/sounds/Crossing Waters - GAB5, FaOut.m4a'},
        { name: 'Cumbuca - Collateral Lab', src: '/assets/sounds/Cumbuca - Collateral Lab.m4a'},
        { name: 'Decades has passed - FaOut, Billy Wuot', src: '/assets/sounds/decades has passed - FaOut, Billy Wuot.m4a'},
        { name: 'Deep feelings - Billy Wuot, FaOut', src: '/assets/sounds/deep feelings - Billy Wuot, FaOut.m4a'},
        { name: "Dengo - Mu'gambi, Vakyr", src: "/assets/sounds/Dengo - Mu'gambi, Vakyr.m4a"},
        { name: 'Descending - H U M A', src: '/assets/sounds/Descending - H U M A.m4a'},
        { name: 'Dia de Praia - colours in the dark', src: '/assets/sounds/Dia de Praia - colours in the dark.m4a'},
        { name: 'Dia De Praia - Teau, Charry, himood', src: '/assets/sounds/Dia De Praia - Teau, Charry, himood.m4a'},
        { name: 'Diga - Leo Low Pass', src: '/assets/sounds/Diga - Leo Low Pass.m4a'},
        { name: 'Do Rio à Salvador - Toti Cisneros', src: '/assets/sounds/Do Rio à Salvador - Toti Cisneros.m4a'},
        { name: 'Domingo de Sol - colours in the dark', src: '/assets/sounds/Domingo de Sol - colours in the dark, IzaBeats.m4a'},
        { name: 'Dusk - Pecun, O F F', src: '/assets/sounds/dusk - Pecun, O F F.m4a'},
        { name: 'Early Bird - Pelicano, DJ Lagoa', src: '/assets/sounds/Early Bird - Pelicano, DJ Lagoa.m4a'},
        { name: 'Ela - GAB5', src: '/assets/sounds/Ela - GAB5.m4a'},
        { name: 'Endless - Rebecca Mardal', src: '/assets/sounds/endless - Rebecca Mardal.m4a'},
        { name: 'Endless Possibilities - Toe', src: '/assets/sounds/Endless Possibilities - Toe.m4a'},
        { name: 'Essa Bossa aí - 2f U-Flow, Astronaut Monkey', src: '/assets/sounds/Essa Bossa aí - 2f U-Flow, Astronaut Monkey.m4a'},
        { name: 'Essa Bossa aí 2 - 2f U-Flow, Astronaut Monkey, MounQ, FaOut', src: '/assets/sounds/Essa Bossa aí 2 - 2f U-Flow, Astronaut Monkey, MounQ, FaOut.m4a'},
        { name: 'Essa Bossa aí 3 - 2f U-Flow, Astronaut Monkey, Ciro Daniel', src: '/assets/sounds/Essa Bossa aí 3 - 2f U-Flow, Astronaut Monkey, Ciro Daniel.m4a'},
        { name: 'Falling stars - Pelicano, FaOut', src: '/assets/sounds/falling stars - Pelicano, FaOut.m4a'},
        { name: 'Farol - tatuí.m4a', src: '/assets/sounds/Farol - tatuí.m4a'},
        { name: 'Fim de Tarde - GAB5', src: '/assets/sounds/Fim de Tarde - GAB5.m4a'},
        { name: 'Flor de Cosmos - Pitaya Kush', src: '/assets/sounds/Flor de Cosmos - Pitaya Kush, Toti Cisneros, Raul Coca.m4a'},
        { name: 'Flores pra você - Geezmo', src: '/assets/sounds/Flores pra você - Geezmo.m4a'},
        { name: 'Floripa - Ray Ben Rue', src: '/assets/sounds/Floripa - Ray Ben Rue.m4a'},
        { name: 'Flowering - Stapes', src: '/assets/sounds/Flowering - Stapes.m4a'},
        { name: 'Fresh - tatuí', src: '/assets/sounds/Fresh - tatuí.m4a'},
        { name: 'Fresh Start - tatuí', src: '/assets/sounds/Fresh Start - tatuí.m4a'},
        { name: 'Gaviota - kanves', src: '/assets/sounds/gaviota - kanves.m4a'},
        { name: 'Ginga - LOFI LAND, BOSSIFY', src: '/assets/sounds/Ginga - LOFI LAND, BOSSIFY.m4a'},
        { name: 'Gingado - liia, Linearwave, FaOut', src: '/assets/sounds/Gingado - liia, Linearwave, FaOut.m4a'},
        { name: 'Girl from Somewhere - Kilamdapro', src: '/assets/sounds/Girl from Somewhere - Kilamdapro.m4a'},
        { name: 'Good morning - GAB5', src: '/assets/sounds/good morning - GAB5.m4a'},
        { name: 'Good vibe inc - Linearwave', src: '/assets/sounds/good vibe inc - Linearwave.m4a'},
        { name: "Grandma's house - GAB5", src: "/assets/sounds/grandma's house - GAB5.m4a"},
        { name: 'Graviola - Leo Low Pass', src: '/assets/sounds/Graviola - Leo Low Pass.m4a'},
        { name: 'Grenache - BugigangaZ', src: '/assets/sounds/Grenache - BugigangaZ.m4a'},
        { name: "Hangout - Mu'gambi, Vakyr", src: "/assets/sounds/Hangout - Mu'gambi, Vakyr.m4a"},
        { name: 'Hoje eu vou chegar mais tarde - GAB5', src: '/assets/sounds/Hoje eu vou chegar mais tarde - GAB5.m4a'},
        { name: 'How to keep my heart open. - Gabriel Cavalcanti', src: '/assets/sounds/how to keep my heart open. - Gabriel Cavalcanti.m4a'},
        { name: "I'm sorry - Miyuki Kuzuoka", src: "/assets/sounds/i'm sorry - Miyuki Kuzuoka.m4a"},
        { name: 'Idas e vindas - apollw, IanYS', src: '/assets/sounds/idas e vindas - apollw, IanYS.m4a'},
        { name: 'In space - Pelicano', src: '/assets/sounds/in space - Pelicano.m4a'},
        { name: 'In street - GAB5, chillkush', src: '/assets/sounds/in street - GAB5, chillkush.m4a'},
        { name: 'In The Dust - Chill Select, Solrakmi', src: '/assets/sounds/In The Dust - Chill Select, Solrakmi.m4a'},
        { name: 'Indaiá - Deusdosol, Ricardo Schneider', src: '/assets/sounds/Indaiá - Deusdosol, Ricardo Schneider.m4a'},
        { name: 'Interstellar - colours in the dark, FaOut', src: '/assets/sounds/interstellar - colours in the dark, FaOut.m4a'},
        { name: 'Ipanema - Linearwave', src: '/assets/sounds/Ipanema - Linearwave.m4a'},
        { name: 'Island Delfino - Tottsea, Jason Masoud', src: '/assets/sounds/Island Delfino - Tottsea, Jason Masoud.m4a'},
        { name: "It's a vibe - Geezmo, IzaBeats", src: "/assets/sounds/It's a vibe - Geezmo, IzaBeats.m4a"},
        { name: "It's all about the journey - Pelicano", src: "/assets/sounds/it's all about the journey - Pelicano.m4a"},
        { name: 'Jasmim - Linearwave', src: '/assets/sounds/jasmim - Linearwave.m4a'},
        { name: 'Just have no fear - mockfly', src: '/assets/sounds/just have no fear - mockfly.m4a'},
        { name: 'Kabaluerê - FaOut, Ricardo Schneider, Linearwave', src: '/assets/sounds/Kabaluerê - FaOut, Ricardo Schneider, Linearwave.m4a'},
        { name: 'Landscape - Linearwave, tatuí', src: '/assets/sounds/Landscape - Linearwave, tatuí.m4a'},
        { name: "Lazy Morning - Mu'gambi", src: "/assets/sounds/Lazy Morning - Mu'gambi.m4a"},
        { name: 'Lazy Sunday - A-bug', src: '/assets/sounds/Lazy Sunday - A-bug.m4a'},
        { name: 'Lazy winter days - middt, kanves', src: '/assets/sounds/lazy winter days - middt, kanves.m4a'},
        { name: 'Learning to dream again. - AuraBeats, Geezmo', src: '/assets/sounds/learning to dream again. - AuraBeats, Geezmo.m4a'},
        { name: 'Letter for Rod - Linearwave, IzaBeats, FaOut', src: '/assets/sounds/Letter for Rod - Linearwave, IzaBeats, FaOut.m4a'},
        { name: "Lis - Mu'gambi", src: "/assets/sounds/Lis - Mu'gambi.m4a"},
        { name: 'Lost in malaysia - GAB5', src: '/assets/sounds/lost in malaysia - GAB5.m4a'},
        { name: 'Lua - Leo Low Pass', src: '/assets/sounds/Lua - Leo Low Pass.m4a'},
        { name: 'Mais uma vez - FaOut, Epifania', src: '/assets/sounds/Mais uma vez - FaOut, Epifania.m4a'},
        { name: 'Makings of You - Maramice', src: '/assets/sounds/Makings of You - Maramice.m4a'},
        { name: 'Mallorca - Carabide, Charry, himood', src: '/assets/sounds/Mallorca - Carabide, Charry, himood.m4a'},
        { name: 'Mandei msg. (no voices) - GAB5, P4ULINHO', src: '/assets/sounds/mandei msg. (no voices) - GAB5, P4ULINHO.m4a'},
        { name: 'Mandei msg. - GAB5, P4ULINHO', src: '/assets/sounds/mandei msg. - GAB5, P4ULINHO.m4a'},
        { name: 'Manguinhos - rogerpin', src: '/assets/sounds/Manguinhos - rogerpin.m4a'},
        { name: 'Mania De Você - lofi - FaOut', src: '/assets/sounds/Mania De Você - lofi - FaOut.m4a'},
        { name: "Medo Bobo - Instrumental - Mu'gambi", src: "/assets/sounds/Medo Bobo - Instrumental - Mu'gambi.m4a"},
        { name: 'Meio-dia - LOFI LAND, BOSSIFY', src: '/assets/sounds/Meio-dia - LOFI LAND, BOSSIFY.m4a'},
        { name: 'Meu Canto - liia, Epifania, Epílogo', src: '/assets/sounds/Meu Canto - liia, Epifania, Epílogo.m4a'},
        { name: 'Meu Mar - Miyuki Kuzuoka', src: '/assets/sounds/Meu Mar - Miyuki Kuzuoka.m4a'},
        { name: 'Meu Sonho - FaOut', src: '/assets/sounds/Meu Sonho - FaOut.m4a'},
        { name: "Midnight Cruisin' - Igor Utzig", src: "/assets/sounds/Midnight Cruisin' - Igor Utzig.m4a"},
        { name: 'Midsummer - MFakka, S I M', src: '/assets/sounds/Midsummer - MFakka, S I M.m4a'},
        { name: 'Miss Those Days - FaOut, Calvin Bennett', src: '/assets/sounds/Miss Those Days - FaOut, Calvin Bennett.m4a'},
        { name: 'Movimento - Stuffed Tomato, Chill Select', src: '/assets/sounds/Movimento - Stuffed Tomato, Chill Select.m4a'},
        { name: 'Movin’ forward - the.lazyb, Ricardo Schneider', src: '/assets/sounds/movin’ forward - the.lazyb, Ricardo Schneider.m4a'},
        { name: 'Muito Louco - LOFI LAND, Cesar Assolant', src: '/assets/sounds/Muito Louco - LOFI LAND, Cesar Assolant.m4a'},
        { name: 'My Own Reflection - Pelicano', src: '/assets/sounds/My Own Reflection - Pelicano.m4a'},
        { name: 'Nebula Dive - Raul Coca', src: '/assets/sounds/Nebula Dive - Raul Coca.m4a'},
        { name: 'Night Cafe - Kind Puppy, Chill Select', src: '/assets/sounds/Night Cafe - Kind Puppy, Chill Select.m4a'},
        { name: 'Nossa Bossa - Avant-R, rober', src: '/assets/sounds/Nossa Bossa - Avant-R, rober.m4a'},
        { name: 'Não vá embora - middt', src: '/assets/sounds/Não vá embora - middt.m4a'},
        { name: 'O bêbado e a equilibrista - Gabriel Cavalcanti', src: '/assets/sounds/O bêbado e a equilibrista - Gabriel Cavalcanti.m4a'},
        { name: 'Obrigada - Yellow Lime, Sella Vie, himood', src: '/assets/sounds/Obrigada - Yellow Lime, Sella Vie, himood.m4a'},
        { name: 'Old Road Again - F_rlan', src: '/assets/sounds/Old Road Again - F_rlan.m4a'},
        { name: 'Onda Linear - FaOut', src: '/assets/sounds/Onda Linear - FaOut.m4a'},
        { name: 'Onde Anda Você - lo-fi version - Linearwave, Tutz', src: '/assets/sounds/Onde Anda Você - lo-fi version - Linearwave, Tutz.m4a'},
        { name: "One Step at a Time - Mu'gambi", src: "/assets/sounds/One Step at a Time - Mu'gambi.m4a"},
        { name: "Optchá - Mu'gambi", src: "/assets/sounds/Optchá - Mu'gambi.m4a"},
        { name: 'Orelhão - LOFI LAND, BOSSIFY', src: '/assets/sounds/Orelhão - LOFI LAND, BOSSIFY.m4a'},
        { name: 'Our feeling - Billy Wuot', src: '/assets/sounds/our feeling - Billy Wuot.m4a'},
        { name: 'Our first trip to Rio - Geezmo', src: '/assets/sounds/Our first trip to Rio - Geezmo.m4a'},
        { name: 'Outside - FaOut', src: '/assets/sounds/Outside - FaOut.m4a'},
        { name: 'Pacific Ocean - Geezmo, AuraBeats', src: '/assets/sounds/Pacific Ocean - Geezmo, AuraBeats.m4a'},
        { name: 'Palermo Soho - tatuí, Ricardo Schneider', src: '/assets/sounds/Palermo Soho - tatuí, Ricardo Schneider.m4a'},
        { name: 'Palm Springs - cozy', src: '/assets/sounds/Palm Springs - cozy.m4a'},
        { name: 'Peace - GAB5', src: '/assets/sounds/peace - GAB5.m4a'},
        { name: 'Perspective - CaliCronk, middt', src: '/assets/sounds/Perspective - CaliCronk, middt.m4a'},
        { name: 'Pertinho de Você (Just for You) - middt', src: '/assets/sounds/Pertinho de Você (Just for You) - middt.m4a'},
        { name: 'Picolé - LOFI LAND, BOSSIFY, Peter Loo', src: '/assets/sounds/Picolé - LOFI LAND, BOSSIFY, Peter Loo.m4a'},
        { name: 'Pouso das Gaivotas - Superego, Benkes', src: '/assets/sounds/Pouso das Gaivotas - Superego, Benkes.m4a'},
        { name: 'Pra Gringo é Mais Caro - Geezmo', src: '/assets/sounds/Pra Gringo é Mais Caro - Geezmo.m4a'},
        { name: "Pra Quem Não Esqueceu - Mu'gambi, Expedidor", src: "/assets/sounds/Pra Quem Não Esqueceu - Mu'gambi, Expedidor.m4a"},
        { name: 'Praia do sono - tatuí', src: '/assets/sounds/praia do sono - tatuí.m4a'},
        { name: 'Prece - Ricardo Schneider, Geezmo', src: '/assets/sounds/Prece - Ricardo Schneider, Geezmo.m4a'},
        { name: 'Preciso me encontrar, Lofi - Linearwave', src: '/assets/sounds/Preciso me encontrar Lofi - Linearwave, LOFI LAND, copycat.m4a'},
        { name: 'Pure Magic - Deep In A Dream', src: '/assets/sounds/Pure Magic - Deep In A Dream.m4a'},
        { name: 'Puzzling - Devon Rea, Idepen', src: '/assets/sounds/Puzzling - Devon Rea, Idepen.m4a'},
        { name: "Pôr do Sol - Chiccote's Beats, Linearwave", src: "/assets/sounds/Pôr do Sol - Chiccote's Beats, Linearwave.m4a"},
        { name: 'Pôr do Sol - Stapes', src: '/assets/sounds/Pôr do Sol - Stapes.m4a'},
        { name: "Quiet nights - Skeptika, Louie's Tapes", src: "/assets/sounds/quiet nights - Skeptika, Louie's Tapes.m4a"},
        { name: 'Rainforest - Ricardo Schneider, Geezmo', src: '/assets/sounds/rainforest - Ricardo Schneider, Geezmo.m4a'},
        { name: 'Raqueta - DoisPês', src: '/assets/sounds/raqueta - DoisPês.m4a'},
        { name: 'Reflorescer - FaOut, colours in the dark', src: '/assets/sounds/Reflorescer - FaOut, colours in the dark.m4a'},
        { name: 'Resilience - Collectively Alone', src: '/assets/sounds/Resilience - Collectively Alone.m4a'},
        { name: 'Retro Club - Macca Beats, Fabled Choice', src: '/assets/sounds/Retro Club - Macca Beats, Fabled Choice.m4a'},
        { name: 'Rio de Janeiro - FaOut', src: '/assets/sounds/Rio de Janeiro - FaOut.m4a'},
        { name: 'Rio Night Ride - FaOut, Epifania', src: '/assets/sounds/Rio Night Ride - FaOut, Epifania.m4a'},
        { name: 'Rio State of Mind - wavvzz', src: '/assets/sounds/Rio State of Mind - wavvzz.m4a'},
        { name: 'Rio, 2 30am - tatuí', src: '/assets/sounds/Rio, 2 30am - tatuí.m4a'},
        { name: 'Road Trip - Moai Beats', src: '/assets/sounds/Road Trip - Moai Beats.m4a'},
        { name: 'Sabor de la Selva - Chill Ghost, Siesta', src: '/assets/sounds/Sabor de la Selva - Chill Ghost, Siesta.m4a'},
        { name: 'Samba da benção - Lofi - IzaBeats', src: '/assets/sounds/Samba da benção - Lofi - IzaBeats.m4a'},
        { name: "Samba de Fim de Tarde - Mu'gambi, Vakyr", src: "/assets/sounds/Samba de Fim de Tarde - Mu'gambi, Vakyr.m4a"},
        { name: 'Samba Havaiano - NeBULA Inc', src: '/assets/sounds/Samba Havaiano - NeBULA Inc.m4a'},
        { name: 'Sambinha - LOFI LAND, Leck Gomes', src: '/assets/sounds/Sambinha - LOFI LAND, Leck Gomes, BOSSIFY.m4a'},
        { name: 'Sandalo - Jonny Green Producer, 2f U-Flow', src: '/assets/sounds/Sandalo - Jonny Green Producer, 2f U-Flow.m4a'},
        { name: 'Santos (pa parara pa) - apollw', src: '/assets/sounds/santos (pa parara pa) - apollw.m4a'},
        { name: 'Saturnal Blues - middt, Steve Nguyen', src: '/assets/sounds/Saturnal Blues - middt, Steve Nguyen.m4a'},
        { name: 'Saudade - FaOut, Miyuki Kuzuoka', src: '/assets/sounds/Saudade - FaOut, Miyuki Kuzuoka.m4a'},
        { name: 'Saudade de Ver as Ondas do Mar de Pertinho', src: '/assets/sounds/Saudade de Ver as Ondas do Mar de Pertinho - apollw.m4a'},
        { name: 'Sentosa - Steve Nguyen, Ricardo Schneider', src: '/assets/sounds/Sentosa - Steve Nguyen, Ricardo Schneider.m4a'},
        { name: 'Serenata - Seuab', src: '/assets/sounds/Serenata - Seuab.m4a'},
        { name: 'Singela canção brasileira - IzaBeats', src: '/assets/sounds/Singela canção brasileira - IzaBeats.m4a'},
        { name: 'Single Fin - tatuí', src: '/assets/sounds/Single Fin - tatuí.m4a'},
        { name: "Slightly - Mu'gambi, Vakyr", src: "/assets/sounds/Slightly - Mu'gambi, Vakyr.m4a"},
        { name: 'Smelling the Roses - middt, Igor Utzig', src: '/assets/sounds/Smelling the Roses - middt, Igor Utzig.m4a'},
        { name: 'Smooth Talk - Paulo Vaz', src: '/assets/sounds/Smooth Talk - Paulo Vaz, FaOut, Ricardo Schneider.m4a'},
        { name: "Soothing Bossa - Gerold Kukulenz Chillin", src: "/assets/sounds/Soothing Bossa - Gerold Kukulenz Chillin' Beats, Jens Hausmann.m4a"},
        { name: "Soul's Nest - Mattari, Ricardo Schneider", src: "/assets/sounds/Soul's Nest - Mattari, Ricardo Schneider, FaOut.m4a"},
        { name: 'Sovereign - UKDD, Maadrhino', src: '/assets/sounds/sovereign - UKDD, Maadrhino.m4a'},
        { name: 'Starry dawns - GAB5, Billy Wuot', src: '/assets/sounds/starry dawns - GAB5, Billy Wuot.m4a'},
        { name: 'Stop! - ChillsmokeႿ', src: '/assets/sounds/stop! - ChillsmokeႿ.m4a'},
        { name: 'Storm - DJ Lagoa, Pelicano', src: '/assets/sounds/Storm - DJ Lagoa, Pelicano.m4a'},
        { name: 'Subaquatic - Raul Coca, middt', src: '/assets/sounds/Subaquatic - Raul Coca, middt.m4a'},
        { name: 'Sunrise - Epifania, FaOut', src: '/assets/sounds/Sunrise - Epifania, FaOut.m4a'},
        { name: 'Sunset - HBeat, JazzyHan', src: '/assets/sounds/Sunset - HBeat, JazzyHan.m4a'},
        { name: 'Sunset Cove - FaOut, Mattari', src: '/assets/sounds/Sunset Cove - FaOut, Mattari.m4a'},
        { name: 'Sunsets - Ricardo Schneider, Rebecca Mardal', src: '/assets/sounds/Sunsets - Ricardo Schneider, Rebecca Mardal, Hoffy Beats.m4a'},
        { name: 'Sunshiny - middt', src: '/assets/sounds/sunshiny - middt.m4a'},
        { name: 'Sussa - F_rlan', src: '/assets/sounds/Sussa - F_rlan.m4a'},
        { name: 'Só Sei Dançar Com Você - GabrielMzero', src: '/assets/sounds/Só Sei Dançar Com Você - GabrielMzero.m4a'},
        { name: 'The bass song 001 - GAB5', src: '/assets/sounds/the bass song 001 - GAB5.m4a'},
        { name: 'The blue dragonfly sidequest. - Pelicano', src: '/assets/sounds/the blue dragonfly sidequest. - Pelicano, Gabriel Cavalcanti.m4a'},
        { name: 'The last day of travel - DJ Lagoa', src: '/assets/sounds/the last day of travel - DJ Lagoa.m4a'},
        { name: 'The Misty Pond - ChillsmokeႿ', src: '/assets/sounds/The Misty Pond - ChillsmokeႿ, DJ Lagoa.m4a'},
        { name: 'Thunderstorm - middt,', src: '/assets/sounds/thunderstorm - middt, kanves.m4a'},
        { name: 'To The Fullest - Simber, Solrakmi', src: '/assets/sounds/To The Fullest - Simber, Solrakmi, Chill Select.m4a'},
        { name: 'Trem 76 - Superego, Gabriel Cavalcanti', src: '/assets/sounds/Trem 76 - Superego, Gabriel Cavalcanti.m4a'},
        { name: 'Trindade - Ricardo Schneider', src: '/assets/sounds/Trindade - Ricardo Schneider, Gabriel Cavalcanti.m4a'},
        { name: 'Tropical Bliss - Xiss', src: '/assets/sounds/Tropical Bliss - Xiss, RSR Beats.m4a'},
        { name: 'Untitled #3 - colours in the dark', src: '/assets/sounds/Untitled #3 - colours in the dark, Linearwave.m4a'},
        { name: 'Untitled (Head) - Collateral Lab', src: '/assets/sounds/Untitled (Head) - Collateral Lab.m4a'},
        { name: 'Urban blue - Pelicano', src: '/assets/sounds/urban blue - Pelicano.m4a'},
        { name: 'Urban night - IzaBeats, Ricardo Schneider', src: '/assets/sounds/Urban night - IzaBeats, Ricardo Schneider.m4a'},
        { name: "", src: "/assets/sounds/Urca's sunset - Rod Correa.m4a"},
        { name: "Urca's sunset - Rod Correa", src: "/assets/sounds/Velut Luna - Mu'gambi, Epifania.m4a"},
        { name: 'Vendo Ela Sambar - Pecun', src: '/assets/sounds/Vendo Ela Sambar - Pecun.m4a'},
        { name: 'Vergamota - Ray Ben Rue', src: '/assets/sounds/Vergamota - Ray Ben Rue.m4a'},
        { name: 'Você E Eu - Myríad', src: '/assets/sounds/Você E Eu - Myríad.m4a'},
        { name: 'Warm Waves - Kiabits, Ramon Riera, Danonthestrings', src: '/assets/sounds/Warm Waves - Kiabits, Ramon Riera, Danonthestrings.m4a'},
        { name: 'When It Rains - Saib', src: '/assets/sounds/When It Rains - Saib.m4a'},
        { name: 'When The Sun Goes Down - Igor Utzig', src: '/assets/sounds/When The Sun Goes Down - Igor Utzig.m4a'},
        { name: 'Why waste time  - GAB5, Ricardo Schneider', src: '/assets/sounds/why waste time  - GAB5, Ricardo Schneider.m4a'},
        { name: 'Xote Hop - Seuab', src: '/assets/sounds/Xote Hop - Seuab.m4a'},
        { name: "Youth - Skeptika, Louie's Tapes", src: "/assets/sounds/youth - Skeptika, Louie's Tapes.m4a"},
        { name: "Zero - lofi - FaOut, Mu'gambi", src: "/assets/sounds/Zero - lofi - FaOut, Mu'gambi.m4a"},
        { name: 'À beira mar - GAB5, Maury', src: '/assets/sounds/à beira mar - GAB5, Maury.m4a'},
        { name: 'Água de beber - Lofi - Ricardo Schneider, FaOut', src: '/assets/sounds/Água de beber - Lofi - Ricardo Schneider, FaOut.m4a'},
    ];
    function loadTrack(trackIndex) {
        const track = tracks[trackIndex];
        audioPlayer.src = track.src;
        currentSong.textContent = track.name;
    }
    function playTrack() {
        audioPlayer.play();
        playButton.style.display = 'none';
        pauseButton.style.display = 'flex';
    }
    function pauseTrack() {
        audioPlayer.pause();
        playButton.style.display = 'flex';
        pauseButton.style.display = 'none';
    }
    playButton.addEventListener('click', function() {
        if (audioPlayer.paused) {
            playTrack();
        } else {
            pauseTrack();
        }
    });
    pauseButton.addEventListener('click', function() {
        pauseTrack();
    });
    nextButton.addEventListener('click', function() {
        currentTrack = (currentTrack + 1) % tracks.length;
        loadTrack(currentTrack);
        playTrack();
    });
    prevButton.addEventListener('click', function() {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrack);
        playTrack();
    });
    loadTrack(currentTrack);
});