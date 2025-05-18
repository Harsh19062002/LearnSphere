import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";
import Weather from "../components/Weather";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imgRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" }
      );

      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
          },
        }
      );

      cardRefs.current.forEach((el) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
              },
            }
          );
        }
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  cardRefs.current = [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 overflow-visible">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center gap-10">
        {/* Left - Heading */}
        <div ref={headingRef} className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-900">
            <span className="text-indigo-600">LearnSphere</span>{" "}
            <span className="block text-gray-800">
              <Typewriter
                words={["Empowering the Next Generation of AI Innovators!"]}
                loop={0}
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-lg text-indigo-700">
            Join the future of learning with hands-on AI and Data Science!
          </p>
          <Link to="/product">
            <button className="px-6 py-3 bg-indigo-700 text-white rounded-xl hover:bg-indigo-800 transition duration-300">
              Explore Courses
            </button>
          </Link>
        </div>

        {/* Right - Image */}
        <div ref={imgRef}>
          <img
            src="/assets/hero1.png"
            alt="LearnSphere Hero"
            className="w-full max-w-lg rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      {/* Info Cards */}
      <section className="grid gap-10 md:grid-cols-3">
        {[
          {
            title: "About LearnSphere",
            text: "We provide accessible, high-quality, and industry-relevant education in AI & Data Science.",
          },
          {
            title: "Our Mission",
            text: "To democratize AI education by offering world-class training.",
          },
          {
            title: "Our Vision",
            text: "To become the #1 AI & Data Science training institute globally.",
          },
          {
            title: "Who We Are",
            text: "Team of AI experts and educators helping learners grow.",
          },
          {
            title: "What is Data Science?",
            text: "Analyzing, processing & extracting insights from data using statistics, ML, and AI.",
          },
        ].map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-indigo-400 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-700">{card.text}</p>
          </div>
        ))}

        {/* List Card */}
        <div
          ref={(el) => (cardRefs.current[5] = el)}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-indigo-400 transition duration-300"
        >
          <h2 className="text-xl font-semibold text-indigo-800 mb-2">
            Why Study Data Science?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>💼 High Demand: Sought-after professionals.</li>
            <li>💰 Lucrative Careers: High salary potential.</li>
            <li>🔍 Exciting Challenges: Work with AI & ML tech.</li>
          </ul>
        </div>
      </section>

      {/* Weather Section from Weather Component */}
      <Weather />

      {/* Chatbot */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">
          Chat with Our AI Bot
        </h2>
        <Chatbot />
      </section>
    </div>
  );
}
