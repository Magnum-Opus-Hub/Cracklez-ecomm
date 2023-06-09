import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token: "skP6WGauYBWMWbKMURDgGWUaR2XH8guNGw5KSGZTKYw31aiDpmBwQL50CFkblFmNd8tw8p2dQpGgMG4ghfHD92892zC8w7FE0OBW9LIMVBhQUalv0bs4TjjacQMoVblMl5zXaMCReDF8iOJ9rfAOOEJpJM55LQVEjkOxApvsuAUzVDr808Ki",
  useCdn,
})
