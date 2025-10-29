import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { DayId, dayPlans } from '../data/trainingPlan';

export interface ExerciseProgress {
  weight: string;
  notes: string;
  completed: boolean;
  updatedAt?: string;
}

export type TrainingState = Record<DayId, Record<string, ExerciseProgress>>;

type TrainingAction =
  | {
      type: 'update-exercise';
      dayId: DayId;
      exerciseId: string;
      payload: Partial<ExerciseProgress>;
    }
  | { type: 'reset-day'; dayId: DayId }
  | { type: 'reset-all' };

interface TrainingContextValue {
  state: TrainingState;
  updateExercise: (dayId: DayId, exerciseId: string, payload: Partial<ExerciseProgress>) => void;
  resetDay: (dayId: DayId) => void;
  resetAll: () => void;
  getDayProgress: (dayId: DayId) => { completed: number; total: number };
}

const STORAGE_KEY = 'terryTraining/v1';

const defaultExerciseState: ExerciseProgress = {
  weight: '',
  notes: '',
  completed: false,
};

function buildDefaultState(): TrainingState {
  return dayPlans.reduce((acc, day) => {
    const exercises = day.sections.flatMap((section) => section.exercises);
    acc[day.id] = exercises.reduce<Record<string, ExerciseProgress>>((map, exercise) => {
      map[exercise.id] = { ...defaultExerciseState };
      return map;
    }, {});
    return acc;
  }, {} as TrainingState);
}

function mergeWithDefault(state: Partial<TrainingState> | null): TrainingState {
  const defaults = buildDefaultState();
  if (!state) {
    return defaults;
  }
  const merged: TrainingState = { ...defaults };
  (Object.keys(defaults) as DayId[]).forEach((dayId) => {
    const dayState = state[dayId];
    if (!dayState) {
      return;
    }
    merged[dayId] = {
      ...defaults[dayId],
      ...Object.entries(dayState).reduce<Record<string, ExerciseProgress>>((map, [exerciseId, value]) => {
        map[exerciseId] = {
          ...defaultExerciseState,
          ...value,
        };
        return map;
      }, {}),
    };
  });
  return merged;
}

function trainingReducer(state: TrainingState, action: TrainingAction): TrainingState {
  switch (action.type) {
    case 'update-exercise': {
      const { dayId, exerciseId, payload } = action;
      const dayState = state[dayId] ?? {};
      const existing = dayState[exerciseId] ?? defaultExerciseState;
      const next: TrainingState = {
        ...state,
        [dayId]: {
          ...dayState,
          [exerciseId]: {
            ...existing,
            ...payload,
            updatedAt: new Date().toISOString(),
          },
        },
      };
      return next;
    }
    case 'reset-day': {
      return {
        ...state,
        [action.dayId]: { ...buildDefaultState()[action.dayId] },
      };
    }
    case 'reset-all': {
      return buildDefaultState();
    }
    default:
      return state;
  }
}

const TrainingContext = createContext<TrainingContextValue | undefined>(undefined);

function loadInitialState(): TrainingState {
  if (typeof window === 'undefined') {
    return buildDefaultState();
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return buildDefaultState();
    }
    const parsed = JSON.parse(raw) as Partial<TrainingState>;
    return mergeWithDefault(parsed);
  } catch (error) {
    console.warn('Impossibile caricare i dati di allenamento salvati', error);
    return buildDefaultState();
  }
}

export function TrainingProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(trainingReducer, undefined, loadInitialState);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.warn('Impossibile salvare i dati di allenamento', error);
    }
  }, [state]);

  const updateExercise = useCallback(
    (dayId: DayId, exerciseId: string, payload: Partial<ExerciseProgress>) => {
      dispatch({ type: 'update-exercise', dayId, exerciseId, payload });
    },
    [],
  );

  const resetDay = useCallback((dayId: DayId) => {
    dispatch({ type: 'reset-day', dayId });
  }, []);

  const resetAll = useCallback(() => {
    dispatch({ type: 'reset-all' });
  }, []);

  const getDayProgress = useCallback(
    (dayId: DayId) => {
      const exercises = dayPlans
        .find((day) => day.id === dayId)
        ?.sections.flatMap((section) => section.exercises.map((exercise) => exercise.id));
      const dayState = state[dayId];
      const total = exercises?.length ?? 0;
      const completed = exercises?.reduce((count, exerciseId) => {
        if (dayState?.[exerciseId]?.completed) {
          return count + 1;
        }
        return count;
      }, 0);
      return { completed: completed ?? 0, total };
    },
    [state],
  );

  const value = useMemo(
    () => ({ state, updateExercise, resetDay, resetAll, getDayProgress }),
    [state, updateExercise, resetDay, resetAll, getDayProgress],
  );

  return <TrainingContext.Provider value={value}>{children}</TrainingContext.Provider>;
}

export function useTrainingContext() {
  const ctx = useContext(TrainingContext);
  if (!ctx) {
    throw new Error('useTrainingContext deve essere usato all’interno di TrainingProvider');
  }
  return ctx;
}
