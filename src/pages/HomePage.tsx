import { Link } from 'react-router-dom';
import { dayPlans } from '../data/trainingPlan';
import { useTrainingContext } from '../context/TrainingContext';

export function HomePage() {
  const { getDayProgress } = useTrainingContext();

  return (
    <div className="page home-page">
      <section className="hero">
        <h1>Benvenuta Terry ✨</h1>
        <p>
          Qui trovi la dashboard del programma disegnato da Marina. Ogni giorno ha la sua pagina dedicata,
          con esercizi, note e salvataggio automatico dei pesi direttamente sul tuo smartphone.
        </p>
        <Link className="cta" to="/giorno-a">
          Vai al Giorno A
        </Link>
      </section>
      <section className="day-grid">
        {dayPlans.map((day) => {
          const { completed, total } = getDayProgress(day.id);
          const ratio = total > 0 ? Math.round((completed / total) * 100) : 0;
          return (
            <Link key={day.id} to={`/${day.slug}`} className="day-card">
              <header>
                <p className="day-title">{day.title}</p>
                <p className="day-focus">{day.focus}</p>
              </header>
              <p className="day-overview">{day.overview}</p>
              <p className="day-duration">{day.estimatedDuration}</p>
              <div className="day-progress">
                <span>{ratio}% completato</span>
                <div className="day-progress-bar">
                  <span style={{ width: `${ratio}%` }} />
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
