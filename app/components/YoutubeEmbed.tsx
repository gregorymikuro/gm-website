type Props = {
  videoId: string;
};

export default function YoutubeEmbed({ videoId }: Props) {
  return (
    <div className="w-full h-96">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
