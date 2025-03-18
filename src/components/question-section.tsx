import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { Volume2, VolumeX } from "lucide-react";
import { RecordAnswer } from "./record-answer";

interface QuestionSectionProps {
  questions: { question: string; answer: string }[];
}
export const QuestionSection = ({ questions }: QuestionSectionProps) => {
  const [isPlaying, setIsplaying] = useState(false);
  const [isWebCam, setIsWebCam] = useState(false);
  const [currentSpeech, setCurrentSpeech] =
    useState<SpeechSynthesisUtterance | null>(null);
  const handlePlayQuestion = (question: string) => {
    if (isPlaying && currentSpeech) {
      window.speechSynthesis.cancel();
      setIsplaying(false);
      setCurrentSpeech(false);
    } else {
      if ("speechSynthesis" in window) {
        const speech = new SpeechSynthesisUtterance(question);
        window.speechSynthesis.speak(speech);
        setIsplaying(true);
        setCurrentSpeech(speech);

        //handle the speech end
        speech.onend = () => {
          setIsplaying(false);
          setCurrentSpeech(null);
        };
      }
    }
  };
  return (
    <div className="w-full min-h-96 border rounded-md p-4">
      <Tabs
        defaultValue={questions[0]?.question}
        className="w-full space-y-12"
        orientation="vertical"
      >
        <TabsList className="bg-transparent w-full flex flex-wrap items-center justify-start gap-4">
          {questions?.map((tab, i) => (
            <TabsTrigger
              className={cn(
                "data-[state=active]:bg-emerald-400 data-[state=active]:shadow-md text-xs px-2"
              )}
              key={tab.question}
              value={tab.question}
            >
              {`Question #${i + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>
        {questions?.map((tab, i) => (
          <TabsContent key={i} value={tab.question}>
            <p className="test-base text-left tracking-wide text-neutral-500">
              {tab.question}
            </p>
            <div className="w-full flex items-center justify-end">
              <TooltipButton
                content={isPlaying ? "Stop" : "Start"}
                icon={
                  isPlaying ? (
                    <VolumeX className="min-w-5 min-h-5 text-muted-foreground" />
                  ) : (
                    <Volume2 className="min-w-5 min-h-5 text-muted-foreground" />
                  )
                }
                onClick={() => handlePlayQuestion(tab.question)}
              />
            </div>
            <RecordAnswer
              question={tab}
              isWebCam={isWebCam}
              setIsWebCam={setIsWebCam}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
