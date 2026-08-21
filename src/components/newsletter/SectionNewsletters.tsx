import { NewsletterCard } from '../NewsletterCard'
import { newsletters } from './data'

export const SectionNewsletters: React.FC = () => {
  return (
    <section className="mt-12 h-auto w-full sm:mt-16 lg:mt-20">
      <div className="mx-auto h-auto w-full max-w-360">
        <div className="grid min-w-0 grid-cols-1 gap-4 px-4 pb-6 sm:grid-cols-2 sm:px-6 xl:grid-cols-3">
          {newsletters.map((newsletter, index) => (
            <NewsletterCard
              key={`${newsletter.title}-${index}`}
              newsletterData={newsletter}
            />
          ))}
        </div>
      </div>
    </section>
  )
}