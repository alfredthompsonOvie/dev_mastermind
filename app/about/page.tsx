// import MainSpinner from "@/components/ui/main-spinner";

// export default function About() {
// 	return (
// 		<main className="grid grid-rows-1 grid-cols-[1fr_10fr_1fr]">
// 			<section className="col-start-2">
//         <h1>About</h1>
//         <MainSpinner />
// 			</section>
// 		</main>
// 	);
// }

// about.js
import React from 'react';

export default function page() {
  return (
    <section className="min-h-screen bg-white text-gray-800 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="mb-8 text-lg leading-relaxed">
          We are a team of passionate developers and tech enthusiasts dedicated to delivering high-quality content and resources for software developers worldwide. Our mission is to provide insightful articles, tutorials, and tools that help you stay ahead in the fast-paced tech industry.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>To empower developers with the knowledge and skills to create innovative and impactful solutions.</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>We strive to offer up-to-date, comprehensive resources that make learning and mastering new technologies easier for developers at all levels.</p>
          </div>
          <div className="shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p>We believe in fostering a collaborative and supportive community where knowledge is shared freely and growth is encouraged.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


