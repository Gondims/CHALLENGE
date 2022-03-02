import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  Avatar,
  HeaderContent,
  BrandWrapper,
  User,
  UserInfo,
  Name,
  UserData,
} from "./styles";

export function Header() {
  const { width } = useWindowDimensions();
  return (
    <HeaderContent>
      {width && width < 1920 && (
        <Avatar>
          <span>LG</span>
        </Avatar>
      )}

      <BrandWrapper>
        <Image src="/assets/brand.png" width="42" height="41" alt="Brand" />
      </BrandWrapper>

      <User>
        <Avatar>
          <span>LG</span>
        </Avatar>
        <UserInfo>
          <Name>Leticia Gondim</Name>
          <UserData>Meus dados</UserData>
        </UserInfo>
      </User>
    </HeaderContent>
  );
}
