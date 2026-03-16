import React from 'react';
import { Calendar, SquareDashedMousePointer } from 'lucide-react';
import './TaskComponents.css';

// Компонент Статуса (icon-only, no text)
export const StatusBadge = ({ status }) => {
  // backlog is visual-only for now, logic unchanged
  if (status === 'backlog') {
    return (
      <div className="status-badge status-backlog">
        <SquareDashedMousePointer size={16} color="var(--color-text-gray)" />
      </div>
    );
  }

  let badgeClass = 'status-todo';
  let dotClass = 'status-dot-todo';

  if (status === 'progress') {
    badgeClass = 'status-progress';
    dotClass = 'status-dot-progress';
  } else if (status === 'done') {
    badgeClass = 'status-done';
    dotClass = 'status-dot-done';
  }

  return (
    <div className={`status-badge ${badgeClass}`}>
      <div className={`status-dot ${dotClass}`} />
    </div>
  );
};

// Компонент Даты
export const DateBadge = ({ date }) => {
  return (
    <div className="date-badge">
      <Calendar />
      <span>{date}</span>
    </div>
  );
};