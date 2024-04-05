import { ExpoConfig, ConfigContext } from 'expo/config';

import { SchemaEnv } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'base-fe-template',
  slug: 'base-fe-template',
  extra: {
    ...config?.extra,
    ...SchemaEnv,
  },
});
