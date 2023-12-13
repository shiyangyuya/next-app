module.exports = {
  ignores: [commit => commit.includes('init')], // 忽略包含 'init' 的提交消息，不进行校验
  extends: ['@commitlint/config-conventional'], // 使用 '@commitlint/config-conventional' 提供的常规配置
  rules: {
    'body-leading-blank': [2, 'always'], // 要求正文之前有一个空行（严重级别为错误）
    'footer-leading-blank': [1, 'always'], // 要求页脚之前有一个空行（严重级别为警告）
    'header-max-length': [2, 'always', 108], // 标题长度最大限制为 108 （严重级别为错误）
    'subject-empty': [2, 'never'], // 不允许提交消息中缺少主题（非空）（严重级别为错误）
    'type-empty': [2, 'never'], // 不允许提交消息中缺少类型（非空）（严重级别为错误）
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
        'release',
      ],
    ],
  },
}
