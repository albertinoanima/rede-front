import { customBlur } from "@/app/fonts";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { SelectOption } from "@/components/ui/select";
import { getCategoriesByAccountType } from "@/components/network/data";
import { User } from "@/types/User";
import { Edit2, X } from "lucide-react";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Text } from "@/components/ui/text";
import { InputSelect } from "@/components/ui/input-select";

type ProfileData = User["profileData"];

// As competencias disponiveis dependem apenas do tipo de conta: contas de
// empresa escolhem entre as categorias de empresa, as restantes (individual)
// entre as categorias de profissionais.
export const getSkillOptions = (profileData?: ProfileData): SelectOption[] =>
    getCategoriesByAccountType(profileData?.accountType);

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
    const skillOptions = useMemo(
        () => getSkillOptions(profileData).filter(
            (option) => !draftSkills.includes(option.label) && !draftSkills.includes(option.value),
        ),
        [profileData, draftSkills],
    );

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
                    <InputSelect
                        variant="secondary"
                        value=""
                        allowFreeText={false}
                        placeholder="Digite ou selecione a competência"
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