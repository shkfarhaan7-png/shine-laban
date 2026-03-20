import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { MenuCategoryPage } from "@/components/menu-category-page";
import { getMenuCategory, getMenuCategorySlugs } from "@/lib/content";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return getMenuCategorySlugs().map((category) => ({
    category
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const menuCategory = getMenuCategory(category);

  if (!menuCategory) {
    return {
      title: "Menu | Shine Laban"
    };
  }

  return {
    title: `${menuCategory.title} | Shine Laban`,
    description: menuCategory.description
  };
}

export default async function MenuCategoryRoute({ params }: PageProps) {
  const { category } = await params;
  const menuCategory = getMenuCategory(category);

  if (!menuCategory) {
    notFound();
  }

  return (
    <>
      <main className="relative overflow-x-clip pt-6 md:pt-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden">
          <div className="absolute left-[-12rem] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-gold/10 blur-[140px]" />
          <div className="absolute right-[-12rem] top-[24rem] h-[28rem] w-[28rem] rounded-full bg-blue-300/10 blur-[160px]" />
        </div>
        <MenuCategoryPage category={menuCategory} />
      </main>
      <Footer />
    </>
  );
}
