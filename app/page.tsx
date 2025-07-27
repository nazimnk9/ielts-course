import type { Metadata } from "next"
import type { CourseData } from "@/types/course"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import CourseContent from "@/components/CourseContent"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import PageLoader from "@/components/PageLoader"

async function getCourseData(): Promise<CourseData> {
  const response = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en&=",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json",
      },
      next: { revalidate: 3600 }, // ISR - revalidate every hour
    },
  )

  if (!response.ok) {
    throw new Error("Failed to fetch course data")
  }

  const result = await response.json()
  return result.data
}

export async function generateMetadata(): Promise<Metadata> {
  const courseData = await getCourseData()

  return {
    title: courseData.seo.title,
    description: courseData.seo.description,
    keywords: courseData.seo.keywords,
    openGraph: {
      title: courseData.title,
      description: courseData.seo.description,
      images: [courseData.media.find((m) => m.name === "thumbnail")?.resource_value || ""],
      type: "website",
    },
  }
}

export default async function CoursePage() {
  const courseData = await getCourseData()

  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <HeroSection courseData={courseData} />
          <CourseContent courseData={courseData} />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}
