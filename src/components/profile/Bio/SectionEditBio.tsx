import { Edit2 } from "lucide-react";
import { customBlur } from "@/app/fonts";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { Heading } from "@/components/ui/heading";
import { Textarea } from "@/components/ui/textarea";

type SectionEditBioProps = {
  isAuthenticated?: boolean;
  isEditingBio?: boolean;
  setIsEditingBio?: Dispatch<SetStateAction<boolean>>;
  bio?: string;
  onSaveBio?: (bio: string) => void;
}

const DEFAULT_BIO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";

export const SectionEditBio: React.FC<SectionEditBioProps> = ({
  isAuthenticated,
  isEditingBio = false,
  setIsEditingBio,
  bio = DEFAULT_BIO,
  onSaveBio,
}) => {
  const [draftBio, setDraftBio] = useState(bio);

  const toggleEditing = () => setIsEditingBio?.((lastState) => !lastState);

  const handleSave = () => {
    onSaveBio?.(draftBio);
    toggleEditing();
  };

  const handleCancel = () => {
    setDraftBio(bio);
    toggleEditing();
  };

  return (
    <div className="w-1/2 flex flex-col h-auto">
      <div className="flex items-center gap-4 mb-5">
        <Heading className={`${customBlur.className} text-[48px] leading-12`}>
          Biografia
        </Heading>

        {isAuthenticated && !isEditingBio && (
          <Button
            variant="secondary"
            className="rounded-full p-0 shrink-0 aspect-square w-10 h-10 flex items-center justify-center"
            onClick={toggleEditing}
          >
            <Edit2 width={12} height={12} />
          </Button>
        )}

        {isAuthenticated && isEditingBio && (
          <div className="w-full flex gap-1">
            <Button onClick={handleSave}>Guardar</Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancelar
            </Button>
          </div>
        )}
      </div>

      {isEditingBio ? (
        <Textarea
          className="w-full min-h-37.5"
          value={draftBio}
          onChange={(e) => setDraftBio(e.target.value)}
        />
      ) : (
        <Text>{bio}</Text>
      )}
    </div>
  );
};