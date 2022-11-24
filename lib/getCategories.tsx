import { cache } from "react"

export type PageProps = {
  params?: any
  children?: React.ReactNode
}
export type Category = {
  name: string
  slug: string
  route: string
  items: Omit<Category, "items">[]
}

export const getCategories = cache((): Category[] => [
  {
    name: "SpaceX",
    slug: "/",
    route: "/",
    items: [
      {
        name: "Company",
        slug: "company",
        route: "/company",
      },
      {
        name: "History",
        slug: "history",
        route: "/history",
      },
      {
        name: "Mission",
        slug: "mission",
        route: "/mission",
      },
      {
        name: "Launches",
        slug: "launches",
        route: "/launches",
      },
      {
        name: "Rockets",
        slug: "rockets",
        route: "/rockets",
      },
      {
        name: "Capsules",
        slug: "capsules",
        route: "/capsules",
      },
      {
        name: "Cores",
        slug: "cores",
        route: "/cores",
      },
      {
        name: "Ships",
        slug: "ships",
        route: "/ships",
      },
      {
        name: "Dragons",
        slug: "dragons",
        route: "/dragons",
      },
      {
        name: "Landpads",
        slug: "landpads",
        route: "/landpads",
      },
      {
        name: "Crew",
        slug: "crew",
        route: "/crew",
      },
      {
        name: "Launches",
        slug: "launches",
        route: "/launches",
      },
      {
        name: "Payloads",
        slug: "payloads",
        route: "/payloads",
      },
      {
        name: "Roadster",
        slug: "roadster",
        route: "/roadster",
      },
      {
        name: "Starlink",
        slug: "starlink",
        route: "/starlink",
      },
    ],
  },
])

export async function fetchCategoryBySlug(slug: string | undefined) {
  return getCategories().find(category => category.slug === slug)
}

export async function fetchCategories(): Promise<Category[]> {
  return getCategories()
}

async function findSubCategory(
  category: Category | undefined,
  subCategorySlug: string | undefined
) {
  return category?.items.find(category => category.slug === subCategorySlug)
}

export async function fetchSubCategory(
  categorySlug: string | undefined,
  subCategorySlug: string | undefined
) {
  const category = await fetchCategoryBySlug(categorySlug)
  return findSubCategory(category, subCategorySlug)
}
