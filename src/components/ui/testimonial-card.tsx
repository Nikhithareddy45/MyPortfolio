import { cn } from "@/lib/utils"
import { StaticImageData } from "next/image"
import Image from "next/image"

export interface TestimonialCardProps {
  imageSrc: StaticImageData
  text: string
}

export function TestimonialCard({ 
  imageSrc,
  text,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg cursor-pointer",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        " text-start sm:p-3",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "border-1 border-b-3 border-cyan-700 hover:bg-gray-100 hover:scale-95  transition duration-300 dark:bg-dark-2 cursor-pointer  bg-white backdrop-blur-[25px] saturate-102 p-4 w-[100%]",
      )}
    >
      <div className="flex items-center gap-3 justify-start">
        <div className="overflow-hidden">
          <Image
            src={imageSrc}
            alt="testimonial"
            className="object-cover"
            width={48}
            height={48}
          />
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {text}
          </h3>
        </div>
      </div>
    </div>
  )
}
