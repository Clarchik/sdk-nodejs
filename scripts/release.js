import { generateChangelog, release, logRecentCommits } from '@clarchikjs/release-scripts';

release({
  owner: 'clarchik',
  repo: 'sdk-nodejs',
  packages: ['sdk-nodejs'],
  toTag: (_, version) => `v${version}`,
  logChangelog: () => logRecentCommits(() => '.'),
  getPkgDir: () => '.',
  generateChangelog: async () => {
    console.log('\nGenerating changelog...');
    generateChangelog({ getPkgDir: () => '.', tagPrefix: 'v' });
  },
});
