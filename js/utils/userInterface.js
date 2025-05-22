export function isActivePath(currentPath, href) {
  const normalize = (path) => (path === "/index.html" ? "/" : path);
  return (
    normalize(currentPath) === normalize(href) ||
    normalize(currentPath).includes(normalize(href))
  );
}
