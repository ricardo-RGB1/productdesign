import { getProduct } from '@/lib/products'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

const getGradientClass = (slug: string) => {
  switch(slug) {
    case 'lisin':
      return 'bg-lisin-gradient';
    case 'indeed':
      return 'bg-indeed-gradient';
    case 'pixie':
      return 'bg-pixie-gradient';
    default:
      return 'bg-default-gradient';
  }
};

type Props = { 
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

/**
 * Product page component that displays details for a specific product
 * @param params Object containing the product slug from the URL
 * @returns Product page component or 404 if product not found
 */
export default async function Page({ params }: Props) {
  // Prevent access to pixie page
  if (params.slug === 'pixie') {
    notFound()  // This will show your 404 page
  }

  const product = getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-left w-full">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-lg">RGB</span>
        </Link>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`w-full py-12 md:py-24 lg:py-32 ${getGradientClass(params.slug)}`}>
          <div className="container px-4 md:px-6 max-w-[1400px] mx-auto">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              {product.title}
            </h1>
            <p className="max-w-[700px] text-[18px] text-gray-500 md:text-xl dark:text-gray-400 mb-12">
              {product.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 -ml-4 md:-ml-6  gap-4 mb-6">
              {product.images.map((image, index) => (
                <div key={index} className="relative w-full mb-4 md:mb-0" style={{ paddingTop: '170%' }}>
                  <Image
                    src={image}
                    alt={`${product.name} Screen ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="rounded-lg object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-[18px] text-gray-500 dark:text-gray-400 mb-6">
              {product.content.overview}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Challenge</h3>
                  <p className="text-[18px] text-gray-500 dark:text-gray-400">
                    {product.content.challenge}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Solution</h3>
                  <p className="text-[18px] text-gray-500 dark:text-gray-400">
                    {product.content.solution}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-8">Design Process</h2>
              <div className="w-full max-w-4xl">
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">1. Research and Discovery</h3>
                  <p className="text-[18px] text-gray-500 dark:text-gray-400 mb-4">
                    {product.content.designProcess.research.description}
                  </p>
                  <Image
                    src={product.content.designProcess.research.image}
                    alt="Research and Discovery Process"
                    width={800}
                    height={400}
                    className="rounded-lg object-cover w-full"
                  />
                  {product.content.designProcess.research.findings && (
                    <>
                      <span className="font-bold text-[18px] text-gray-500 dark:text-gray-400">Research Findings:</span>
                      <ul className="list-disc list-inside text-[18px] text-gray-500 dark:text-gray-400 mb-4">
                        {product.content.designProcess.research.findings.map((finding, index) => (
                          <li key={index}>{finding}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">2. Ideation and Conceptualization</h3>
                  <p className="text-[18px] text-gray-500 dark:text-gray-400 mb-4">
                   {product.content.designProcess.ideation.description}
                  </p>
                  {product.content.designProcess.ideation.businessGoal && (
                    <>
                      <span className="font-bold text-[18px] text-gray-500 dark:text-gray-400">Primary business goal:</span>
                      <ul className="list-disc list-inside text-[18px] text-gray-500 dark:text-gray-400 mb-4">
                        {product.content.designProcess.ideation.businessGoal.map((goal, index) => (
                          <li key={index}>{goal}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Image
                    src={product.content.designProcess.ideation.image}
                    alt="User Persona"
                    width={800}
                    height={400}
                    className="rounded-lg object-cover w-full"
                  />
                  {product.content.designProcess.ideation.image2 && (
                    <Image
                      src={product.content.designProcess.ideation.image2}
                      alt="User Flow"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  )}
                </div>

                {product.content.designProcess.prototyping && (
                  <div className="mb-12">
                    <h3 className="text-xl font-semibold mb-4">3. Prototyping</h3>
                    <p className="text-[18px] text-gray-500 dark:text-gray-400 mb-4">
                      {product.content.designProcess.prototyping.description}
                    </p>
                    <div className="grid gap-4 max-w-4xl">
                      {product.content.designProcess.prototyping.images?.wireframe && (
                        <Image
                          src={product.content.designProcess.prototyping.images.wireframe}
                          alt="Low-fidelity Wireframes"
                          width={800}
                          height={400}
                          className="rounded-lg object-cover w-full"
                        />
                      )}
                      {product.content.designProcess.prototyping.images?.prototype && (
                        <Image
                          src={product.content.designProcess.prototyping.images.prototype}
                          alt="High-fidelity Prototype"
                          width={800}
                          height={400}
                          className="rounded-lg object-cover w-full"
                        />
                      )}
                    </div>
                  </div>
                )}

                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">4. Testing</h3>
                  <p className="text-[18px] text-gray-500 dark:text-gray-400 mb-4">
                    {product.content.designProcess.testing.description}
                  </p>
                  {product.content.designProcess.testing.findings && (
                    <>
                      <span className="font-bold text-[18px] text-gray-500 dark:text-gray-400">Findings:</span>
                      <ul className="list-disc list-inside text-[18px] text-gray-500 dark:text-gray-400 mb-4">
                        {product.content.designProcess.testing.findings.map((finding, index) => {
                          if (finding.includes("Possible solution:")) {
                            const [prefix, ...rest] = finding.split("Possible solution:");
                            return (
                              <li key={index}>
                                {prefix}<br /><strong>Possible solution:</strong>{rest.join("Possible solution:")}
                              </li>
                            );
                          }
                          return <li key={index}>{finding}</li>;
                        })}
                      </ul>
                    </>
                  )}
                </div>

                {/* Implementation */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4">5. Implementation</h3>
                  <p className="text-[18px] text-gray-500 dark:text-gray-400 mb-4">
                    {product.content.designProcess.implementation.description}
                  </p>
                  {product.content.designProcess.implementation.video ? (
                    <video 
                      controls 
                      className="w-full rounded-lg"
                      preload="none"
                      playsInline
                      poster={product.content.designProcess.implementation.video.thumbnail}
                    >
                      <source 
                        src={product.content.designProcess.implementation.video.url} 
                        type={product.content.designProcess.implementation.video.type} 
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : product.content.designProcess.implementation.image && (
                    <Image
                      src={product.content.designProcess.implementation.image}
                      alt="Final Design Implementation"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover w-full"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features and Outcomes Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold mb-8">Key Features and Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {product.content.features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-[18px] text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {product.content.outcomes.map((outcome, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{outcome.title}</h3>
                    <p className="text-[18px] text-gray-500 dark:text-gray-400">
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learnings Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold mb-8">Reflections and Learnings</h2>
            <p className="text-[18px] text-gray-500 dark:text-gray-400 mb-6">
              This project provided valuable insights into the challenges and opportunities of designing AI-driven conversational interfaces. Key learnings include:
            </p>
            <ul className="list-disc list-inside text-[18px] text-gray-500 dark:text-gray-400 mb-8">
              {product.content.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
            <section className="w-full py-12 md:py-18">
              <div className="container">
                <div className="flex flex-col items-center mt-8">
                  <p className="text-[18px] text-gray-700 dark:text-gray-400">
                    <span className="font-bold">email:</span> ricardogb011@gmail.com
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t max-w-[1240px] mx-auto">
        <p className="text-[18px] text-gray-500 dark:text-gray-400">
          © 2024 Ricardo Garcia Bahena. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
