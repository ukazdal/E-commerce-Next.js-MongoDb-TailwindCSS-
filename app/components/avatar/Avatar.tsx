import { RiShieldUserFill } from "react-icons/ri";
import Image from "next/image";

interface AvatarProps {
  image?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ image, size = 20 }) => {
  if (image)
    <Image
      src={image}
      alt="Kullanıcı avatarı"
      className="rounded-full"
      width={size}
      height={size}
    />;

  return <RiShieldUserFill size={size} className="text-gray-500" />;
};

export default Avatar;
