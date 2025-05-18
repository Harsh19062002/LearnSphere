import { useState } from "react";

const faqData = [
  {
    keywords: ["courses", "classes", "subjects", "topics", "offer"],
    answer: "We offer courses in programming, design, marketing, data science, and more!",
  },
  {
    keywords: ["enroll", "register", "signup", "join", "apply"],
    answer: "You can enroll on the Product page by selecting your course and clicking 'Enroll'.",
  },
  {
    keywords: ["certificate", "certificates", "certify", "completion"],
    answer: "You will receive a verified certificate upon successful completion of your course.",
  },
  {
    keywords: ["free", "price", "cost", "fees", "charge", "payment", "paid"],
    answer: "Some courses are free; others require payment. Please check each course's details.",
  },
  {
    keywords: ["mobile", "phone", "tablet", "device", "android", "ios"],
    answer: "Our platform is fully responsive and works well on all devices, including mobiles and tablets.",
  },
  {
    keywords: ["support", "help", "contact", "customer service", "assistance"],
    answer: "You can contact us via the Contact page or email support@learnsphere.com.",
  },
  {
    keywords: ["duration", "length", "time", "how long"],
    answer: "Course durations vary from a few hours to several weeks depending on the subject.",
  },
  {
    keywords: ["refund", "cancel", "money back", "return"],
    answer: "Refunds are available within 7 days of purchase for paid courses, subject to terms.",
  },
  {
    keywords: ["requirements", "prerequisites", "skills needed"],
    answer: "Basic computer skills and internet access are needed; some advanced courses may require prior knowledge.",
  },
  {
    keywords: ["instructor", "teacher", "trainer", "who teaches"],
    answer: "Our courses are taught by industry experts and certified professionals.",
  },
  {
    keywords: ["schedule", "timing", "when", "class time", "live classes"],
    answer: "Most courses are self-paced, but some include scheduled live sessions.",
  },
  {
    keywords: ["language", "languages", "course language", "spoken language"],
    answer: "Courses are primarily in English, with some available in other languages.",
  },
  {
    keywords: ["login", "sign in", "account", "access"],
    answer: "You need to create an account to access course materials and track progress.",
  },
  {
    keywords: ["technical issues", "bugs", "error", "problem"],
    answer: "Please report technical issues via the Contact page; we'll assist you promptly.",
  },
  {
    keywords: ["career", "job", "employment", "internship"],
    answer: "Our courses include career guidance and internship opportunities in partnership with companies.",
  },
  {
    keywords: ["projects", "assignments", "practice"],
    answer: "Many courses include practical projects and assignments to reinforce learning.",
  },
  {
    keywords: ["certificate validity", "certificate expiry", "validity"],
    answer: "Certificates issued do not expire and can be used to showcase your skills indefinitely.",
  },
  {
    keywords: ["group discount", "bulk enrollment", "team"],
    answer: "We offer group discounts for bulk enrollments; please contact sales for details.",
  },
  {
    keywords: ["payment methods", "credit card", "paypal", "upi"],
    answer: "We accept multiple payment methods including credit/debit cards, UPI, and PayPal.",
  },
  {
    keywords: ["course updates", "new courses", "upcoming courses"],
    answer: "We regularly add new courses. Subscribe to our newsletter to stay updated.",
  },
  {
    keywords: ["privacy", "data security", "personal information"],
    answer: "We prioritize your privacy and protect your data with industry-standard security measures.",
  },
  {
    keywords: ["discount", "promo code", "coupon", "offer"],
    answer: "Occasional discounts and promo codes are available; check our website or subscribe for offers.",
  },
  {
    keywords: ["offline access", "download", "offline"],
    answer: "Currently, our courses require internet access; offline downloads are being planned.",
  },
  {
    keywords: ["multiple courses", "simultaneous enrollment"],
    answer: "You can enroll in multiple courses at the same time without restrictions.",
  },
  {
    keywords: ["certificate verification", "verify certificate"],
    answer: "Certificates can be verified online using a unique code provided upon completion.",
  },
  {
    keywords: ["feedback", "review", "rate", "comment"],
    answer: "We welcome your feedback; please leave reviews on the course page after completion.",
  },
  {
    keywords: ["refund process", "cancel enrollment"],
    answer: "To request a refund or cancel enrollment, contact support within 7 days of purchase.",
  },
  {
    keywords: ["access period", "course validity"],
    answer: "Access to courses varies but is generally available for 6 months to 1 year after enrollment.",
  },
  {
    keywords: ["career counseling", "guidance"],
    answer: "We provide career counseling sessions to help you plan your professional path.",
  },
  {
    keywords: ["group study", "community", "discussion"],
    answer: "Join our community forums and group chats to discuss topics and collaborate.",
  },
  {
    keywords: ["technical requirements", "browser", "software"],
    answer: "Courses are accessible via modern browsers like Chrome, Firefox, and Edge.",
  },
  {
    keywords: ["certificate cost", "extra fees certificate"],
    answer: "There are no extra fees for certificates once you complete the course.",
  },
  {
    keywords: ["internship program", "internships"],
    answer: "We connect students to internship programs via our partner companies.",
  },
  {
    keywords: ["language support", "subtitles", "captions"],
    answer: "Many courses include subtitles in multiple languages to aid understanding.",
  },
  {
    keywords: ["refund eligibility", "refund policy"],
    answer: "Refunds apply only to paid courses within 7 days of enrollment if conditions are met.",
  },
  {
    keywords: ["course difficulty", "level", "beginner", "advanced"],
    answer: "Courses are labeled by difficulty level: beginner, intermediate, or advanced.",
  },
];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! Ask me anything about LearnSphere courses, enrollment, certificates, and more.",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input.trim().toLowerCase();
    setMessages((msgs) => [...msgs, { from: "user", text: input }]);
    setInput("");

    // Find first matching FAQ
    const matchedFAQ = faqData.find((item) =>
      item.keywords.some((keyword) => userMessage.includes(keyword))
    );

    const botReply = matchedFAQ
      ? matchedFAQ.answer
      : "Sorry, I didn't quite get that. Please try asking something else or contact support.";

    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: "bot", text: botReply }]);
    }, 700);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto flex flex-col space-y-4">
      <div className="flex flex-col space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-400">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-4 py-2 rounded-lg max-w-[70%] ${
              msg.from === "bot"
                ? "bg-indigo-100 self-start"
                : "bg-indigo-700 text-white self-end"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          className="flex-grow border border-indigo-300 rounded-md px-4 py-2 focus:border-indigo-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your question..."
          aria-label="Chat input"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-800"
          aria-label="Send message"
        >
          Send
        </button>
      </div>
    </div>
  );
}
