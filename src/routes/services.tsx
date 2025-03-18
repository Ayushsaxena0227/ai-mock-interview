import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/clerk-react";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const userId = useAuth();
  //   console.log(userId);
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        {/* Header Section */}
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className="text-outline font-extrabold md:text-8xl">
              Our Services
            </span>
            <span className="text-gray-500 font-extrabold">
              - AI-Powered Interview Prep
            </span>
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            AI Superpower offers AI-driven interview preparation tools that help
            job seekers ace their technical and behavioral interviews. Our AI
            tailors questions, feedback, and assessments to your domain, skills,
            and experience level to maximize your chances of success.
          </p>
        </div>

        {/* Services Image Section */}
        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/services.jpg"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Services List */}
        <div className="mt-8 space-y-6">
          {/* Service 1: AI-Powered Interview Assistance */}
          <div className="bg-gray-100 p-6 rounded-xl drop-shadow-md">
            <h3 className="text-xl font-bold">
              🎯 AI-Powered Interview Assistance
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Our AI analyzes your domain, skills, and experience to generate
              customized mock interviews that mimic real-world job screenings.
            </p>
          </div>

          {/* Service 2: Real-Time AI Feedback */}
          <div className="bg-gray-100 p-6 rounded-xl drop-shadow-md">
            <h3 className="text-xl font-bold">🧠 Real-Time AI Feedback</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Get instant AI-generated feedback on your answers, helping you
              improve clarity, accuracy, and confidence.
            </p>
          </div>

          {/* Service 3: Domain-Specific Question Bank */}
          <div className="bg-gray-100 p-6 rounded-xl drop-shadow-md">
            <h3 className="text-xl font-bold">
              💻 Domain-Specific Question Bank
            </h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Access a curated set of technical and behavioral questions**
              tailored to your field, technology stack, and expertise level**.
            </p>
          </div>

          {/* Service 5: Live Mock Interviews */}
          <div className="bg-gray-100 p-6 rounded-xl drop-shadow-md">
            <h3 className="text-xl font-bold">🔴 Live Mock Interviews</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Book real-time mock interviews** with industry professionals for a
              realistic interview experience.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          {!userId && (
            <Link to="/signin">
              <Button>
                Get Started <Sparkles className="ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Services;
