import { publish } from '@clarchikjs/release-scripts';

publish({
  defaultPackage: 'sdk-nodejs',
  getPkgDir: () => '.',
  provenance: true,
  packageManager: 'pnpm',
});
