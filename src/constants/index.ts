export const systemName = [
  "cantareira",
  "alto-tiete",
  "guarapiranga",
  "cotia",
  "rio-grande",
  "rio-claro",
] as const;

export type SystemName = typeof systemName[number];
