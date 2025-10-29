import { NavLink } from 'react-router-dom';
import { dayPlans } from '../data/trainingPlan';

interface DayNavigationProps {
  hiddenOnHome?: boolean;
}

export function DayNavigation({ hiddenOnHome }: DayNavigationProps) {
  return (
    <nav className={`day-nav${hiddenOnHome ? ' home-hidden' : ''}`} aria-label="Navigazione giorni">
      {dayPlans.map((day) => (
        <NavLink
          key={day.id}
          to={`/${day.slug}`}
          className={({ isActive }) => `day-pill${isActive ? ' active' : ''}`}
        >
          <span className="day-name">{day.title}</span>
          <span className="day-focus">{day.focus}</span>
        </NavLink>
      ))}
    </nav>
  );
}
