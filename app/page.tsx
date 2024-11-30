import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'



export default function Component() {
  const projects = [
    {
      id: 1,
      title: "Lisin",
      slug: "lisin",
      description: "A web app connecting users with professionals to gain their expert advice.",
      image: "/Lisin.png"
    },
    {
      id: 2,
      title: "Indeed",
      slug: "indeed",
      description: "A new conversational AI feature to boost job searches and increase revenue.",
      image: "/indeed.png"
    },
    {
      id: 3,
      title: "Pixie",
      slug: "pixie",
      description: "An Alexa skill to help inspire creative writing.",
      image: "/pixie.png",
      isComingSoon: false
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ricardo Garcia Bahena
                </h1>
                <p className="max-w-[700px] text-gray-500 text-lg md:text-xl dark:text-gray-400">
                  I'm a product designer specializing in AI-driven conversational experiences that help people streamline real-world challenges to meet their personal goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">My work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-4">
                    <Image
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      height="200"
                      src={project.image}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {project.description} <i>A CareerFoundry project.</i>
                    </p>
                    {project.isComingSoon ? (
                      <Button variant="secondary" size="sm" disabled>
                        Coming Soon
                      </Button>
                    ) : (
                      <Link href={`/products/${project.slug}`}>
                        <Button variant="outline" size="sm">
                          View Case Study
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-18">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start">
              <p className="text-gray-700 dark:text-gray-400">
                <span className="font-bold">email:</span> ricardogb011@gmail.com
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}



