import { Navigate } from 'react-router-dom';
import { dayPlans, DayId } from '../data/trainingPlan';
import { useTrainingContext } from '../context/TrainingContext';
import { ExerciseCard } from '../components/ExerciseCard';
import { SectionCard } from '../components/SectionCard';
import { ProgressSummary } from '../components/ProgressSummary';

interface DayPageProps {
  dayId: DayId;
}

export function DayPage({ dayId }: DayPageProps) {
  const plan = dayPlans.find((day) => day.id === dayId);
  const { state, resetDay } = useTrainingContext();

  if (!plan) {
    return <Navigate to="/" replace />;
  }

  const dayState = state[dayId];

  return (
    <div className="page day-page">
      <header className="day-header">
        <div>
          <p className="day-label">{plan.title}</p>
          <h1>{plan.focus}</h1>
          <p className="day-overview">{plan.overview}</p>
          <p className="day-duration">{plan.estimatedDuration}</p>
        </div>
        <button type="button" className="ghost-button" onClick={() => resetDay(dayId)}>
          Reset giornata
        </button>
      </header>
      <ProgressSummary dayId={dayId} />
      <div className="sections-grid">
        {plan.sections.map((section) => (
          <SectionCard key={section.id} title={section.title} description={section.description}>
            <div className="exercises-list">
              {section.exercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  dayId={dayId}
                  exercise={exercise}
                  progress={dayState?.[exercise.id]}
                />
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
