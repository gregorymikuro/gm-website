export function resolveImagePath(folderPath?: string, noAlias = false) {
  if (!folderPath) {
    throw new Error("folderPath is required");
  }

  return {
    directory: `app/images/${folderPath}`,
    publicPath: `${noAlias ? "/app" : "~"}/images/${folderPath}/`,
  };
}
