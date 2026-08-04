import type { NewsType } from "@/components/news/news";

export function getSimilarNews(
  currentNews: NewsType,
  news: NewsType[],
  limit = 3,
): NewsType[] {
  const currentLocation = currentNews.location
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();

  return news
    .filter((item) => {
      if (item.id === currentNews.id) {
        return false;
      }

      const itemLocation = item.location
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();

      return itemLocation === currentLocation;
    })
    .slice(0, limit);
}