import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "Yandex",
    },
    sitemap: "https://paritet-52.ru/sitemap.xml",
  };
}
