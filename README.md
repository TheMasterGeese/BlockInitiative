<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[version-shield]: https://img.shields.io/github/v/release/TheMasterGeese/mg-block-initiative
[version-url]: https://github.com/TheMasterGeese/mg-block-initiative/releases/latest
[forks-shield]: https://img.shields.io/github/forks/TheMasterGeese/mg-block-initiative
[forks-url]: https://github.com/TheMasterGeese/mg-block-initiative/network/members
[stars-shield]: https://img.shields.io/github/stars/TheMasterGeese/mg-block-initiative
[stars-url]: https://github.com/TheMasterGeese/mg-block-initiative/stargazers
[issues-shield]: https://img.shields.io/github/issues/TheMasterGeese/mg-block-initiative
[issues-url]: https://github.com/TheMasterGeese/mg-block-initiative/issues
[license-shield]: https://img.shields.io/github/license/TheMasterGeese/mg-block-initiative
[license-url]: https://github.com/TheMasterGeese/mg-block-initiative/blob/master/LICENSE.md
[last-updated-shield]: https://img.shields.io/github/last-commit/TheMasterGeese/mg-block-initiative

# MG Living World - Block Initiative

MG Living World - Block Initiative overhauls how initiative works in combat encounters to support an asynchronous session-less way of running games. This module was built with the Pathfinder 2E system in mind, but should apply to many d20-based systems in a similar manner, support may be added for other systems later.

[![Version][version-shield]][version-url]
![Last Updated][last-updated-shield]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

### Table of Contents

