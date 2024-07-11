import { defineConfig } from '@umijs/max';
import routes from './config/routes'

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: routes,
  npmClient: 'pnpm',
  proxy: {
    '/api': {
      'target': 'http://10.33.156.103:3000',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
});

