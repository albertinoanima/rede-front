import { NewsletterCard } from "../NewsletterCard"
import { newsletters } from "./data"

export const SectionNewsletters: React.FC = () => {
    return (
        <section className="mt-20 h-auto w-full">
            <div className="mx-auto h-auto w-full max-w-360">
                <div className="grid flex-1 grid-cols-1 gap-4 px-6 pb-6 md:grid-cols-2 xl:grid-cols-3">
                    {
                        newsletters.map((newsletter, index) => (
                            <NewsletterCard newsletterData={newsletter} key={index + "dhdrh"} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}