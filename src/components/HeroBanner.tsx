"use client"

interface HeroBannerProps {
    title: string;
    subtitle?: string;
}

export default function HeroBanner({ title, subtitle }: HeroBannerProps) {
    return (
        <div className="relative h-[180px] w-full overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#a11f3c] to-[#9352b3]" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <div>
                    <h1 className="text-4xl font-medium text-white">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
}