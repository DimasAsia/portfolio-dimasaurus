"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getImage } from "../service/imageAll.service";

type Props = {
  title: string;
};

export default function GetImage({ title }: Props) {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getImage(title)
      .then((data) => setImage(data.image_url))
      .catch(() => setError(true));
  }, [title]);

  if (error) return null;
  if (!image) return null;

  return (
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="relative rounded-2xl object-cover shadow-lg h-52 w-52"
      />
  );
}
