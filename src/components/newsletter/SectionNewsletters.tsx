import { NewsType } from "../news/news"
import { NewsletterCard } from "../NewsletterCard"

const newsletters = [
    {
        title: "Lorem ipsum dolor sit amet consectetur",
        date: "Fev de 2026",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur",
        date: "Fev de 2026",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur",
        date: "Fev de 2026",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur",
        date: "Fev de 2026",
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur",
        date: "Fev de 2026",
    }
]

export const SectionNewsletters: React.FC = () => {
    return (
        <section className="mt-20 h-auto w-full">
            <div className="mx-auto h-auto w-full max-w-360">
                <div className="grid flex-1 grid-cols-1 gap-4 px-6 pb-6 md:grid-cols-2 xl:grid-cols-3">
                    {
                        newsletters.map((newsletter) => (
                            <NewsletterCard newsletterData={newsletter} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}