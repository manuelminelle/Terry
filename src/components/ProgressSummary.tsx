import { DayId } from '../data/trainingPlan';
import { useTrainingContext } from '../context/TrainingContext';

interface ProgressSummaryProps {
  dayId: DayId;
}

export function ProgressSummary({ dayId }: ProgressSummaryProps) {
  const { getDayProgress } = useTrainingContext();
  const { completed, total } = getDayProgress(dayId);
  const ratio = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <section className="progress-summary">
      <div className="progress-header">
        <h2>Avanzamento giornata</h2>
        <span className="progress-percentage">{ratio}%</span>
      </div>
      <div className="progress-bar" role="progressbar" aria-valuenow={ratio} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-bar-fill" style={{ width: `${ratio}%` }} />
      </div>
      <p className="progress-meta">
        {completed} esercizi completati su {total}. Ricorda di segnare peso e note appena finisci un set!
      </p>
    </section>
  );
}
