export type Category = {
  id: string
  name: string
  slug: string
  description: string
}

export const routes: { name: string; route: string; categories: Category[] }[] =
  [
    {
      name: "Home",
      route: "/",
      categories: [],
    },
    {
      name: "launches",
      route: "/launches",
      categories: [
        {
          id: "launches",
          name: "Launches",
          slug: "/launches",
          description: "SpaceX launches",
        },
        {
          id: "upcoming",
          name: "Upcoming",
          slug: "/launches/upcoming",
          description: "Upcoming SpaceX launches",
        },
        {
          id: "past",
          name: "Past",
          slug: "/launches/past",
          description: "Past SpaceX launches",
        },
        {
          id: "latest",
          name: "Latest",
          slug: "/launches/latest",
          description: "Latest SpaceX launches",
        },
        {
          id: "next",
          name: "Next",
          slug: "/launches/next",
          description: "Next SpaceX launches",
        },
      ],
    },
    {
      name: "Pads",
      route: "/pads",
      categories: [
        {
          id: "launchpads",
          name: "Launchpads",
          slug: "/launchpads",
          description: "SpaceX launchpads",
        },
        {
          id: "landpads",
          name: "Landpads",
          slug: "/landpads",
          description: "SpaceX Landpads",
        },
      ],
    },
    {
      name: "Rockets",
      route: "/rockets",
      categories: [
        {
          id: "rockets",
          name: "Rockets",
          slug: "/rockets",
          description: "SpaceX rockets",
        },
        {
          id: "capsules",
          name: "Capsules",
          slug: "/capsules",
          description: "SpaceX capsules",
        },
        {
          id: "cores",
          name: "Cores",
          slug: "cores",
          description: "SpaceX cores",
        },
        {
          id: "payloads",
          name: "Payloads",
          slug: "/payloads",
          description: "SpaceX payloads",
        },
      ],
    },
    {
      name: "Dragons",
      route: "/dragons",
      categories: [
        {
          id: "dragons",
          name: "Dragons",
          slug: "/dragons",
          description: "SpaceX dragons",
        },
      ],
    },
    {
      name: "Ships",
      route: "/ships",
      categories: [
        {
          id: "ships",
          name: "Ships",
          slug: "/ships",
          description: "SpaceX ships",
        },
        {
          id: "active",
          name: "Active",
          slug: "/ships/active",
          description: "SpaceX active ships",
        },
      ],
    },
    {
      name: "Company",
      route: "/company",
      categories: [
        {
          id: "company",
          name: "Company",
          slug: "/company",
          description: "SpaceX company",
        },
        {
          id: "roadster",
          name: "Roadster",
          slug: "/roadster",
          description: "SpaceX Roadster",
        },
      ],
    },
  ]
