import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="row mt-5">
        <div className="col-sm-6 p-5">
        Hi, I'm Joseph.
        <br className="hidden lg:inline-block" />I build web and mobile apps.
        <p className="mb-8 leading-relaxed">
            I am a Microsoft Certified self taught software developer.
            I aim at creating unique, innovative, reliable and accessible software solutions.<br/> 
            These range from Web Applications to Cross Platform Mobile Applications. With the Technologies in my docket,
            I can get work done in a short period of time.

        </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
          </div>
        </div>
        <div className="col-sm-6 text-center">
        <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./photo.jpeg"
            width={200}
          />
        </div>
      </div>
    </section>
  );
}