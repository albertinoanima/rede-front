import { customBlur } from "@/app/fonts";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/select";
import { Edit2, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type SectionEditSkillsProps = {
    isAuthenticated?: boolean;
    isEditingSkils?: boolean;
    setIsEditingSkils?: Dispatch<SetStateAction<boolean>>;
    skills?: string[];
    onRemoveSkill?: (skill: string) => void;
}

const DEFAULT_SKILLS = [
    "Cinematografia",
    "Câmera",
    "Iluminação",
    "Direção de Fotografia",
    "Edição",
    "Color Grading",
] as const;

export const SectionEditSkills: React.FC<SectionEditSkillsProps> = ({
    isAuthenticated,
    isEditingSkils = false,
    setIsEditingSkils,
    skills = DEFAULT_SKILLS as unknown as string[],
    onRemoveSkill,
}) => {
    const toggleEditing = () => setIsEditingSkils?.((lastState) => !lastState);

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
                        onClick={toggleEditing}
                    >
                        <Edit2 width={12} height={12} />
                    </Button>
                )}

                {isAuthenticated && isEditingSkils && (
                    <div className="w-full flex gap-1">
                        <Button onClick={toggleEditing}>Guardar</Button>
                        <Button variant="secondary" onClick={toggleEditing}>
                            Cancelar
                        </Button>
                    </div>
                )}
            </div>

            <div className="w-full flex flex-col gap-4">
                <div className="flex flex-wrap gap-2.5 pt-5 pb-5 border-b border-b-white/900">
                    {skills.map((skill) => (
                        <Tag key={skill} className="flex gap-1 items-center">
                            {skill}
                            {isEditingSkils && (
                                <X
                                    width={12}
                                    height={12}
                                    color="#ffffff"
                                    className="cursor-pointer"
                                    onClick={() => onRemoveSkill?.(skill)}
                                />
                            )}
                        </Tag>
                    ))}
                </div>

                {isEditingSkils && (
                    <Select variant="secondary" className="w-full" options={[]} />
                )}

                {isEditingSkils && (
                    <div className="flex flex-wrap gap-2.5 border-[1.3px] border-dashed border-white/30 p-4 rounded-lg">
                        {skills.map((skill) => (
                            <Tag key={skill} className="flex gap-1 items-center">
                                {skill}
                            </Tag>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};