import { ActionType, BaseItemDataPF2e, BaseItemSourcePF2e, Frequency, ItemLevelData, ItemSystemData, ItemTraits } from "@item/data/base";
import { OneToThree } from "@module/data";
import { FeatPF2e } from ".";
import { FEAT_TYPES } from "./values";
declare type FeatSource = BaseItemSourcePF2e<"feat", FeatSystemSource>;
declare type FeatData = Omit<FeatSource, "effects" | "flags"> & BaseItemDataPF2e<FeatPF2e, "feat", FeatSystemData, FeatSource>;
export declare type FeatTrait = keyof ConfigPF2e["PF2E"]["featTraits"];
export declare type FeatTraits = ItemTraits<FeatTrait>;
export declare type FeatType = SetElement<typeof FEAT_TYPES>;
export interface PrerequisiteTagData {
    value: string;
}
export interface FeatSystemSource extends ItemSystemData, ItemLevelData {
    traits: FeatTraits;
    featType: {
        value: FeatType;
    };
    /** Whether this feat must be taken at character level 1 */
    onlyLevel1: boolean;
    /** The maximum number of times this feat can be taken by a character. A value of `null` indicates no limit */
    maxTakable: number | null;
    actionType: {
        value: ActionType;
    };
    actionCategory: {
        value: string;
    };
    actions: {
        value: OneToThree | null;
    };
    prerequisites: {
        value: PrerequisiteTagData[];
    };
    location: string | null;
    frequency?: Frequency;
}
export interface FeatSystemData extends Omit<FeatSystemSource, "maxTaken"> {
    /** `null` is set to `Infinity` during data preparation */
    maxTakable: number;
}
export { FeatData, FeatSource };
