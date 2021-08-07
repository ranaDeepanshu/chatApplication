import Image from "next/image";

type ImageElementProps = {
  src: StaticImageData;
  className: string;
};
export default function ImageElement(props: ImageElementProps) {
  return (
    <div className={props.className}>
      <Image src={props.src}></Image>
    </div>
  );
}
