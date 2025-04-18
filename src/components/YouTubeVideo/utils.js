export const getVideoId = (url) => {
  if (!url) return null;

  // Extrai o ID do vídeo de diferentes formatos de URL do YouTube
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11 ? match[2] : null;
};

export const isValidYouTubeUrl = (url) => {
  return getVideoId(url) !== null;
};
