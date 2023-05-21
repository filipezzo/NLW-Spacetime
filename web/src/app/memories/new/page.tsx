import NewMemoryForm from '@/components/NewMemoryForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex w-[40rem] flex-1 flex-col gap-4 p-16">
      <Link
        className="mb-4 flex items-center gap-[0.7rem] text-sm text-gray-200 hover:text-gray-100"
        href="/"
      >
        <ChevronLeft width={16} height={16} />
        Back to timeline
      </Link>

      <NewMemoryForm />
    </div>
  )
}
