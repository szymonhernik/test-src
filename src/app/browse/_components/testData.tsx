export const posts = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  content: `Item ${index + 1}`,
}));
