// components/Skills.js
'use client'

import React from 'react'
import { SkillRing } from 'app/components/skill-ring'

const skillsData = [
  { skill: 'JavaScript', percentage: 85 },
  { skill: 'React', percentage: 75 },
  { skill: 'CSS', percentage: 90 },
  { skill: 'Python', percentage: 80},
  { skill: 'HTML', percentage: 95},
  { skill: 'C', percentage: 70},
  { skill: 'C++', percentage: 65},
  // Add more skills here
]

const Skills = () => {
  return (
    <div className="skills-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-80 gap-y-120 justify-center">
      {skillsData.map((skillData, index) => (
        <SkillRing 
          key={index} 
          skill={skillData.skill} 
          percentage={skillData.percentage} 
        />
      ))}
    </div>
  )
}

export default Skills