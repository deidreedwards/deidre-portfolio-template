import SectionHeading from '@/components/SectionHeading/SectionHeading'

export default function About() {
  return (
    <main>
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <SectionHeading
          title="About Me"
          subtitle="A little more about my background, interests, and what I build"
        />

        <div className="mt-6 text-primary-content space-y-4">
          <p>
            Hi — I'm Deidre, a frontend developer who builds modern, accessible,
            and enjoyable web experiences. I enjoy working with React and
            Next.js to create fast, responsive UIs and focus on writing
            maintainable code that people enjoy using.
          </p>

          <p>
            I'm from the beautiful Cayman Islands, but moved to the UK in 2023 to pursue
            my studies at the University of Reading. I'm in the process of completing my
            Bachelor's degree in Computer Science. I'm currently in my third (placement)
            year, working as a Software Engineer at Eli Lilly.
          </p>

          <p>
            When I'm not coding, I love to read books (especially murder mystery), learning new
            things, and work out. I'm passionate about
            accessibility and continuous learning.
          </p>

          <p>
            If you'd like to collaborate or learn more, feel free to reach out
            via the contact form on the site.
          </p>
        </div>
      </div>
    </main>
  )
}
