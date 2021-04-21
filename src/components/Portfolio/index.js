/* eslint-disable no-useless-escape */
import React from 'react';
import Project from '../Projects';

import './style.css';

import projectData from '../../data';

export default function Portfolio() {
    return (
        <section class="my-work" id="work">
            <div class="container">
                <h2 class="section-title section-title-mywork text-center"><i class="fas fa-code"></i>
                My Work
            </h2>
                <hr />
                <div class="card-container row" />
                 {projectData.map((project) => {
                    return (
                        <Project
                            title={project.title}
                            thumbnail={project.thumbnail}
                            stack={project.stackStr}
                            description={project.description}
                            app={project.app}
                            repo={project.repo}
                        />
                    );
                })} 

            </div>
        </section>
    )
}