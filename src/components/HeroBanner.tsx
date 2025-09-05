"use client"

export default function HeroBanner({title}: { title: string }) {
    return (
        <div className="relative h-[180px] w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-[url('https://gnodesign.com/templates/movify/assets/images/posters/movie-collection.jpg')] bg-center bg-no-repeat bg-cover"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#a11f3c] to-[#9352b3] opacity-80"/>
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