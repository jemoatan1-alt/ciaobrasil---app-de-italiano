
import React from "react";
import { lessons, Lesson } from "../data/lessons";

interface LessonGridProps {
  onSelectLesson: (lesson: Lesson) => void;
}

const LessonGrid: React.FC<LessonGridProps> = ({ onSelectLesson }) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          onClick={() => onSelectLesson(lesson)}
          className="cursor-pointer p-6 bg-white dark:bg-slate-900 rounded-2xl shadow hover:shadow-lg transition"
        >
          <div className="text-5xl">{lesson.icon}</div>
          <h2 className="text-xl font-bold mt-4">{lesson.title}</h2>
          <p className="text-gray-500 mt-2">{lesson.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LessonGrid;
