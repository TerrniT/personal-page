export function useLangMeta(
  pageKey: "home" | "work" | "articles" | "about" | "uses" | "contact",
  seoImage: string,
  format: "prefix" | "suffix" = "suffix",
) {
  const { t, locale } = useI18n();

  const runtimeConfig = useRuntimeConfig();

  const config = runtimeConfig.public;

  // Compute i18n values
  const seoTitle = computed(() => t(`${pageKey}.title`));
  const seoDesc = computed(() => t(`${pageKey}.description`));

  // titleTemplate position
  const formatTitle =
    format === "prefix" ? `Gleb Kotovsky - %s` : `%s - Gleb Kotovsky`;

  // Built-in SeoMeta Composable
  useSeoMeta({
    title: seoTitle.value,
    description: seoDesc.value,
    twitterTitle: formatTitle,
    twitterDescription: seoDesc.value,
    twitterImage: seoImage,
    twitterSite: config.domain,
    ogTitle: formatTitle,
    ogDescription: seoDesc.value,
    ogImage: seoImage,
    ogType: "website",
    ogLocale: locale.value,
    ogUrl: config.social,
    titleTemplate: formatTitle,
  });
}
