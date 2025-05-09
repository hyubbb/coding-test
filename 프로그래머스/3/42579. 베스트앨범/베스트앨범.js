function solution(genres, plays) {
  const genreMap = new Map(); // 장르별 총 재생 횟수
  const songMap = new Map(); // 장르별 노래 정보 합친거

  for (let i = 0; i < genres.length; i++) {
    // 장르별 총 재생 횟수 누적
    genreMap.set(genres[i], (genreMap.get(genres[i]) || 0) + plays[i]);
    songMap.set(genres[i], [
      ...(songMap.get(genres[i]) || []),
      { index: i, play: plays[i] },
    ]);
  }

  const result = Array.from(genreMap)
    .sort((a, b) => b[1] - a[1])
    .map((v) =>
      songMap
        .get(v[0])
        .sort((a, b) => b.play - a.play)
        .slice(0, 2)
        .map((v) => v.index)
    );

  return result.flat();
}