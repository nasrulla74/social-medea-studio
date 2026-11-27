import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/dist-electron/**',
      '**/release/**',
      '**/build/**',
      '**/.turbo/**',
      '**/coverage/**',
      '**/*.bak',
      '**/*.backup',
      '**/*.tsbuildinfo',
    ],
  },

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },

  // React renderer
  {
    files: ['src/**/*.{ts,tsx}'],

    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },

    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },
  },

  // Electron and build configuration
  {
    files: [
      'electron/**/*.ts',
      'config/**/*.ts',
      'vite.config.ts',
    ],

    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
)
