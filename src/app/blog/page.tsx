import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";
import PageHero, { HeroHighlight } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Blog & Veille Technologique — AKILI Labs",
  description: "Insights, études de cas et bonnes pratiques sur l'ERP, l'Intelligence Artificielle et le DevSecOps en Afrique.",
};

const tagColors: Record<string, string> = {
  ERP: "bg-blue-50 text-blue-700 border-blue-100",
  IA: "bg-purple-50 text-purple-700 border-purple-100",
  DevSecOps: "bg-green-50 text-green-700 border-green-100",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Veille & Insights"
        title={
          <>
            <span className="text-white">Blog & </span>
            <HeroHighlight>Veille</HeroHighlight>
            <span className="text-white"> Technologique</span>
          </>
        }
        subtitle="Articles techniques, études de cas et bonnes pratiques par les experts AKILI Labs. ERP · Intelligence Artificielle · DevSecOps."
      />

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          {blogPosts[0] && (
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group block bg-[#E8F0FE] rounded-2xl overflow-hidden border border-[#D9E2EC] hover:shadow-xl hover:border-[#FF5500] transition-[box-shadow,border-color] duration-300 mb-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-48 lg:h-auto bg-gradient-to-br from-[#1A2B3C] to-[#243548] flex items-center justify-center">
                  <span className="text-[#FF5500] font-black text-6xl opacity-20">
                    {blogPosts[0].tag}
                  </span>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${tagColors[blogPosts[0].tag] ?? "bg-gray-100 text-gray-600"}`}>
                      {blogPosts[0].category}
                    </span>
                    <span className="text-xs text-[#FF5500] font-semibold">À la une</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#1A2B3C] mb-3 group-hover:text-[#FF5500] transition-colors leading-snug">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-[#374151] text-sm leading-relaxed mb-5">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-5">
                    <span className="flex items-center gap-1"><Calendar size={11} />
                      {new Date(blogPosts[0].date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1"><Clock size={11} />{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-[#1A2B3C] group-hover:text-[#FF5500] transition-colors">
                    Lire l&apos;article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#D9E2EC] hover:shadow-xl hover:border-[#FF5500] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1"
              >
                <div className="h-36 bg-gradient-to-br from-[#1A2B3C] to-[#243548] flex items-center justify-center">
                  <span className="text-[#FF5500] font-black text-4xl opacity-20">{post.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${tagColors[post.tag] ?? "bg-gray-100 text-gray-600"}`}>
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-[#1A2B3C] mb-2 group-hover:text-[#FF5500] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[#374151] line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Calendar size={11} />
                      {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-14 bg-[#1A2B3C] rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-black text-white mb-2">Restez à la pointe de la tech</h2>
            <p className="text-white/60 mb-6">Inscrivez-vous à notre newsletter — 2 articles par mois, zéro spam.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-[#FF5500] text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#FF5500] text-white font-semibold rounded-xl hover:bg-[#e04d00] transition-[background-color,transform] duration-150 ease-out active:scale-[0.97] whitespace-nowrap text-sm"
              >
                S&apos;abonner →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
