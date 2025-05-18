import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const courses = [
  {
    id: "AI-Fundamental",
    title: "AI Fundamentals",
    duration: "3 Months",
    mode: "Online",
    overview:
      "Introduction to AI concepts, foundations, and practical applications.",
    features: [
      "Fundamental AI Concepts – Learn the basics and history of AI.",
      "Python for AI – Programming foundations for AI applications.",
      "AI Algorithms – Understand search, optimization, and reasoning.",
      "Hands-On Projects – Build simple AI systems.",
      "Ethics in AI – Study responsible AI development.",
    ],
    curriculum: [
      { module: 1, title: "AI Basics", topics: "History, applications, problem-solving" },
      { module: 2, title: "Python Programming", topics: "Syntax, data structures, libraries" },
      { module: 3, title: "Search Algorithms", topics: "DFS, BFS, heuristic search" },
      { module: 4, title: "Optimization", topics: "Genetic algorithms, simulated annealing" },
      { module: 5, title: "Ethics & Society", topics: "Bias, fairness, AI impact" },
    ],
  },
  {
    id: "Data-Science-Bootcamp",
    title: "Data Science Bootcamp",
    duration: "6 Months",
    mode: "Online + Mentorship",
    overview:
      "Master data analytics, visualization, and machine learning for real-world data problems.",
    features: [
      "Data Wrangling & Visualization – Use Python, Pandas, Matplotlib.",
      "Statistics & Probability – Foundation for data inference.",
      "Machine Learning Models – Regression, classification, clustering.",
      "Big Data Tools – Hadoop, Spark fundamentals.",
      "Capstone Projects – Solve real datasets.",
    ],
    curriculum: [
      { module: 1, title: "Python & SQL", topics: "Data manipulation, queries, functions" },
      { module: 2, title: "Statistics & Probability", topics: "Distributions, hypothesis testing" },
      { module: 3, title: "Machine Learning", topics: "Supervised, unsupervised learning" },
      { module: 4, title: "Big Data", topics: "Hadoop ecosystem, Spark basics" },
      { module: 5, title: "Data Visualization", topics: "Matplotlib, Seaborn, dashboards" },
      { module: 6, title: "Capstone Project", topics: "End-to-end data science workflow" },
    ],
  },
  {
    id: "Machine-Learning",
    title: "Machine Learning",
    duration: "4 Months",
    mode: "Online",
    overview:
      "Deep dive into ML algorithms, deep learning, and deployment techniques.",
    features: [
      "Supervised & Unsupervised Learning – Algorithms and applications.",
      "Deep Learning – Neural networks, CNN, RNN architectures.",
      "Model Evaluation – Metrics, cross-validation techniques.",
      "Deployment – Serving models on cloud platforms.",
      "Hands-On Labs – Build, train, and deploy ML models.",
    ],
    curriculum: [
      { module: 1, title: "ML Foundations", topics: "Regression, classification basics" },
      { module: 2, title: "Advanced Algorithms", topics: "SVM, ensemble methods" },
      { module: 3, title: "Deep Learning", topics: "Neural networks, CNN, RNN" },
      { module: 4, title: "Model Deployment", topics: "Flask APIs, cloud hosting" },
      { module: 5, title: "Project", topics: "Build and deploy ML application" },
    ],
  },
];

export default function Product() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const listRef = useRef(null);
  const detailRef = useRef(null);

  // Animate courses list when it appears
  useEffect(() => {
    if (!selectedCourse && listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [selectedCourse]);

  // Animate course detail when it appears
  useEffect(() => {
    if (selectedCourse && detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [selectedCourse]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-extrabold text-indigo-900">Our Courses</h1>
      <p className="text-indigo-700 max-w-xl">
        Explore a wide range of courses designed to boost your skills in AI and Data Science.
      </p>

      {!selectedCourse ? (
        <div
          className="grid gap-8 md:grid-cols-3"
          ref={listRef}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-indigo-400 transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <img
                src={`/assets/${course.id}.png`}
                alt={course.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-2xl font-semibold text-indigo-900 mb-2">{course.title}</h2>
              <p className="text-indigo-700">{course.overview}</p>
              <button
                className="mt-4 px-4 py-2 bg-indigo-700 text-white rounded hover:bg-indigo-800"
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto space-y-6"
          ref={detailRef}
        >
          <button
            className="text-indigo-700  mb-4"
            onClick={() => setSelectedCourse(null)}
          >
            ← Back to Courses
          </button>

          <h2 className="text-3xl font-bold text-indigo-900">{selectedCourse.title}</h2>
          <p className="text-indigo-700 text-lg">
            Duration: {selectedCourse.duration} | Mode: {selectedCourse.mode}
          </p>

          <section>
            <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
              Why Choose {selectedCourse.title.split(" – ")[0]}?
            </h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-700">
              {selectedCourse.overview.split(", ").map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-700">
              {selectedCourse.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-indigo-800 mb-2">Sample Curriculum</h3>
            <table className="w-full text-left border-collapse border border-indigo-200">
              <thead>
                <tr>
                  <th className="border border-indigo-300 px-3 py-2 bg-indigo-50">Module</th>
                  <th className="border border-indigo-300 px-3 py-2 bg-indigo-50">Topics Covered</th>
                </tr>
              </thead>
              <tbody>
                {selectedCourse.curriculum.map((mod) => (
                  <tr key={mod.module} className="hover:bg-indigo-100">
                    <td className="border border-indigo-300 px-3 py-2 font-medium">{mod.module}</td>
                    <td className="border border-indigo-300 px-3 py-2">{mod.topics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section className="text-center">
            <Link
              to="/contact"
              className="inline-block mt-6 px-6 py-3 bg-indigo-700 text-white rounded-xl hover:bg-indigo-800 transition"
            >
              Apply Now!
            </Link>
          </section>
        </div>
      )}
    </div>
  );
}
