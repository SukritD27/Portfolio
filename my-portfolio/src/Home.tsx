import React, { useState, useEffect } from 'react';
import { Sparkles, Code, Palette, Send } from 'lucide-react';

const CreativePortfolio = () => {

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <section
                id="intro"
                className="min-h-screen relative flex items-center justify-center"
            >
                <div className="max-w-4xl mx-auto px-6 py-20">
                    <div className="relative">
                        <Sparkles
                            className="absolute -top-12 -left-12 w-24 h-24 text-purple-400 animate-pulse"
                        />
                        <h1 className="text-7xl font-bold mb-6 tracking-tighter">
                            Welcome!!!
                        </h1>
                        <p className="text-xl text-purple-200 max-w-lg">
                            This is my portfolio website. Look around and find my projects.
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="work"
                className="min-h-screen relative items-center"
            >
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-12 gap-8">
                        {[1, 2, 3].map((project) => (
                            <div
                                key={project}
                                className={`
                    col-span-12 md:col-span-4 
                    bg-white/5 backdrop-blur-lg 
                    rounded-lg p-6 
                    transform transition-all duration-300
                    hover:scale-105 hover:bg-white/10
                    group
                  `}
                            >
                                <div className="aspect-square mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <Code size={48} className="text-white/50 group-hover:text-white/80 transition-all" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                                <p className="text-gray-400 group-hover:text-white transition-colors">
                                    description of the project
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CreativePortfolio;