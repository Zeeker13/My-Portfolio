import React from 'react';
import myImg from '../image/aa.png';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
        What does Vulnerability mean? Vulnerability is the inability to resist a hazard or
        to respond when a disaster has occurred. For instance, people who live on plains are
        more vulnerable to floods than people who live higher up.
				</p>
				<a
					
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					ashenprageeth1@gmail.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Ashen"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
