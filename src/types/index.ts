import type { ReactNode } from "react"

export interface StatItem {
  label: string
  value: string
}

export interface CaseItem {
  name: string
  role: string
  achievement: string
  quote?: string
}

export interface TableRow {
  sphere: string
  percent: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  stats?: StatItem[]
  cases?: CaseItem[]
  table?: TableRow[]
  list?: string[]
  highlight?: string
  heroImage?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}