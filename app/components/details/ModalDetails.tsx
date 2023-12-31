import getFormattedDate from "@/lib/getFormattedDate";
import { Gallery } from "@/types";
import Image from "next/image";
export default function ModalDetails({
  file,
  fileName,
  name,
  date,
}: Gallery["data"]) {
  return (
    <div className="flex flex-col items-center p-8">
      <Image
        width={100}
        height={100}
        src={file}
        alt={fileName}
        className="w-fit h-48 rounded-full mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-500 text-sm mb-4">{fileName}</p>
      <p className="text-gray-500 text-sm mb-4">{getFormattedDate(date)}</p>
    </div>
  );
}
