// pages/index.js
import React from 'react'
import Skills from 'app/components/skills'

export default function Home() {
  return (
    <div>
      <h1 className="mb-10 text-2xl font-semibold tracking-tighter">
        Hello!
      </h1>
      <p className="mb-5">
        I'm Sidharth Bairy, a passionate programmer focused on creating high-performance, intuitive applications that elevate user experience. Over the last few years, I've honed my skills in AI, web development and cybersecurity, and I'm always exploring new tools to expand my knowledge. I love collaborating with teams to bring ideas to life and create lasting impact through design and technology. Outside of coding, I enjoy TV shows, music and exercise.
      </p>
      <h2 className="my-10 text-xl font-medium tracking-tight">
        Professional Skillset
      </h2>
      <Skills />
    </div>
  )
}