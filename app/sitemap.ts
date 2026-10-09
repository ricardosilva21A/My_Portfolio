import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ricardosilva.dev";

  // Using relative URLs here, which get prefixed with metadataBase or we can output full URLs
  const routes = [
    "",
    "/about",
    "/projects",
    "/interests",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes];
}
