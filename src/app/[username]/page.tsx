import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { AssociatedNews } from "@/components/profile/AssociatedNews";
import { PublicProfile } from "@/components/profile/PublicProfile";
import { User } from "@/types/User";

type PublicUsersResponse =
  | User[]
  | {
      users?: User[];
      data?: {
        users?: User[];
      };
    };

type PublicProfilePageProps = {
  params: Promise<{
    username: string;
  }>;
};

const reservedRoutes = new Set([
  "about",
  "agency",
  "api",
  "login",
  "news",
  "news-details",
  "opportunities",
  "profile",
  "signup",
]);


const getApiBaseUrl = () => {
  const apiPort = process.env.API_PORT ?? "4001";
  const apiHost = process.env.API_HOST ?? "http://localhost";

  return process.env.API_BASE_URL ?? `${apiHost}:${apiPort}`;
};

const normalizeUsername = (username?: string) => username?.trim().toLowerCase() ?? "";

const normalizeUsersResponse = (data: PublicUsersResponse): User[] => {
  if (Array.isArray(data)) return data;

  return data.users ?? data.data?.users ?? [];
};

const getUsers = async () => {
  const response = await fetch(`${getApiBaseUrl()}/api/v1/users`, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("N\u00e3o foi poss\u00edvel carregar os perfis.");
  }

  return normalizeUsersResponse(await response.json() as PublicUsersResponse);
};

export default async function PublicProfilePage({ params }: PublicProfilePageProps) {
  const { username } = await params;
  const normalizedUsername = normalizeUsername(username);

  if (!normalizedUsername || reservedRoutes.has(normalizedUsername)) {
    notFound();
  }

  const users = await getUsers();
  const profile = users.find((user) => normalizeUsername(user.profileData?.username) === normalizedUsername);

  if (!profile) {
    notFound();
  }

  return (
    <main className="bg-rede-surface">
      <TopBar />
      <PublicProfile profile={profile} />
      <AssociatedNews />
      <Footer />
    </main>
  );
}