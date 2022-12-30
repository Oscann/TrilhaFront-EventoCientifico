import Image, { StaticImageData } from "next/image";
import styled from "styled-components";

interface IconProps {
  src: string | StaticImageData;
}

export default function Icon({ src }: IconProps) {
  return (
    <IconHolder>
      <Image src={src} alt="loading" fill />
    </IconHolder>
  );
}

const IconHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  user-select: none;
`;
