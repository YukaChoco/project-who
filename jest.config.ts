import type { Config } from '@jest/types';

// Jest configuration for TypeScript
const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // モジュール名のマッピング（パスのエイリアス対応）
  moduleNameMapper: {
    // '@/' があなたのソースコードのルートディレクトリを指していると仮定します
    // "<rootDir>" はプロジェクトのルートディレクトリを指します
    // 下記のパスはあなたのプロジェクトの構造に合わせて調整してください
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // TypeScriptのパスエイリアスを解決するために必要な場合があります
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },

  // 他のJestの設定...
};

export default config;
