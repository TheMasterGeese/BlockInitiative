# MG Living World - Block Initiative

## Release 0.1.0
Initial pre-release. Includes existing functionality, plus development environment migrated from MasterGeeseLivingWorldTools. Features implemented thus far:
- Settings: Set the initiative handicap to apply to PCs when sorting combatants into Block Initiative.
- Sends a Ready Check whenever:
    - A user clicks one of the "Reaction" buttons.
    - The GM clicks one of the "Invalid Action" buttons.
    - The GM clicks one of the "Confirm Action" buttons.
- Renders the Combat Tracker to now include:
    - Combatants grouped into blocks. This will always include a Players block and at least one Enemies block, possibly a second enemies block if any enemies beat all the PCs in initiative.
    - A display indicating the current combat phase, as well as the progression of combat phases.
        - Clicking on each phase button will manually set the current combat phase.
    - A button visible only to the GM to sort combatants into blocks. This also applies the initiative handicap before doing so.
    - Reaction buttons, Invalid Action Buttons, and Confirm Action buttons in each combatant's row as applicable:
        - The GM sees Invalid Action Buttons and Confirm Action buttons for all Player Characters, and Reaction buttons for all NPCs.
        - Players see Reaction buttons for their character.
        - Reaction buttons are disabled for Players during the Enemies Act phase, and for NPCs during the Players Act phase.
    - Overrides the "Next Turn" and "Previous Turn" buttons to instead shift to the next and previous combat phase respectively.
- When an enemy ends their turn, if their initiative score is higher than all PC initiative scores (as would be the case in the first round if an enemy beat all PCs in initiative), their initiative score is adjust to the lowest player initiative minus 1, which adds them to the rest of the Enemies block.  
- Applies any system-specific start-of-turn and end-of-turn effects on combatants when combat phases change (currently only supports Pathfinder 2E).

