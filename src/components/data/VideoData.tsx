export interface VideoData {
  id: string;
  title: string;
  description: string;
  iframeSrc: string;
  link: string;
  size?: "small" | "medium" | "large";
}

const VideosData: VideoData[] = [
  {
    id: "video-1",
    title: "What is depression? - Helen M. Farrell",
    description: "Qu'est-ce que la dépression en simple - EN ",
    iframeSrc: "https://www.youtube.com/embed/z-IR48Mb3W0",
    link: "https://youtu.be/z-IR48Mb3W0",
    size: "large",
  },
  {
    id: "video-2",
    title: "La dépression. A quoi cela ressemble ? VIDEO pour les proches.",
    description: "Une approche de la dépression vue de l'intérieur.",
    iframeSrc: "https://youtube.com/embed/x9xFvuVQ6q4",
    link: "https://youtu.be/x9xFvuVQ6q4",
    size: "small",
  },
  {
    id: "video-3",
    title: "How do antidepressants work? - Neil R. Jeyasingam",
    description: "Explication du fonctionnement des antidépresseurs - EN ",
    iframeSrc: "https://www.youtube.com/embed/ClPVJ25Ka4k",
    link: "https://youtu.be/ClPVJ25Ka4k",
    size: "large",
  },
];

export default VideosData;
