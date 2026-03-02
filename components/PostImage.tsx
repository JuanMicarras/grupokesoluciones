import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
};

export default function PostImage({ src, alt, caption }: Props) {
  return (
    <figure className="postFigure">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={700}
        style={{ width: "100%", height: "auto" }}
      />
      {caption ? <figcaption className="postCaption">{caption}</figcaption> : null}
    </figure>
  );
}
