import { customBlur } from "@/app/fonts";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Select, SelectOption } from "@/components/ui/select";
import {
    categoriesList,
    companiesCategoryList,
    festivalsCategoryList,
    institutionsCategoryList,
    subCategoriesByType,
} from "@/components/network/data";
import { User } from "@/types/User";
import { Edit2, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Text } from "@/components/ui/text";

type ProfileData = User["profileData"];
type NetworkProfileType = "profissionais" | "empresa" | "festival" | "instituicao";


const getProfileType = (profileData?: ProfileData): NetworkProfileType => {
    const legacyProfileData = profileData as (ProfileData & {
        type?: string;
        profileType?: string;
    }) | undefined;
    const legacyType = legacyProfileData?.type ?? legacyProfileData?.profileType;

    if (
        legacyType === "profissionais" ||
        legacyType === "empresa" ||
        legacyType === "festival" ||
        legacyType === "instituicao"
    ) {
        return legacyType;
    }

    return profileData?.accountType === "company" ? "empresa" : "profissionais";
};

const getCategoryOptions = (selectedType: NetworkProfileType): SelectOption[] =>
    selectedType === "profissionais"
        ? categoriesList
        : selectedType === "empresa"
            ? companiesCategoryList
            : selectedType === "festival"
                ? festivalsCategoryList
                : institutionsCategoryList;

const uniqueOptions = (options: SelectOption[]): SelectOption[] => {
    const seen = new Set<string>();

    return options.filter((option) => {
        if (seen.has(option.value)) return false;

        seen.add(option.value);
        return true;
    });
};

export const getSkillOptions = (profileData?: ProfileData): SelectOption[] => {
    const selectedType = getProfileType(profileData);
    const categoriesByType = subCategoriesByType[selectedType] ?? {};
    const categoryOptions = getCategoryOptions(selectedType);
    const profession = profileData?.profession;
    const selectedCategory = categoryOptions.find(
        (option) => option.value === profession || option.label === profession,
    )?.value;

    if (selectedCategory && categoriesByType[selectedCategory]?.length) {
        return categoriesByType[selectedCategory];
    }

    const typeOptions = Object.values(categoriesByType).flat();

    if (typeOptions.length) {
        return uniqueOptions(typeOptions);
    }

    return uniqueOptions(
        Object.values(subCategoriesByType).flatMap((categoryMap) => Object.values(categoryMap).flat()),
    );
};
type SectionEditSkillsProps = {
    isAuthenticated?: boolean;
    isEditingSkils?: boolean;
    setIsEditingSkils?: Dispatch<SetStateAction<boolean>>;
    profileData?: ProfileData;
    skills?: string[];
    isSaving?: boolean;
    onSaveSkills?: (skills: string[]) => void | Promise<void>;
}

export const SectionEditSkills: React.FC<SectionEditSkillsProps> = ({
    isAuthenticated,
    isEditingSkils = false,
    setIsEditingSkils,
    profileData,
    skills = [],
    isSaving = false,
    onSaveSkills,
}) => {
    const [draftSkills, setDraftSkills] = useState<string[]>(skills);
    const visibleSkills = isEditingSkils ? draftSkills : skills;
    const skillOptions = getSkillOptions(profileData).filter((option) => !draftSkills.includes(option.label) && !draftSkills.includes(option.value));

    const startEditing = () => {
        setDraftSkills(skills);
        setIsEditingSkils?.(true);
    };

    const handleCancel = () => {
        setDraftSkills(skills);
        setIsEditingSkils?.(false);
    };

    const removeSkill = (skill: string) => {
        setDraftSkills((lastState) => lastState.filter((item) => item !== skill));
    };

    const handleSubCategoryChange = (value: string) => {
        const selectedOption = skillOptions.find((option) => option.value === value);
        const skill = selectedOption?.label ?? value;

        if (!skill || draftSkills.includes(skill)) return;

        setDraftSkills((lastState) => [...lastState, skill]);
    };

    const handleSave = () => {
        void onSaveSkills?.(draftSkills);
    };

    return (
        <div className="w-1/2 flex flex-col h-auto">
            <div className="flex items-center gap-4">
                <Heading className={`${customBlur.className} text-[48px] leading-12`}>
                    Competências
                </Heading>

                {isAuthenticated && !isEditingSkils && (
                    <Button
                        variant="secondary"
                        className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center"
                        onClick={startEditing}
                    >
                        <Edit2 width={12} height={12} />
                    </Button>
                )}

                {isAuthenticated && isEditingSkils && (
                    <div className="w-full flex gap-1">
                        <Button disabled={isSaving} onClick={handleSave}>{isSaving ? "A guardar..." : "Guardar"}</Button>
                        <Button variant="secondary" disabled={isSaving} onClick={handleCancel}>
                            Cancelar
                        </Button>
                    </div>
                )}
            </div>

            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-wrap gap-2.5 pt-5 pb-5 border-b border-b-white/900">
                    {visibleSkills.length > 0 ? visibleSkills.map((skill) => (
                        <Tag key={skill} className="flex gap-1 items-center">
                            {skill}
                            {isEditingSkils && (
                                <X
                                    width={12}
                                    height={12}
                                    color="#ffffff"
                                    className="cursor-pointer"
                                    onClick={() => removeSkill(skill)}
                                />
                            )}
                        </Tag>
                    )) :
                        <Text className="text-[14px] leading-relaxed font-medium">
                            Ainda não existem competências.
                        </Text>
                    }
                </div>


                {isEditingSkils && (
                    <Select
                        variant="secondary"
                        value=""
                        placeholder="Selecione a subcategoria"
                        options={skillOptions}
                        triggerClassName="border-[1.3px] border-white px-3 text-rede-white outline-none"
                        popoverClassName="rounded-[8px] border-[1.3px] border-white px-3 text-rede-white outline-none mt-[10px]"
                        satelliteClassName="border-[1.3px] border-white"
                        onChange={handleSubCategoryChange}
                    />
                )}
            </div>
        </div>
    );
};