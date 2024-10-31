'use client'

import React, { useEffect, useRef } from 'react'

export const SkillRing = ({ skill, percentage }) => {
    const ringRef = useRef()
  
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
