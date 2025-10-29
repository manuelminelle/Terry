import { useState } from 'react';
import { ExerciseDetail } from '../data/trainingPlan';
import { useTrainingContext } from '../context/TrainingContext';
import { DayId } from '../data/trainingPlan';
import { ExerciseModal } from './ExerciseModal';

interface ExerciseCardProps {
  dayId: DayId;
  exercise: ExerciseDetail;
  progress?: {
    weight: string;
    notes: string;
    completed: boolean;
  };
}

export function ExerciseCard({ dayId, exercise, progress }: ExerciseCardProps) {
  const { updateExercise } = useTrainingContext();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <article className={`exercise-card${progress?.completed ? ' completed' : ''}`}>
      <button type="button" className="exercise-info" onClick={() => setModalOpen(true)}>
        <div>
          <h3>{exercise.name}</h3>
          <p className="exercise-summary">{exercise.summary}</p>
          {exercise.rest && <p className="exercise-meta">Recupero: {exercise.rest}</p>}
        </div>
        <span className="info-pill" aria-hidden>
          i
        </span>
      </button>
      <div className="exercise-inputs">
        <label className="input-group">
          <span>Peso / Carico</span>
          <input
            type="text"
            placeholder="es. 12.5 kg"
            inputMode="decimal"
            value={progress?.weight ?? ''}
            onChange={(event) =>
              updateExercise(dayId, exercise.id, { weight: event.target.value })
            }
          />
        </label>
        <label className="input-group">
          <span>Note veloci</span>
          <textarea
            rows={2}
            placeholder="Sensazioni, RIR, adattamenti..."
            value={progress?.notes ?? ''}
            onChange={(event) =>
              updateExercise(dayId, exercise.id, { notes: event.target.value })
            }
          />
        </label>
        <label className="checkbox-group">
          <input
            type="checkbox"
            checked={Boolean(progress?.completed)}
            onChange={(event) =>
              updateExercise(dayId, exercise.id, { completed: event.target.checked })
            }
          />
          <span>Allenamento completato</span>
        </label>
      </div>
      <ExerciseModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        exercise={exercise}
      />
    </article>
  );
}
