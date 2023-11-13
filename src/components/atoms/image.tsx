interface ImageProps {
  src: string;
  className?: string;
}

const Image = ({ src, className }: ImageProps) => {
  return <img src={src} alt="" className={className} />;
};

export { Image };
