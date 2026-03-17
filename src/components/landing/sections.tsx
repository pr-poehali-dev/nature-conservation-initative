import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/40 bg-white/5">✦ Новый уровень</Badge>,
    title: "Ваш продукт — ваши правила.",
    showButton: true,
    buttonText: 'Узнать больше'
  },
  {
    id: 'about',
    title: 'Зачем это нужно?',
    content: 'Мы убрали всё лишнее и оставили главное — простые решения, которые действительно работают для вашего бизнеса.'
  },
  {
    id: 'features',
    title: 'Что входит в продукт',
    content: 'Всё что нужно в одном месте: удобный интерфейс, быстрый старт и поддержка на каждом шаге.'
  },
  {
    id: 'testimonials',
    title: 'Результаты говорят сами.',
    content: 'Клиенты отмечают рост эффективности уже в первый месяц работы. Простота — наш главный принцип.'
  },
  {
    id: 'join',
    title: 'Готовы начать?',
    content: 'Сделайте первый шаг прямо сейчас. Без лишних слов — просто попробуйте.',
    showButton: true,
    buttonText: 'Начать бесплатно'
  },
]