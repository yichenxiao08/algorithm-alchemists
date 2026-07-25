// Single place to update enrollment urgency.
export const enrollment = {
  // TODO: confirm close date with organizers
  enrollmentClosesAt: "2026-08-02T23:59:59-04:00",
  cohortStartLabel: "July 26",
  enrollmentClosesLabel: "August 2",
  // TODO: confirm capacity
  maxStudentsPerClass: 25,
};

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

export function getCountdownParts(now = Date.now()): CountdownParts {
  const end = new Date(enrollment.enrollmentClosesAt).getTime();
  const diff = end - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds, expired: false };
}
