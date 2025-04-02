import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ClubLandingPage() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg flex flex-col items-center max-w-md w-full">
        <div className="mb-8 relative w-40 h-40">
          {/* Replace with your actual logo */}
          <Image src="/placeholder.svg?height=160&width=160" alt="Club Logo" fill className="object-contain" priority />
        </div>

        <div className="flex flex-row gap-4 w-full">
          <Button asChild className="w-full py-6 text-lg">
            <Link href="/club">Enter the club</Link>
          </Button>

          <Button asChild variant="outline" className="w-full py-6 text-lg">
            <Link href="/apply">Apply to join</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
