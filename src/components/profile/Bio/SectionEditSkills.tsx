import { customBlur } from "@/app/fonts";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/Input";
import { Edit2, Plus, X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type SectionEditSkillsProps = {
    isAuthenticated?: boolean;
    isEditingSkils?: boolean;
    setIsEditingSkils?: Dispatch<SetStateAction<boolean>>;
    skills?: string[];
    isSaving?: boolean;
    onSaveSkills?: (skills: string[]) => void | Promise<void>;
}

export const SectionEditSkills: React.FC<SectionEditSkillsProps> = ({
    isAuthenticated,
    isEditingSkils = false,
    setIsEditingSkils,
    skills = [],
    isSaving = false,
    onSaveSkills,
}) => {
    const [draftSkills, setDraftSkills] = useState<string[]>(skills);
    const [newSkill, setNewSkill] = useState("");
    const visibleSkills = isEditingSkils ? draftSkills : skills;

    const startEditing = () => {
        setDraftSkills(skills);
        setNewSkill("");
        setIsEditingSkils?.(true);
    };

    const handleCancel = () => {
        setDraftSkills(skills);
        setNewSkill("");
        setIsEditingSkils?.(false);
    };

    const removeSkill = (skill: string) => {
        setDraftSkills((lastState) => lastState.filter((item) => item !== skill));
    };

    const addSkill = () => {
        const skill = newSkill.trim();
        if (!skill || draftSkills.includes(skill)) return;

        setDraftSkills((lastState) => [...lastState, skill]);
        setNewSkill("");
    };

    const handleSave = () => {
        void onSaveSkills?.(draftSkills);
    };

    return (
        <div className="w-1/2 flex flex-col h-auto">
            <div className="flex items-center gap-4">
                <Heading className={`${customBlur.className} text-[48px] leading-12`}>
                    Competencias
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
                    )) : <span className="text-[14px] leading-5 text-rede-white/70">Ainda nao existem competencias.</span>}
                </div>

                {isEditingSkils && (
                    <div className="flex gap-2">
                        <Input
                            variant="secondary"
                            className="w-full"
                            value={newSkill}
                            placeholder="Adicionar competencia"
                            onChange={(event) => setNewSkill(event.target.value)}
                        />
                        <Button type="button" variant="secondary" showMainButton={false} icon={<Plus width={12} height={12} />} onClick={addSkill} />
                    </div>
                )}
            </div>
        </div>
    );
};