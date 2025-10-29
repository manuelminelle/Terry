import { ExerciseDetail } from '../data/trainingPlan';

interface ExerciseModalProps {
  open: boolean;
  onClose: () => void;
  exercise: ExerciseDetail;
}

export function ExerciseModal({ open, onClose, exercise }: ExerciseModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby={`${exercise.id}-title`}>
      <div className="modal-content">
        <header className="modal-header">
          <h2 id={`${exercise.id}-title`}>{exercise.name}</h2>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Chiudi">
            ×
          </button>
        </header>
        <p className="modal-summary">{exercise.summary}</p>
        <section className="modal-section">
          <h3>Come eseguirlo</h3>
          <p>{exercise.description}</p>
        </section>
        <section className="modal-section">
          <h3>Muscoli target</h3>
          <ul>
            {exercise.targets.map((target) => (
              <li key={target}>{target}</li>
            ))}
          </ul>
        </section>
        <section className="modal-section">
          <h3>Tips rapidi</h3>
          <ul>
            {exercise.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>
        {exercise.notes && (
          <section className="modal-section">
            <h3>Note extra</h3>
            <p>{exercise.notes}</p>
          </section>
        )}
      </div>
      <button type="button" className="modal-backdrop" aria-label="Chiudi" onClick={onClose} />
    </div>
  );
}
