module.exports = {
  default: [
    "--require-module ts-node/register",
    'test/acceptance/features/*.feature',
    "--require test/acceptance/features/**/*.ts",
    "--require test/acceptance/features/*.ts",
  ].join(" "),
};