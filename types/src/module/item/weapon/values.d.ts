declare const WEAPON_CATEGORIES: Set<"advanced" | "unarmed" | "simple" | "martial">;
declare const MELEE_WEAPON_GROUPS: Set<"axe" | "brawling" | "club" | "flail" | "hammer" | "knife" | "pick" | "polearm" | "shield" | "spear" | "sword">;
declare const RANGED_WEAPON_GROUPS: Set<"bomb" | "bow" | "dart" | "firearm" | "sling">;
declare const WEAPON_GROUPS: Set<"axe" | "brawling" | "club" | "flail" | "hammer" | "knife" | "pick" | "polearm" | "shield" | "spear" | "sword" | "bomb" | "bow" | "dart" | "firearm" | "sling">;
/** Precious materials that provide effects to strike attack or damage rolls */
declare const WEAPON_MATERIAL_EFFECTS: Set<"adamantine" | "mithral" | "silver" | "abysium" | "coldIron" | "djezet" | "noqual" | "peachwood" | "sovereignSteel">;
declare const WEAPON_PROPERTY_RUNE_TYPES: Set<"ghostTouch" | "vorpal" | "anarchic" | "ancestralEchoing" | "anchoring" | "axiomatic" | "bane" | "bloodbane" | "bloodthirsty" | "brilliant" | "conducting" | "corrosive" | "crushing" | "cunning" | "dancing" | "disrupting" | "energizing" | "extending" | "fanged" | "fearsome" | "flaming" | "frost" | "greaterAnchoring" | "greaterBloodbane" | "greaterBrilliant" | "greaterCorrosive" | "greaterCrushing" | "greaterDisrupting" | "greaterExtending" | "greaterFanged" | "greaterFearsome" | "greaterFlaming" | "greaterFrost" | "greaterHauling" | "greaterImpactful" | "greaterShock" | "greaterThundering" | "grievous" | "hauling" | "holy" | "hopeful" | "impactful" | "keen" | "kinWarding" | "majorFanged" | "pacifying" | "returning" | "serrating" | "shifting" | "shock" | "speed" | "spellStoring" | "thundering" | "unholy" | "wounding">;
declare const THROWN_RANGES: Set<10 | 15 | 20 | 40 | 30 | 60 | 100>;
declare const WEAPON_RANGES: Set<10 | 15 | 20 | 40 | 30 | 50 | 60 | 100 | 70 | 80 | 90 | 120 | 140 | 150 | 180 | 240 | 300>;
declare const CROSSBOW_WEAPONS: Set<"alchemical-crossbow" | "crossbow" | "hand-crossbow" | "heavy-crossbow" | "repeating-crossbow" | "repeating-hand-crossbow" | "repeating-heavy-crossbow" | "taw-launcher">;
export { CROSSBOW_WEAPONS, MELEE_WEAPON_GROUPS, RANGED_WEAPON_GROUPS, THROWN_RANGES, WEAPON_CATEGORIES, WEAPON_GROUPS, WEAPON_MATERIAL_EFFECTS, WEAPON_PROPERTY_RUNE_TYPES, WEAPON_RANGES, };
