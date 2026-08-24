"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { getUsers, NetworkUser } from "@/actions/users";
import { customBlur } from "@/app/fonts";

import { ProfileCard, ProfileType } from "../ProfileCard";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import {
  defaultNetworkFilters,
  FilterSidebar,
  getNetworkFiltersFromParams,
} from "./FilterSidebar";
import { filterProfiles } from "./actions";
import {
  angolaCitiesByProvince,
  caboVerdeMunicipalitiesByIsland,
  guineaBissauSectorsByRegion,
  mozambiqueDistrictsByProvince,
  saoTomePrincipeCitiesByRegion,
  timorLesteAdministrativePostsByMunicipality,
} from "./filters";

const fallbackProfileImage = "/assets/profile/profile.png";

const countryValuesByApiName: Record<string, string> = {
  angola: "angola",
  "cabo-verde": "cabo-verde",
  "cabo verde": "cabo-verde",
  "guine-bissau": "guine-bissau",
  "guine bissau": "guine-bissau",
  "guinea-bissau": "guine-bissau",
  "guinea bissau": "guine-bissau",
  mocambique: "mocambique",
  mozambique: "mocambique",
  "sao-tome-e-principe": "sao-tome-e-principe",
  "sao-tome-principe": "sao-tome-e-principe",
  "sao tome e principe": "sao-tome-e-principe",
  "sao tome principe": "sao-tome-e-principe",
  "timor-leste": "timor-leste",
  "timor leste": "timor-leste",
};

const citiesByCountry = {
  angola: angolaCitiesByProvince,
  "cabo-verde": caboVerdeMunicipalitiesByIsland,
  "guine-bissau": guineaBissauSectorsByRegion,
  mocambique: mozambiqueDistrictsByProvince,
  "sao-tome-e-principe": saoTomePrincipeCitiesByRegion,
  "timor-leste": timorLesteAdministrativePostsByMunicipality,
};

const slugify = (value?: string): string =>
  value
    ?.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") ?? "";

const normalizeCountry = (country?: string): string => {
  const slug = slugify(country);
  const normalizedCountry = country?.toLowerCase().trim() ?? "";

  return (
    countryValuesByApiName[slug] ??
    countryValuesByApiName[normalizedCountry] ??
    slug
  );
};

const findProvinceByCity = (
  country: string,
  city: string,
): string => {
  const countryCities =
    citiesByCountry[country as keyof typeof citiesByCountry];

  if (!countryCities || !city) {
    return "";
  }

  return (
    Object.entries(countryCities).find(([, cities]) =>
      cities.some(
        (item) =>
          item.value === city || slugify(item.label) === city,
      ),
    )?.[0] ?? ""
  );
};

const buildTags = (user: NetworkUser): string[] => {
  const profileData = user.profileData;

  const tags = [
    profileData?.country,
    profileData?.city,
    ...(profileData?.services ?? []),
    ...(profileData?.coreSkills ?? []),
  ].filter((tag): tag is string => Boolean(tag));

  return Array.from(new Set(tags));
};

const getProfileTitle = (user: NetworkUser): string => {
  const profileData = user.profileData;

  return (
    profileData?.commercialName ||
    profileData?.artisticName ||
    user.name ||
    profileData?.username ||
    "Perfil"
  );
};

const toProfileCardData = (
  user: NetworkUser,
  index: number,
): ProfileType => {
  const profileData = user.profileData;
  const country = normalizeCountry(profileData?.country);
  const city = slugify(profileData?.city);
  const isCompany = profileData?.accountType === "company";

  const category = slugify(
    isCompany
      ? profileData?.services?.[0]
      : profileData?.coreSkills?.[0]
  );

  return {
    id: user.id ?? user._id ?? user.email ?? `user-${index}`,
    title: getProfileTitle(user),
    tags: buildTags(user),
    bio: profileData?.bio,
    cover:
      profileData?.imageUrl ||
      user.imageUrl ||
      fallbackProfileImage,
    country,
    province: findProvinceByCity(country, city),
    city,
    type: isCompany ? "empresa" : "profissionais",
    category,
    username: profileData?.username,
  };
};

