import { defineConfig } from '@umijs/max';
import routes from './config/routes'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '我是乒乓哥',
  },
  routes: routes,
  npmClient: 'pnpm',
});

