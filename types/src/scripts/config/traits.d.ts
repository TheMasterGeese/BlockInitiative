import { AlignmentTrait } from "@actor/creature/types";
import { OtherArmorTag } from "@item/armor/types";
import { ClassTrait } from "@item/class/data";
import { OtherEquipmentTag } from "@item/equipment/types";
import { PreciousMaterialType } from "@item/physical/types";
import { MagicSchool, MagicTradition } from "@item/spell/types";
import { OtherWeaponTag } from "@item/weapon/types";
declare const ancestryTraits: {
    "half-elf": string;
    "half-orc": string;
    aasimar: string;
    aberration: string;
    anadi: string;
    android: string;
    aphorite: string;
    automaton: string;
    azarketi: string;
    beastkin: string;
    catfolk: string;
    changeling: string;
    conrasu: string;
    dhampir: string;
    duskwalker: string;
    dwarf: string;
    elf: string;
    fetchling: string;
    fleshwarp: string;
    ganzi: string;
    geniekin: string;
    gnoll: string;
    gnome: string;
    goblin: string;
    goloma: string;
    grippli: string;
    halfling: string;
    hobgoblin: string;
    human: string;
    ifrit: string;
    kitsune: string;
    kobold: string;
    leshy: string;
    lizardfolk: string;
    orc: string;
    oread: string;
    poppet: string;
    ratfolk: string;
    shisk: string;
    shoony: string;
    skeleton: string;
    sprite: string;
    strix: string;
    suli: string;
    sylph: string;
    tengu: string;
    tiefling: string;
    undine: string;
};
declare const ancestryItemTraits: {
    amphibious: string;
    fey: string;
    fungus: string;
    humanoid: string;
    plant: string;
    "half-elf": string;
    "half-orc": string;
    aasimar: string;
    aberration: string;
    anadi: string;
    android: string;
    aphorite: string;
    automaton: string;
    azarketi: string;
    beastkin: string;
    catfolk: string;
    changeling: string;
    conrasu: string;
    dhampir: string;
    duskwalker: string;
    dwarf: string;
    elf: string;
    fetchling: string;
    fleshwarp: string;
    ganzi: string;
    geniekin: string;
    gnoll: string;
    gnome: string;
    goblin: string;
    goloma: string;
    grippli: string;
    halfling: string;
    hobgoblin: string;
    human: string;
    ifrit: string;
    kitsune: string;
    kobold: string;
    leshy: string;
    lizardfolk: string;
    orc: string;
    oread: string;
    poppet: string;
    ratfolk: string;
    shisk: string;
    shoony: string;
    skeleton: string;
    sprite: string;
    strix: string;
    suli: string;
    sylph: string;
    tengu: string;
    tiefling: string;
    undine: string;
};
declare const elementalTraits: {
    air: string;
    earth: string;
    fire: string;
    water: string;
};
declare const energyDamageTypes: {
    acid: string;
    cold: string;
    electricity: string;
    fire: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
};
declare const magicTraditions: Record<MagicTradition, string>;
declare const creatureTraits: {
    aberration: string;
    aeon: string;
    aesir: string;
    agathion: string;
    alchemical: string;
    angel: string;
    animal: string;
    anugobu: string;
    aquatic: string;
    archon: string;
    astral: string;
    asura: string;
    azata: string;
    beast: string;
    boggard: string;
    caligni: string;
    celestial: string;
    "charau-ka": string;
    clockwork: string;
    construct: string;
    couatl: string;
    daemon: string;
    darvakka: string;
    demon: string;
    dero: string;
    devil: string;
    dinosaur: string;
    div: string;
    dragon: string;
    dream: string;
    drow: string;
    duergar: string;
    duskwalker: string;
    eidolon: string;
    elemental: string;
    ethereal: string;
    evocation: string;
    fiend: string;
    formian: string;
    fungus: string;
    genie: string;
    ghoran: string;
    ghost: string;
    ghoul: string;
    ghul: string;
    giant: string;
    golem: string;
    gremlin: string;
    grioth: string;
    grippli: string;
    hag: string;
    hantu: string;
    herald: string;
    humanoid: string;
    ifrit: string;
    ikeshti: string;
    illusion: string;
    incorporeal: string;
    inevitable: string;
    kami: string;
    kovintus: string;
    light: string;
    locathah: string;
    mental: string;
    merfolk: string;
    mindless: string;
    minion: string;
    monitor: string;
    morlock: string;
    mortic: string;
    mummy: string;
    munavri: string;
    mutant: string;
    nagaji: string;
    nymph: string;
    oni: string;
    ooze: string;
    orc: string;
    oread: string;
    paaridar: string;
    petitioner: string;
    phantom: string;
    protean: string;
    psychopomp: string;
    qlippoth: string;
    rakshasa: string;
    reflection: string;
    sahkil: string;
    samsaran: string;
    "sea devil": string;
    serpentfolk: string;
    seugathi: string;
    shabti: string;
    shadow: string;
    shobhad: string;
    siktempora: string;
    skeleton: string;
    skelm: string;
    skulk: string;
    soulbound: string;
    spirit: string;
    spriggan: string;
    stheno: string;
    summoned: string;
    swarm: string;
    sylph: string;
    tane: string;
    tanggal: string;
    tengu: string;
    time: string;
    titan: string;
    troll: string;
    troop: string;
    undead: string;
    undine: string;
    urdefhan: string;
    vampire: string;
    vanara: string;
    velstrac: string;
    vishkanya: string;
    wayang: string;
    werecreature: string;
    wight: string;
    wraith: string;
    wyrwood: string;
    xulgath: string;
    zombie: string;
    arcane: string;
    divine: string;
    occult: string;
    primal: string;
    acid: string;
    cold: string;
    electricity: string;
    fire: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    air: string;
    earth: string;
    water: string;
    amphibious: string;
    fey: string;
    plant: string;
    "half-elf": string;
    "half-orc": string;
    aasimar: string;
    anadi: string;
    android: string;
    aphorite: string;
    automaton: string;
    azarketi: string;
    beastkin: string;
    catfolk: string;
    changeling: string;
    conrasu: string;
    dhampir: string;
    dwarf: string;
    elf: string;
    fetchling: string;
    fleshwarp: string;
    ganzi: string;
    geniekin: string;
    gnoll: string;
    gnome: string;
    goblin: string;
    goloma: string;
    halfling: string;
    hobgoblin: string;
    human: string;
    kitsune: string;
    kobold: string;
    leshy: string;
    lizardfolk: string;
    poppet: string;
    ratfolk: string;
    shisk: string;
    shoony: string;
    sprite: string;
    strix: string;
    suli: string;
    tiefling: string;
};
declare const classTraits: Record<ClassTrait, string>;
declare const spellOtherTraits: {
    amp: string;
    attack: string;
    auditory: string;
    aura: string;
    beast: string;
    cantrip: string;
    composition: string;
    concentrate: string;
    consecration: string;
    contingency: string;
    curse: string;
    cursebound: string;
    darkness: string;
    death: string;
    detection: string;
    disease: string;
    dream: string;
    eidolon: string;
    emotion: string;
    extradimensional: string;
    fear: string;
    fortune: string;
    fungus: string;
    healing: string;
    hex: string;
    incapacitation: string;
    incarnate: string;
    incorporeal: string;
    inhaled: string;
    light: string;
    linguistic: string;
    litany: string;
    metamagic: string;
    mindless: string;
    misfortune: string;
    morph: string;
    move: string;
    nonlethal: string;
    olfactory: string;
    plant: string;
    poison: string;
    polymorph: string;
    possession: string;
    prediction: string;
    psyche: string;
    revelation: string;
    scrying: string;
    shadow: string;
    sleep: string;
    stance: string;
    summoned: string;
    teleportation: string;
    "true-name": string;
    visual: string;
};
declare const alignmentTraits: Record<AlignmentTrait, string>;
declare const damageTraits: {
    light: string;
    magical: string;
    mental: string;
    nonlethal: string;
    plant: string;
    radiation: string;
    acid: string;
    cold: string;
    electricity: string;
    fire: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    air: string;
    earth: string;
    water: string;
    chaotic: string;
    lawful: string;
    good: string;
    evil: string;
};
declare const magicSchools: Record<MagicSchool, string>;
declare const spellTraits: {
    amp: string;
    attack: string;
    auditory: string;
    aura: string;
    beast: string;
    cantrip: string;
    composition: string;
    concentrate: string;
    consecration: string;
    contingency: string;
    curse: string;
    cursebound: string;
    darkness: string;
    death: string;
    detection: string;
    disease: string;
    dream: string;
    eidolon: string;
    emotion: string;
    extradimensional: string;
    fear: string;
    fortune: string;
    fungus: string;
    healing: string;
    hex: string;
    incapacitation: string;
    incarnate: string;
    incorporeal: string;
    inhaled: string;
    light: string;
    linguistic: string;
    litany: string;
    metamagic: string;
    mindless: string;
    misfortune: string;
    morph: string;
    move: string;
    nonlethal: string;
    olfactory: string;
    plant: string;
    poison: string;
    polymorph: string;
    possession: string;
    prediction: string;
    psyche: string;
    revelation: string;
    scrying: string;
    shadow: string;
    sleep: string;
    stance: string;
    summoned: string;
    teleportation: string;
    "true-name": string;
    visual: string;
    arcane: string;
    divine: string;
    occult: string;
    primal: string;
    abjuration: string;
    conjuration: string;
    divination: string;
    enchantment: string;
    evocation: string;
    illusion: string;
    necromancy: string;
    transmutation: string;
    air: string;
    earth: string;
    fire: string;
    water: string;
    magical: string;
    mental: string;
    radiation: string;
    acid: string;
    cold: string;
    electricity: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    chaotic: string;
    lawful: string;
    good: string;
    evil: string;
    alchemist: string;
    barbarian: string;
    bard: string;
    champion: string;
    cleric: string;
    druid: string;
    fighter: string;
    gunslinger: string;
    inventor: string;
    investigator: string;
    magus: string;
    monk: string;
    oracle: string;
    psychic: string;
    ranger: string;
    rogue: string;
    sorcerer: string;
    summoner: string;
    swashbuckler: string;
    thaumaturge: string;
    witch: string;
    wizard: string;
};
declare const weaponTraits: {
    alchemical: string;
    agile: string;
    artifact: string;
    "attached-to-shield": string;
    "attached-to-crossbow-or-firearm": string;
    auditory: string;
    backstabber: string;
    backswing: string;
    bomb: string;
    "capacity-3": string;
    "capacity-4": string;
    "capacity-5": string;
    charm: string;
    climbing: string;
    clockwork: string;
    cobbled: string;
    combination: string;
    concealable: string;
    concentrate: string;
    concussive: string;
    consumable: string;
    "critical-fusion": string;
    cursed: string;
    "deadly-d6": string;
    "deadly-d8": string;
    "deadly-2d8": string;
    "deadly-3d8": string;
    "deadly-4d8": string;
    "deadly-d10": string;
    "deadly-2d10": string;
    "deadly-3d10": string;
    "deadly-4d10": string;
    "deadly-d12": string;
    "deadly-2d12": string;
    "deadly-3d12": string;
    "deadly-4d12": string;
    death: string;
    disarm: string;
    disease: string;
    "double-barrel": string;
    emotion: string;
    "fatal-aim-d10": string;
    "fatal-aim-d12": string;
    "fatal-d8": string;
    "fatal-d10": string;
    "fatal-d12": string;
    fear: string;
    finesse: string;
    forceful: string;
    fortune: string;
    "free-hand": string;
    fungus: string;
    good: string;
    grapple: string;
    hampering: string;
    healing: string;
    infused: string;
    inhaled: string;
    injection: string;
    intelligent: string;
    invested: string;
    "jousting-d6": string;
    kickback: string;
    light: string;
    magical: string;
    mental: string;
    modular: string;
    monk: string;
    nonlethal: string;
    olfactory: string;
    parry: string;
    plant: string;
    poison: string;
    propulsive: string;
    "ranged-trip": string;
    reach: string;
    repeating: string;
    resonant: string;
    saggorak: string;
    "scatter-5": string;
    "scatter-10": string;
    "scatter-15": string;
    shadow: string;
    shove: string;
    splash: string;
    staff: string;
    sweep: string;
    telepathy: string;
    teleportation: string;
    tethered: string;
    thrown: string;
    "thrown-10": string;
    "thrown-15": string;
    "thrown-20": string;
    "thrown-30": string;
    "thrown-40": string;
    "thrown-60": string;
    "thrown-100": string;
    time: string;
    trip: string;
    twin: string;
    "two-hand-d6": string;
    "two-hand-d8": string;
    "two-hand-d10": string;
    "two-hand-d12": string;
    unarmed: string;
    "versatile-acid": string;
    "versatile-b": string;
    "versatile-chaotic": string;
    "versatile-cold": string;
    "versatile-electricity": string;
    "versatile-evil": string;
    "versatile-fire": string;
    "versatile-force": string;
    "versatile-good": string;
    "versatile-lawful": string;
    "versatile-negative": string;
    "versatile-p": string;
    "versatile-positive": string;
    "versatile-s": string;
    "versatile-sonic": string;
    "volley-20": string;
    "volley-30": string;
    "volley-50": string;
    arcane: string;
    divine: string;
    occult: string;
    primal: string;
    abjuration: string;
    conjuration: string;
    divination: string;
    enchantment: string;
    evocation: string;
    illusion: string;
    necromancy: string;
    transmutation: string;
    acid: string;
    cold: string;
    electricity: string;
    fire: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    air: string;
    earth: string;
    water: string;
    "half-elf": string;
    "half-orc": string;
    aasimar: string;
    aberration: string;
    anadi: string;
    android: string;
    aphorite: string;
    automaton: string;
    azarketi: string;
    beastkin: string;
    catfolk: string;
    changeling: string;
    conrasu: string;
    dhampir: string;
    duskwalker: string;
    dwarf: string;
    elf: string;
    fetchling: string;
    fleshwarp: string;
    ganzi: string;
    geniekin: string;
    gnoll: string;
    gnome: string;
    goblin: string;
    goloma: string;
    grippli: string;
    halfling: string;
    hobgoblin: string;
    human: string;
    ifrit: string;
    kitsune: string;
    kobold: string;
    leshy: string;
    lizardfolk: string;
    orc: string;
    oread: string;
    poppet: string;
    ratfolk: string;
    shisk: string;
    shoony: string;
    skeleton: string;
    sprite: string;
    strix: string;
    suli: string;
    sylph: string;
    tengu: string;
    tiefling: string;
    undine: string;
    chaotic: string;
    lawful: string;
    evil: string;
};
declare const preciousMaterials: Record<PreciousMaterialType, string>;
declare const otherArmorTags: Record<OtherArmorTag, string>;
declare const otherEquipmentTags: Record<OtherEquipmentTag, string>;
declare const otherWeaponTags: Record<OtherWeaponTag, string>;
declare const npcAttackTraits: {
    brutal: string;
    curse: string;
    "reach-0": string;
    "reach-10": string;
    "reach-15": string;
    "reach-20": string;
    "reach-25": string;
    "reach-30": string;
    "reach-40": string;
    "reach-50": string;
    "reach-60": string;
    "reach-100": string;
    "reach-1000": string;
    "reload-0": string;
    "reload-1": string;
    "reload-2": string;
    "reload-1-min": string;
    "range-5": string;
    "range-10": string;
    "range-15": string;
    "range-20": string;
    "range-25": string;
    "range-30": string;
    "range-40": string;
    "range-50": string;
    "range-60": string;
    "range-70": string;
    "range-80": string;
    "range-90": string;
    "range-100": string;
    "range-120": string;
    "range-150": string;
    "range-180": string;
    "range-200": string;
    "range-240": string;
    "range-300": string;
    "range-500": string;
    "range-increment-5": string;
    "range-increment-10": string;
    "range-increment-15": string;
    "range-increment-20": string;
    "range-increment-30": string;
    "range-increment-40": string;
    "range-increment-50": string;
    "range-increment-60": string;
    "range-increment-70": string;
    "range-increment-75": string;
    "range-increment-80": string;
    "range-increment-90": string;
    "range-increment-100": string;
    "range-increment-110": string;
    "range-increment-120": string;
    "range-increment-130": string;
    "range-increment-140": string;
    "range-increment-150": string;
    "range-increment-160": string;
    "range-increment-170": string;
    "range-increment-180": string;
    "range-increment-190": string;
    "range-increment-200": string;
    "range-increment-210": string;
    "range-increment-220": string;
    "range-increment-230": string;
    "range-increment-240": string;
    "range-increment-250": string;
    "range-increment-260": string;
    "range-increment-270": string;
    "range-increment-280": string;
    "range-increment-290": string;
    "range-increment-300": string;
    "range-increment-310": string;
    "range-increment-320": string;
    adamantine: string;
    darkwood: string;
    mithral: string;
    orichalcum: string;
    silver: string;
    warpglass: string;
    abysium: string;
    coldIron: string;
    djezet: string;
    dragonhide: string;
    "grisantian-pelt": string;
    inubrix: string;
    noqual: string;
    peachwood: string;
    siccatite: string;
    sovereignSteel: string;
    alchemical: string;
    agile: string;
    artifact: string;
    "attached-to-shield": string;
    "attached-to-crossbow-or-firearm": string;
    auditory: string;
    backstabber: string;
    backswing: string;
    bomb: string;
    "capacity-3": string;
    "capacity-4": string;
    "capacity-5": string;
    charm: string;
    climbing: string;
    clockwork: string;
    cobbled: string;
    combination: string;
    concealable: string;
    concentrate: string;
    concussive: string;
    consumable: string;
    "critical-fusion": string;
    cursed: string;
    "deadly-d6": string;
    "deadly-d8": string;
    "deadly-2d8": string;
    "deadly-3d8": string;
    "deadly-4d8": string;
    "deadly-d10": string;
    "deadly-2d10": string;
    "deadly-3d10": string;
    "deadly-4d10": string;
    "deadly-d12": string;
    "deadly-2d12": string;
    "deadly-3d12": string;
    "deadly-4d12": string;
    death: string;
    disarm: string;
    disease: string;
    "double-barrel": string;
    emotion: string;
    "fatal-aim-d10": string;
    "fatal-aim-d12": string;
    "fatal-d8": string;
    "fatal-d10": string;
    "fatal-d12": string;
    fear: string;
    finesse: string;
    forceful: string;
    fortune: string;
    "free-hand": string;
    fungus: string;
    good: string;
    grapple: string;
    hampering: string;
    healing: string;
    infused: string;
    inhaled: string;
    injection: string;
    intelligent: string;
    invested: string;
    "jousting-d6": string;
    kickback: string;
    light: string;
    magical: string;
    mental: string;
    modular: string;
    monk: string;
    nonlethal: string;
    olfactory: string;
    parry: string;
    plant: string;
    poison: string;
    propulsive: string;
    "ranged-trip": string;
    reach: string;
    repeating: string;
    resonant: string;
    saggorak: string;
    "scatter-5": string;
    "scatter-10": string;
    "scatter-15": string;
    shadow: string;
    shove: string;
    splash: string;
    staff: string;
    sweep: string;
    telepathy: string;
    teleportation: string;
    tethered: string;
    thrown: string;
    "thrown-10": string;
    "thrown-15": string;
    "thrown-20": string;
    "thrown-30": string;
    "thrown-40": string;
    "thrown-60": string;
    "thrown-100": string;
    time: string;
    trip: string;
    twin: string;
    "two-hand-d6": string;
    "two-hand-d8": string;
    "two-hand-d10": string;
    "two-hand-d12": string;
    unarmed: string;
    "versatile-acid": string;
    "versatile-b": string;
    "versatile-chaotic": string;
    "versatile-cold": string;
    "versatile-electricity": string;
    "versatile-evil": string;
    "versatile-fire": string;
    "versatile-force": string;
    "versatile-good": string;
    "versatile-lawful": string;
    "versatile-negative": string;
    "versatile-p": string;
    "versatile-positive": string;
    "versatile-s": string;
    "versatile-sonic": string;
    "volley-20": string;
    "volley-30": string;
    "volley-50": string;
    arcane: string;
    divine: string;
    occult: string;
    primal: string;
    abjuration: string;
    conjuration: string;
    divination: string;
    enchantment: string;
    evocation: string;
    illusion: string;
    necromancy: string;
    transmutation: string;
    acid: string;
    cold: string;
    electricity: string;
    fire: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    air: string;
    earth: string;
    water: string;
    "half-elf": string;
    "half-orc": string;
    aasimar: string;
    aberration: string;
    anadi: string;
    android: string;
    aphorite: string;
    automaton: string;
    azarketi: string;
    beastkin: string;
    catfolk: string;
    changeling: string;
    conrasu: string;
    dhampir: string;
    duskwalker: string;
    dwarf: string;
    elf: string;
    fetchling: string;
    fleshwarp: string;
    ganzi: string;
    geniekin: string;
    gnoll: string;
    gnome: string;
    goblin: string;
    goloma: string;
    grippli: string;
    halfling: string;
    hobgoblin: string;
    human: string;
    ifrit: string;
    kitsune: string;
    kobold: string;
    leshy: string;
    lizardfolk: string;
    orc: string;
    oread: string;
    poppet: string;
    ratfolk: string;
    shisk: string;
    shoony: string;
    skeleton: string;
    sprite: string;
    strix: string;
    suli: string;
    sylph: string;
    tengu: string;
    tiefling: string;
    undine: string;
    chaotic: string;
    lawful: string;
    evil: string;
};
declare const featTraits: {
    additive1: string;
    additive2: string;
    additive3: string;
    aftermath: string;
    alchemical: string;
    archetype: string;
    auditory: string;
    aura: string;
    class: string;
    concentrate: string;
    dedication: string;
    detection: string;
    deviant: string;
    downtime: string;
    emotion: string;
    evolution: string;
    esoterica: string;
    exploration: string;
    fear: string;
    finisher: string;
    flourish: string;
    fortune: string;
    general: string;
    injury: string;
    lineage: string;
    manipulate: string;
    metamagic: string;
    mindshift: string;
    modification: string;
    move: string;
    multiclass: string;
    oath: string;
    olfactory: string;
    open: string;
    "pervasive-magic": string;
    poison: string;
    press: string;
    rage: string;
    reckless: string;
    reflection: string;
    secret: string;
    skill: string;
    social: string;
    spellshot: string;
    stamina: string;
    stance: string;
    tandem: string;
    time: string;
    "true-name": string;
    unstable: string;
    vigilante: string;
    virulent: string;
    amp: string;
    attack: string;
    beast: string;
    cantrip: string;
    composition: string;
    consecration: string;
    contingency: string;
    curse: string;
    cursebound: string;
    darkness: string;
    death: string;
    disease: string;
    dream: string;
    eidolon: string;
    extradimensional: string;
    fungus: string;
    healing: string;
    hex: string;
    incapacitation: string;
    incarnate: string;
    incorporeal: string;
    inhaled: string;
    light: string;
    linguistic: string;
    litany: string;
    mindless: string;
    misfortune: string;
    morph: string;
    nonlethal: string;
    plant: string;
    polymorph: string;
    possession: string;
    prediction: string;
    psyche: string;
    revelation: string;
    scrying: string;
    shadow: string;
    sleep: string;
    summoned: string;
    teleportation: string;
    visual: string;
    arcane: string;
    divine: string;
    occult: string;
    primal: string;
    abjuration: string;
    conjuration: string;
    divination: string;
    enchantment: string;
    evocation: string;
    illusion: string;
    necromancy: string;
    transmutation: string;
    air: string;
    earth: string;
    fire: string;
    water: string;
    magical: string;
    mental: string;
    radiation: string;
    acid: string;
    cold: string;
    electricity: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    chaotic: string;
    lawful: string;
    good: string;
    evil: string;
    alchemist: string;
    barbarian: string;
    bard: string;
    champion: string;
    cleric: string;
    druid: string;
    fighter: string;
    gunslinger: string;
    inventor: string;
    investigator: string;
    magus: string;
    monk: string;
    oracle: string;
    psychic: string;
    ranger: string;
    rogue: string;
    sorcerer: string;
    summoner: string;
    swashbuckler: string;
    thaumaturge: string;
    witch: string;
    wizard: string;
    "half-elf": string;
    "half-orc": string;
    aasimar: string;
    aberration: string;
    anadi: string;
    android: string;
    aphorite: string;
    automaton: string;
    azarketi: string;
    beastkin: string;
    catfolk: string;
    changeling: string;
    conrasu: string;
    dhampir: string;
    duskwalker: string;
    dwarf: string;
    elf: string;
    fetchling: string;
    fleshwarp: string;
    ganzi: string;
    geniekin: string;
    gnoll: string;
    gnome: string;
    goblin: string;
    goloma: string;
    grippli: string;
    halfling: string;
    hobgoblin: string;
    human: string;
    ifrit: string;
    kitsune: string;
    kobold: string;
    leshy: string;
    lizardfolk: string;
    orc: string;
    oread: string;
    poppet: string;
    ratfolk: string;
    shisk: string;
    shoony: string;
    skeleton: string;
    sprite: string;
    strix: string;
    suli: string;
    sylph: string;
    tengu: string;
    tiefling: string;
    undine: string;
};
declare const consumableTraits: {
    air: string;
    alchemical: string;
    auditory: string;
    aura: string;
    catalyst: string;
    clockwork: string;
    consumable: string;
    contact: string;
    cursed: string;
    drug: string;
    elixir: string;
    emotion: string;
    fear: string;
    fey: string;
    fortune: string;
    fulu: string;
    gadget: string;
    healing: string;
    incapacitation: string;
    infused: string;
    ingested: string;
    inhaled: string;
    injury: string;
    kobold: string;
    light: string;
    magical: string;
    mechanical: string;
    misfortune: string;
    morph: string;
    mutagen: string;
    oil: string;
    olfactory: string;
    poison: string;
    polymorph: string;
    potion: string;
    precious: string;
    scroll: string;
    scrying: string;
    sleep: string;
    snare: string;
    splash: string;
    structure: string;
    talisman: string;
    teleportation: string;
    trap: string;
    virulent: string;
    visual: string;
    wand: string;
    arcane: string;
    divine: string;
    occult: string;
    primal: string;
    abjuration: string;
    conjuration: string;
    divination: string;
    enchantment: string;
    evocation: string;
    illusion: string;
    necromancy: string;
    transmutation: string;
    earth: string;
    fire: string;
    water: string;
    mental: string;
    nonlethal: string;
    plant: string;
    radiation: string;
    acid: string;
    cold: string;
    electricity: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    chaotic: string;
    lawful: string;
    good: string;
    evil: string;
};
declare const actionTraits: {
    circus: string;
    summon: string;
    amp: string;
    attack: string;
    auditory: string;
    aura: string;
    beast: string;
    cantrip: string;
    composition: string;
    concentrate: string;
    consecration: string;
    contingency: string;
    curse: string;
    cursebound: string;
    darkness: string;
    death: string;
    detection: string;
    disease: string;
    dream: string;
    eidolon: string;
    emotion: string;
    extradimensional: string;
    fear: string;
    fortune: string;
    fungus: string;
    healing: string;
    hex: string;
    incapacitation: string;
    incarnate: string;
    incorporeal: string;
    inhaled: string;
    light: string;
    linguistic: string;
    litany: string;
    metamagic: string;
    mindless: string;
    misfortune: string;
    morph: string;
    move: string;
    nonlethal: string;
    olfactory: string;
    plant: string;
    poison: string;
    polymorph: string;
    possession: string;
    prediction: string;
    psyche: string;
    revelation: string;
    scrying: string;
    shadow: string;
    sleep: string;
    stance: string;
    summoned: string;
    teleportation: string;
    "true-name": string;
    visual: string;
    arcane: string;
    divine: string;
    occult: string;
    primal: string;
    abjuration: string;
    conjuration: string;
    divination: string;
    enchantment: string;
    evocation: string;
    illusion: string;
    necromancy: string;
    transmutation: string;
    air: string;
    earth: string;
    fire: string;
    water: string;
    magical: string;
    mental: string;
    radiation: string;
    acid: string;
    cold: string;
    electricity: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    chaotic: string;
    lawful: string;
    good: string;
    evil: string;
    alchemist: string;
    barbarian: string;
    bard: string;
    champion: string;
    cleric: string;
    druid: string;
    fighter: string;
    gunslinger: string;
    inventor: string;
    investigator: string;
    magus: string;
    monk: string;
    oracle: string;
    psychic: string;
    ranger: string;
    rogue: string;
    sorcerer: string;
    summoner: string;
    swashbuckler: string;
    thaumaturge: string;
    witch: string;
    wizard: string;
    alchemical: string;
    catalyst: string;
    clockwork: string;
    consumable: string;
    contact: string;
    cursed: string;
    drug: string;
    elixir: string;
    fey: string;
    fulu: string;
    gadget: string;
    infused: string;
    ingested: string;
    injury: string;
    kobold: string;
    mechanical: string;
    mutagen: string;
    oil: string;
    potion: string;
    precious: string;
    scroll: string;
    snare: string;
    splash: string;
    structure: string;
    talisman: string;
    trap: string;
    virulent: string;
    wand: string;
    additive1: string;
    additive2: string;
    additive3: string;
    aftermath: string;
    archetype: string;
    class: string;
    dedication: string;
    deviant: string;
    downtime: string;
    evolution: string;
    esoterica: string;
    exploration: string;
    finisher: string;
    flourish: string;
    general: string;
    lineage: string;
    manipulate: string;
    mindshift: string;
    modification: string;
    multiclass: string;
    oath: string;
    open: string;
    "pervasive-magic": string;
    press: string;
    rage: string;
    reckless: string;
    reflection: string;
    secret: string;
    skill: string;
    social: string;
    spellshot: string;
    stamina: string;
    tandem: string;
    time: string;
    unstable: string;
    vigilante: string;
    "half-elf": string;
    "half-orc": string;
    aasimar: string;
    aberration: string;
    anadi: string;
    android: string;
    aphorite: string;
    automaton: string;
    azarketi: string;
    beastkin: string;
    catfolk: string;
    changeling: string;
    conrasu: string;
    dhampir: string;
    duskwalker: string;
    dwarf: string;
    elf: string;
    fetchling: string;
    fleshwarp: string;
    ganzi: string;
    geniekin: string;
    gnoll: string;
    gnome: string;
    goblin: string;
    goloma: string;
    grippli: string;
    halfling: string;
    hobgoblin: string;
    human: string;
    ifrit: string;
    kitsune: string;
    leshy: string;
    lizardfolk: string;
    orc: string;
    oread: string;
    poppet: string;
    ratfolk: string;
    shisk: string;
    shoony: string;
    skeleton: string;
    sprite: string;
    strix: string;
    suli: string;
    sylph: string;
    tengu: string;
    tiefling: string;
    undine: string;
};
declare const hazardTraits: {
    alchemical: string;
    aquatic: string;
    auditory: string;
    clockwork: string;
    consumable: string;
    curse: string;
    environmental: string;
    fungus: string;
    haunt: string;
    inhaled: string;
    kaiju: string;
    magical: string;
    mechanical: string;
    poison: string;
    steam: string;
    summoned: string;
    technological: string;
    teleportation: string;
    trap: string;
    virulent: string;
    visual: string;
    arcane: string;
    divine: string;
    occult: string;
    primal: string;
    abjuration: string;
    conjuration: string;
    divination: string;
    enchantment: string;
    evocation: string;
    illusion: string;
    necromancy: string;
    transmutation: string;
    light: string;
    mental: string;
    nonlethal: string;
    plant: string;
    radiation: string;
    acid: string;
    cold: string;
    electricity: string;
    fire: string;
    force: string;
    negative: string;
    positive: string;
    sonic: string;
    air: string;
    earth: string;
    water: string;
    chaotic: string;
    lawful: string;
    good: string;
    evil: string;
};
declare const vehicleTraits: {
    artifact: string;
    clockwork: string;
    magical: string;
    teleportation: string;
    abjuration: string;
    conjuration: string;
    divination: string;
    enchantment: string;
    evocation: string;
    illusion: string;
    necromancy: string;
    transmutation: string;
};
export { actionTraits, alignmentTraits, ancestryItemTraits, ancestryTraits, classTraits, consumableTraits, creatureTraits, damageTraits, elementalTraits, energyDamageTypes, featTraits, hazardTraits, magicSchools, magicTraditions, npcAttackTraits, otherArmorTags, otherEquipmentTags, otherWeaponTags, preciousMaterials, spellOtherTraits, spellTraits, vehicleTraits, weaponTraits, };