type NetworkFilters = ReturnType<
  typeof getNetworkFiltersFromParams
>;

interface AdvancedSearchContentProps {
  initialFilters: NetworkFilters;
}

const AdvancedSearchContent: React.FC<
  AdvancedSearchContentProps
> = ({ initialFilters }) => {
  const [filters, setFilters] =
    useState<NetworkFilters>(initialFilters);

  const [profiles, setProfiles] = useState<ProfileType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isActive = true;

    const loadUsers = async () => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await getUsers();

        if (!isActive) {
          return;
        }

        if (response.error) {
          setProfiles([]);
          setErrorMessage(
            response.message ||
              "Não foi possível carregar os perfis.",
          );
          return;
        }

        const users = response.data?.users ?? [];

        setProfiles(users.map(toProfileCardData));
      } catch {
        if (!isActive) {
          return;
        }

        setProfiles([]);
        setErrorMessage(
          "Não foi possível carregar os perfis.",
        );
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    void loadUsers();

    return () => {
      isActive = false;
    };
  }, []);

  const results = useMemo(
    () => filterProfiles(profiles, filters),
    [filters, profiles],
  );

  const handleClear = () => {
    setFilters({ ...defaultNetworkFilters });
  };

  return (
    <section className="h-auto w-full">
      <div className="mx-auto h-auto w-full max-w-360">
        <div className="mt-5 flex items-end justify-between gap-4 px-4 sm:items-center sm:px-6 lg:px-0">
          <Heading
            level="h2"
            className={`${customBlur.className} mb-5 text-[40px] leading-[0.95] font-medium text-rede-yellow sm:ml-3 sm:text-[48px] sm:leading-11.5`}
          >
            Pesquisa
            <br />
            avançada
          </Heading>

          <div className="flex shrink-0 justify-end pb-5 sm:px-6 sm:py-4">
            <Text
              aria-live="polite"
              className="text-right text-sm leading-4"
            >
              {results.length}{" "}
              {results.length === 1
                ? "resultado"
                : "resultados"}
            </Text>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col lg:mt-10 lg:flex-row">
          <div className="w-full shrink-0 px-4 sm:px-6 lg:w-auto lg:px-0">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onClear={handleClear}
            />
          </div>

          <div className="mt-8 flex min-w-0 flex-1 flex-col lg:mt-0">
            {isLoading && (
              <Text
                role="status"
                className="px-4 pb-6 text-sm leading-5 sm:px-6"
              >
                A carregar perfis...
              </Text>
            )}

            {!isLoading && errorMessage && (
              <Text
                role="alert"
                className="px-4 pb-6 text-sm leading-5 sm:px-6"
              >
                {errorMessage}
              </Text>
            )}

            {!isLoading &&
              !errorMessage &&
              results.length === 0 && (
                <Text className="px-4 pb-6 text-sm leading-5 sm:px-6">
                  Nenhum resultado encontrado.
                </Text>
              )}

            {!isLoading &&
              !errorMessage &&
              results.length > 0 && (
                <div className="grid w-full grid-cols-1 gap-4 px-4 pb-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
                  {results.map((profile) => (
                    <ProfileCard
                      key={profile.id}
                      profileData={profile}
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const AdvancedSearch: React.FC = () => {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag") ?? "";
  const country = searchParams.get("country") ?? "";
  const province = searchParams.get("province") ?? "";
  const city = searchParams.get("city") ?? "";
  const type = searchParams.get("type") ?? "";
  const category = searchParams.get("category") ?? "";
  const subCategory =
    searchParams.get("subCategory") ?? "";

  const initialFilters = getNetworkFiltersFromParams({
    tag,
    country,
    province,
    city,
    type,
    category,
    subCategory,
  });

  const paramsKey = [
    tag,
    country,
    province,
    city,
    type,
    category,
    subCategory,
  ].join(":");

  return (
    <AdvancedSearchContent
      key={paramsKey}
      initialFilters={initialFilters}
    />
  );
};