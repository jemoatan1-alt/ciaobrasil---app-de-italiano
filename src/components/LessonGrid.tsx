
import React from 'react';
import { Lesson } from '../types';

interface Props {
  onSelectLesson: (lesson: Lesson) => void;
}

const LessonGrid: React.FC<Props> = ({ onSelectLesson }) => {
  const lessons: Lesson[] = [
    { title: 'Lezione 1', description: 'Base', icon: '📘', content: ['Ciao', 'Buongiorno'] },
    { title: 'Lezione 2', description: 'Intermedio', icon: '📗', content: ['Come stai?', 'Grazie'] }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {lessons.map((lesson) => (
        <div key={lesson.title} className="p-4 border rounded-lg cursor-pointer hover:bg-emerald-50" onClick={() => onSelectLesson(lesson)}>
          <div className="text-4xl">{lesson.icon}</div>
          <h2 className="font-bold">{lesson.title}</h2>
          <p className="text-gray-500">{lesson.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LessonGrid;