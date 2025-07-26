export interface ProductData {
  slug: string
  id: number
  title: string
  description: string
  platform: string
  type: string
  modality: string
  media: MediaItem[]
  checklist: ChecklistItem[]
  seo: SEOData
  cta_text: CTAText
  sections: Section[]
  is_cohort_based_course: boolean
  secondary_cta_group: any[]
  delivery_method: string
}

export interface MediaItem {
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

export interface SEOData {
  defaultMeta: MetaItem[]
  description: string
  keywords: string[]
  schema: SchemaItem[]
  title: string
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

export interface InstructorValue {
  description: string
  has_instructor_page: boolean
  image: string
  name: string
  short_description: string
  slug: string
}

export interface FeatureValue {
  icon: string
  id: string
  subtitle: string
  title: string
}

export interface PointerValue {
  color: string
  icon: string
  id: string
  text: string
}

export interface AboutValue {
  description: string
  icon: string
  id: string
  title: string
}

export interface FeatureExplanationValue {
  checklist: string[]
  file_type: string
  file_url: string
  id: string
  title: string
  video_thumbnail: string
}

export interface TestimonialValue {
  description: string
  id: string
  name: string
  profile_image: string
  testimonial: string
  thumb: string
  video_type: string
  video_url: string
}

export interface FAQValue {
  answer: string
  id: string
  question: string
}
