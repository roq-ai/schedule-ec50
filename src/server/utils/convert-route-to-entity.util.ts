const mapping: Record<string, string> = {
  activities: 'activity',
  colabs: 'colab',
  reservations: 'reservation',
  rooms: 'room',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