- [Block Initiative](#Block-Initiative)
- [Initiative Handicap](#Initiative-Handicap)
- [Combat Phases](#Combat-Phases)
- [Reselecting Actions](#Reselecting-Actions)
- [System Ramifications](#System-Ramifications)
- [Changelog](#Changelog)
- [Contributing](#Contributing)
- [License](#License)
- [Contact](#Contact)

## Overview

The Block Initiative Module overhauls how initiative works in the Pathfinder 2E system, to help support running campaigns in an asynchronous manner. This manner of running a campaign requires coordinating actions taken by both a Gamemaster and the Players, and ensuring that all parties are kept up to speed with the current state of the game.

This module organizes running combat for such a system. The Block Initiative module can also be used for in-person and/or session-based campaigns as a way to organize simultaneous turns and collaboration among the party, campaigns that use the module this way may find it useful to disable some of the Ready Checks normally used by this module.

## Block Initiative

Instead of each combatant being given their own separate turn to act in initiative order, combatants are now organized into blocks: one block for Players, and one for all other combatants. This block is referred to as the Enemies block, but any NPC allies or neutral parties controlled by the Gamemaster would also be included in this block.

Combatants roll initiative as they would in their normal d20-based system. When all combatants have rolled initiative, they are placed into blocks by doing the following:
- Apply the Initiative Handicap to all Player Characters.
- Any NPCs that beat all Player Characters in initiative get to act first in combat. All other NPCs are placed in the Enemies block, which acts after all the players have taken their first actions in the Players Act phase.

### Initiative Handicap

The Block Initiative system described above inherently disadvantages NPCs, since regardless of whether they rolled the lowest initaitive, whether they beat all but one PC in initiative, or anywhere in between, they are forced to the bottom of initiative order. When analyzing just how often an NPC would be negatively affected by the Block Initiative system compared to a typical d20 initiative system the math works out to a 16.625% chance that a monster acts later than they normally would, weighted based on the difference between the position in both systems. (TODO: Show the math in more detail) This chance is consistent regardless of the number of NPCs or Players. To offset this, a handicap is placed on Player initiative rolls, which is applied as combatants are sorted into blocks. The handicap defaults to a -3 penalty, giving NPCs a 15% better initiative score overall. The value of this handicap can be adjusted in the settings.

### Combat Phases

TODO: Based on the most recent dry run of this system, The organization of combat phases below is likely to change before being fully released:

Instead of each individual combatant taking their own turn, each combat round is split into a number of phases, which progress in the following order:

Enemies Act -> Players React -> Players Act -> Enemies React

After initiative is rolled, combat begins with the Enemies Act phase, where any NPCs that beat all PCs in initiative get to act. If no NPCs beat all the PCs in initiative, then this phase and the Players React phase are skipped during the first round of Combat.

#### Enemies Act

During this phase, all NPCs will declare their actions, but do not resolve their effects. In the Pathfinder 2E system, this means that enemies can take their 3 (or more) actions, and make any rolls associated with these actions, including but not limited to attack rolls, skill checks, damage rolls, flat checks versus effects such as concealment, etc. Actions spent to move resolve during this phase, but effects from these actions that would affect players, such as damage or status conditions do not resolve yet. If enemies have reactions or free actions that would trigger off the actions of themselves or their allies, these also trigger during this phase.

In the event that multiple actions taken by NPCs would conflict with each other, the NPC with the highest inititative has priority for resolving actions. If one action takes by an NPC invalidates another NPC's action, the latter must take any actions they can, and then change their remaining actions so that they are now valid.

The GM will be controlling all NPCs, and should take into consideration their intelligence and cohesiveness when deciding how they will act; mindless creatures such as slimes or zombies should disregard their allies when choosing their actions, possibly getting in the way of other NPCs or being stuck behind them. Intelligent creatures or creatures that are accustomed to working together should anticipate each other's actions and act accordingly. Creatures that are aware of player characters and their capabilities should work to gang up on the most fragile party members and lock down any others. After the GM has finalized the actions of all NPCs, combat proceeds to the Players React phase.

#### Players React

During this phase, all actions taken by enemies resolve based on their initiative order, and players may take any reactions accordingly. For instance, in the Pathfinder 2E system, if an enemy moves out of reach of a Fighter, that fighter may use their Attack of Opportunity reaction. Any reactions taken resolve immediately. Reactions are resolved using a "stack"; They always resolve in the reverse order they were triggered.For example, if the Fighter's attack of opportunity triggered a reaction from an NPC to dodge, adding a bonus to their armor class, that bonus would be applied before the attack of opportunity, possibly lowering its degree of success.

Rolls such as saving throws that players would be required to make in response to an NPC's effect also resolve at this time.

If a player's reaction invalidates the remaining actions or reactions of NPCs, those NPCs must reselect how to use their remaining actions. For instance, if an NPC planned to use 2 actions to cast an spell that requires a living ally, but the targeted ally was killed due to the Fighter's Attack of Opportunity, they NPC must select a different way to use the two remaining actions.

When the effects of NPC actions resolve, apply any effects such as damage, status effects, summoning creatures, creating terrain obstacles, etc.

When all players have used their reactions or elected not to react, each player signals that they are Ready. After all players and the GM are ready, combat proceeds to the Players Act phase.

### Players Act

Like the Enemies Act phase, this phase is when players will choose their actions for the round, but their effects do not yet resolve. Players are expected to use chat messages, drawing tools, or any other tools available to them to state their intended actions for the round. Players are encouraged to strategize with each other, to avoid having their actions conflict with one another. Players may resolve their turns in any order, however each player must take a full turn before resolving the actions of any other player, and turn order must be decided upon before players undertake their actions. When players are satisied with their actions, they may signal that they are Ready.

In the event that multiple actions taken by players would conflict with each other, the Player with the highest initiative has priority for resolving actions. Actions and turns must resolve in the order agreed upon, players cannot change their turn order in response to an unexpected development while undertaking their actions. If one action takes by a player invalidates another player action, the latter must take any actions they can, and then change their remaining actions so that they are now valid.

After all players signal that they are ready, they make any movement, checks, or other rolls their actions would entail, such as attack rolls, damage rolls skill checks, flat checks to hit concealed creatures, etc. Effects from these actions that would affect enemies, such as damage or status conditions do not resolve yet. If players have reactions or free actions that would trigger off each other's actions, these also trigger during this phase. When all players have made their checks, they once again signal that they are Ready. When all players are ready, combat proceeds to the Enemies React phase.

### Enemies React

During this phase, all actions taken by players resolve based on the agreed upon turn order, and enemies may take any reactions accordingly. 

Rolls such as saving throws that enemies would be required to make in response to an NPC's effect also resolve at this time.

If an enemy's reaction invalidates the remaining actions or reactions of players, those players must reselect how to use their remaining actions. For instance, if a player planned to move to a particular square, but an enemy's reaction creates an impassable barrier that prevents the player from moving there, they must take any actions they can to move up to the barrier, but must select a different way to use their remaining actions.

When the effects of player actions resolve, apply any effects such as damage, status effects, summoning creatures, creating terrain obstacles, etc.

When all players actions resolve, combat proceeds to a new round, starting with the Enemies Act phase.

## Reselecting Actions

TODO

Use common sense, creatures would not willingly run into a wall of fire even though they technically could and they aren't prevented from doing so

## System Ramifications

TODO

Ganging up is more common, combats are a lot more swingy, it can be very dangerous for PCs to advance into melee all by themselves.
It better represents the chaos of combat than a system based on individual character turns.

The system may feel slow at first, but is demonstrably faster than a system based on individual character turns; the worst case scenario is that every single action causes conflicts, in which case one turn resolves at a time; no different from an approach based on individual character turns.

[top](#table-of-contents)

## Changelog
See [CHANGELOG](CHANGELOG.md)
## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)
## License
This work is licensed under the [Foundry Virtual Tabletop EULA - Limited License Agreement for Module Development](https://foundryvtt.com/article/license/) and [MIT License](LICENSE).

## Contact
Contact MasterGeese via Discord (Khankar#2236) or email (themastergeese@gmail.com).
