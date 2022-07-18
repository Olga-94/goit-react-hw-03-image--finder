import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export const onInfoNotification = () => {
  info({
    title: 'Invalid request',
    text: `The search field is empty!`,
    delay: 2000,
  });
};

export const onErrorNotification = () => {
  error({
    title: 'Invalid request',
    text: `Please enter the right query!`,
    delay: 2000,
  });
};
