
# AI Mock Interview Platform

Welcome to the AI Mock Interview Platform, an intelligent tool designed to help you ace your next job interview. Landing a dream job can be tough, and preparation is key. This application leverages the power of Google's Gemini AI to create a realistic, domain-specific interview experience, providing you with the practice and feedback you need to build confidence and sharpen your skills.

## About The Project

The job market is more competitive than ever, and a stellar interview performance can make all the difference. While many resources exist for interview prep, they often lack the personalized, interactive feedback that truly helps a candidate grow. I built this platform to bridge that gap. It's not just a list of questions; it's a dynamic training ground.

This tool uses Google Gemini to generate relevant, industry-specific questions, simulating what you might actually face in a real interview. Whether you're a software engineer preparing for a technical round or a marketing professional gearing up to discuss campaign strategies, the AI adapts to your chosen field. After your session, you receive instant, constructive feedback, helping you understand your strengths and identify areas for improvement. The entire experience is designed to be smooth, secure, and incredibly effective, boosting user success rates and making interview preparation more engaging.

### Built With

This project was brought to life using a modern, robust tech stack focused on performance and user experience:

* **[React.js]:for building dynamic user interfaces.
* **[Tailwind CSS]: for rapid, responsive UI development.
* **[Shadcn/ui]: library that enhances the user experience.
* **[TypeScript](https://www.typescriptlang.org/)**: For adding static types to JavaScript, improving code quality and maintainability.
* **[Firebase](https://firebase.google.com/)**: Powers our real-time database, ensuring seamless and interactive user sessions.
* **[Clerk](https://clerk.com/)**: For secure and hassle-free user authentication, ensuring complete privacy.
* **[Google Gemini AI](https://gemini.google.com/)**: The core intelligence of our platform, responsible for generating questions and feedback.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
* npm
    
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repo**
    
    git clone [https://github.com/your_username/ai-mock-interview.git](https://github.com/your_username/ai-mock-interview.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd ai-mock-interview
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Set up your environment variables**
    Create a `.env.local` file in the root of your project and add your API keys for Firebase, Clerk, and Google Gemini.
    ```
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_CLERK_PUBLISHABLE_KEY=your_clerk_key
    REACT_APP_GEMINI_API_KEY=your_gemini_api_key
    ```
5.  **Run the application**
    npm start
   
    The app will be available at `http://localhost:3000`.

## Features

* **AI-Powered Questions**: Integrated Google Gemini AI to generate domain-specific interview questions that challenge and prepare you.
* **Instant Feedback**: Receive real-time, constructive feedback on your answers to help you improve on the spot.
* **Secure Authentication**: Utilizes Clerk for robust and secure user login, ensuring your data and practice sessions are 100% private.
* **Real-time Experience**: Leverages Firebase for a smooth, interactive, and lag-free user experience from start to finish.
* **Fully Responsive UI**: Built with TailwindCSS and Shadcn/ui, the platform is beautiful and functional on any device, leading to faster page load times and higher user engagement.

