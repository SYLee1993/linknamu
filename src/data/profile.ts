export type Profile = {
  name: string;
  bio: string;
  /** public/ 기준 경로 또는 외부 URL. 비워두면 이름 첫 글자로 대체 */
  imageUrl?: string;
};

export type LinkItem = {
  /** 클릭 수 집계 키 (영문/숫자/하이픈) */
  id: string;
  title: string;
  url: string;
};

export const profile: Profile = {
  name: "이상열",
  bio: "TKG 원가전략팀 팀장",
  imageUrl: "",
};

export const links: LinkItem[] = [
  { id: "instagram", title: "Instagram", url: "https://instagram.com/" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com/" },
  { id: "github", title: "GitHub", url: "https://github.com/" },
];
