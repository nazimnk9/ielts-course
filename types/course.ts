export interface CourseData {
  slug: string
  id: number
  title: string
  description: string
  media: Medium[]
  checklist: ChecklistItem[]
  seo: SEO
  cta_text: CTAText
  sections: Section[]
}

export interface Medium {
  name: string
  resource_type: string
  resource_value: string
  thumbnail_url?: string
}

export interface ChecklistItem {
  color: string
  icon: string
  id: string
  list_page_visibility: boolean
  text: string
}

export interface SEO {
  title: string
  description: string
  keywords: string[]
  defaultMeta: MetaItem[]
  schema: SchemaItem[]
}

export interface MetaItem {
  content: string
  type: string
  value: string
}

export interface SchemaItem {
  meta_name: string
  meta_value: string
  type: string
}

export interface CTAText {
  name: string
  value: string
}

export interface Section {
  type: string
  name: string
  description: string
  bg_color: string
  order_idx: number
  values: any[]
}

export interface Instructor {
  description: string
  has_instructor_page: boolean
  image: string
  name: string
  short_description: string
  slug: string
}

export interface Feature {
  icon: string
  id: string
  subtitle: string
  title: string
}

export interface Pointer {
  color: string
  icon: string
  id: string
  text: string
}

export interface AboutItem {
  description: string
  icon: string
  id: string
  title: string
}

export interface FeatureExplanation {
  checklist: string[]
  file_type: string
  file_url: string
  id: string
  title: string
  video_thumbnail: string
}

export interface Testimonial {
  description: string
  id: string
  name: string
  profile_image: string
  testimonial: string
  thumb?: string
  video_type: string
  video_url: string
}

export interface FAQ {
  answer: string
  id: string
  question: string
}
