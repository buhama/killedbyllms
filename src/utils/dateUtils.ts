export function formatYear(dateString: string): string {
  return new Date(dateString).getFullYear().toString();
}

export function formatDateRange(dateOpen: string, dateClose: string): string {
  return `${formatYear(dateOpen)} - ${formatYear(dateClose)}`;
}

export function getKilledAgo(dateClose: string): string {
  const closeDate = new Date(dateClose);
  const now = new Date();
  const diffMs = now.getTime() - closeDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 30) {
    return `Killed ${diffDays} days ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `Killed ${months} month${months > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `Killed ${years} year${years > 1 ? 's' : ''} ago`;
  }
}
