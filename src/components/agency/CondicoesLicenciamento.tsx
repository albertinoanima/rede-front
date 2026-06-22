import { Download } from 'lucide-react'
import { Heading } from '@/components/ui/heading'
import { Button } from '@/components/ui/button'
import Accordion from '@/components/ui/Accordion'

const items = [
  { label: 'Ideal para festivais', content: 'Conteúdo sobre condições ideais para festivais.' },
  { label: 'Duração da Licença', content: 'A duração da licença pode variar entre 1 e 5 anos.' },
  { label: 'Território', content: 'Licenciamento disponível para todos os países PALOP+TL.' },
  { label: 'Custos e Taxas', content: 'Os custos variam conforme o tipo de licença e território.' },
  { label: 'Requisitos Técnicos', content: 'Formatos aceites: DCP, ProRes, H.264 4K.' },
]

export function CondicoesLicenciamento() {
  return (
    <section className="w-full bg-rede-black py-20 px-6">
      <div className="max-w-[860px] mx-auto">
        <Heading level="h3" className="text-foreground mb-10">
          Condições de Licenciamento
        </Heading>

        {/* <Accordion items={items} /> */}

        <div className="flex justify-center mt-14">
          <Button
            variant="primary"
            size="lg"
            icon={<Download size={18} />}
            iconPosition="left"
          >
            Download Termos (PDF)
          </Button>
        </div>
      </div>
    </section>
  )
}