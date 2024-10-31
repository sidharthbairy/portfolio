'use client'

import React, { useEffect, useRef } from 'react'

interface SkillRingProps {
    skill: string
    percentage: number
  }
  
export const SkillRing: React.FC<SkillRingProps> = ({ skill, percentage }) => {
    const ringRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      if (ringRef.current) {
        ringRef.current.style.setProperty('--percentage', `${percentage}%`);
      }
    }, [percentage])
  
    return (
      <div className="skill-ring w-24 h-24 mx-auto my-3 relative" ref={ringRef}>
        {percentage}%
        <span className="skill-name absolute bottom-[-1rem] text-center w-full">{skill}</span>
      </div>
    )
}
