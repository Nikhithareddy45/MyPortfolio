"use client";

type GalleryData = {
  title: string;
  description: string;
};

interface GalleryProps {
  data?: GalleryData;
}

const Gallery4 = ({ data }: GalleryProps) => {
  if (!data) return null; // or render fallback UI

  return (
    <section className="py-6 mt-15">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center justify-center md:mb-1 lg:mb-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-center">
              {data.title}
            </h2>
            <p className="max-w-[100%] text-center">{data.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
