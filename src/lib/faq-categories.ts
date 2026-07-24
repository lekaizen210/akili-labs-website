export const CATEGORY_IDS = ["all", "erp", "digitalTransformation", "ai", "devsecops", "akili"] as const;

export const categoryColors: Record<string, string> = {
  erp:                   "bg-blue-50 text-blue-700 border-blue-200",
  digitalTransformation: "bg-purple-50 text-purple-700 border-purple-200",
  ai:                    "bg-emerald-50 text-emerald-700 border-emerald-200",
  devsecops:             "bg-orange-50 text-orange-700 border-orange-200",
  akili:                 "bg-blue-light text-navy border-line",
};
