import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen background flex items-center justify-center">
      <div className="h-fit w-3/5 flex flex-col">
        <div className="flex flex-col">
          <span className="text-heading text-dark leading-tight font-bold max-w-[480px] break-words">Use Berry to Power Your Next</span>
          <span className="text-heading text-blue font-bold max-w-[480px] break-words mt-2">React Project</span>

          <p className="my-4 max-w-[480px] break-words text-small">
            Berry is React based Dashboard template which helps you to build faster and beautiful web applications.
          </p>

          <Link href="/dashboard/default" className="px-8 py-2 rounded-md text-x-small font-medium text-white hover:opacity-75 transition-all duration-200 bg-very-purple w-fit">Live Preivew</Link>
        </div>
      </div>
    </div>
  )
}