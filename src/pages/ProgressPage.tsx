import { dayPlans, collectDayExercises } from '../data/trainingPlan';
import { useTrainingContext } from '../context/TrainingContext';

export function ProgressPage() {
  const { state, resetAll } = useTrainingContext();

  return (
    <div className="page progress-page">
      <header className="progress-header">
        <div>
          <h1>Storico progressi</h1>
          <p>
            Controlla rapidamente i pesi registrati, le note e lo stato di completamento. I dati sono salvati
            nel tuo dispositivo e puoi resettarli in qualsiasi momento.
          </p>
        </div>
        <button type="button" className="ghost-button" onClick={resetAll}>
          Reset completo
        </button>
      </header>
      <div className="progress-table">
        {dayPlans.map((day) => {
          const exercises = collectDayExercises(day);
          return (
            <section key={day.id}>
              <h2>
                {day.title} · <span>{day.focus}</span>
              </h2>
              <ul>
                {exercises.map((exercise) => {
                  const data = state[day.id]?.[exercise.id];
                  return (
                    <li key={exercise.id}>
                      <div>
                        <p className="exercise-name">{exercise.name}</p>
                        <p className="exercise-meta">{exercise.summary}</p>
                      </div>
                      <div className="exercise-data">
                        <p>
                          <strong>Peso:</strong> {data?.weight ? data.weight : '—'}
                        </p>
                        <p>
                          <strong>Note:</strong> {data?.notes ? data.notes : '—'}
                        </p>
                        <p>
                          <strong>Completato:</strong> {data?.completed ? 'Sì' : 'No'}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
