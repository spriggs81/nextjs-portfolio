"use client"

import React from "react"
import CaseStudiesDisplay from "../components/CaseStudiesDisplay"

import caseStudies from "./caseStudyData.js"


const CaseStudies = () => {
    return (
        <div className="bg-white text-gray-800 font-sans min-h-screen">
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
                        Case Studies From Production Experiences
                    </h1>
                    <div className="mt-8">
                        <CaseStudiesDisplay data={caseStudies} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CaseStudies