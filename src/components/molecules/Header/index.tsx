import React from 'react';
import Link from 'next/link';
import { FaRocketchat } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ButtonLink, AvatarUser } from '@/atoms';
import { logoutAction } from 'root/actions';

import { HeaderContainer, AvatarWraper, Logo, Menu } from './styles';

type HeaderProps = {
  avatarUrl: string;
  name: string;
};

const Header = ({ avatarUrl, name }: HeaderProps): JSX.Element => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>
          <FaRocketchat />
          <p>Chat-Center</p>
        </Logo>
      </Link>
      <AvatarWraper>
        <AvatarUser avatarurl={avatarUrl} name={name} />
        <Menu>
          <ButtonLink handleClick={logout}>Salir</ButtonLink>
        </Menu>
      </AvatarWraper>
    </HeaderContainer>
  );
};

export default Header;
