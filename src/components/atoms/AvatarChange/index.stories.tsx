import React from 'react';
import { storiesOf } from '@storybook/react';

import AvatarChange from '.';

const IMAGEN =
  'https://c.pxhere.com/images/0f/3f/4dbc54d34a6b984a6c5f283be804-1447673.jpg!d';

storiesOf('atoms / Images', module).add('AvatarChange', () => (
  <AvatarChange url={IMAGEN} alt="Carlos" />
));
