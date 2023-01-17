import type { Ora } from "ora";
import type { DEPLOYMENT, DEVICE_TYPES, PLATFORMS } from "./constants";

// This type is only used in a comment. JSDoc currently does not support
// importing types, but we can work around this limitation by importing and
// re-exporting it: https://github.com/microsoft/TypeScript/issues/43950
import type { renderQRCode } from "./qrcode";
export type { renderQRCode };

export type Deployment = (typeof DEPLOYMENT)[number];
export type DeviceType = (typeof DEVICE_TYPES)[number];
export type Platform = (typeof PLATFORMS)[number];

export type BuildParams = {
  architecture: string;
  platform: Platform;
  deviceType: DeviceType;
  distribution: string;
  packageManager: string;
  projectRoot: string;
  scheme: string;
  [key: string]: string;
};

export type JSObject = {
  [key: string]: string | number | boolean | JSObject | JSObject[];
};

export type RepositoryInfo = {
  owner: string;
  repo: string;
};

export type UserConfig = {
  github?: {
    token: string;
  };
};

export type Context = RepositoryInfo & {
  ref: string;
};

export type DistributionPlugin = {
  /**
   * Deploys app to device.
   *
   * If the app can be downloaded, use {@link renderQRCode} to render a QR code
   * in the terminal.
   *
   * @param context Context and parameters for the current build
   * @param artifact The configuration string generated by {@link DistributionPlugin.getConfigString}
   * @param spinner Logger instance; use this for long-running tasks
   */
  deploy: (
    context: Context & BuildParams,
    artifact: string,
    spinner: Ora
  ) => Promise<void>;

  /**
   * Returns a configuration string passed to the corresponding workflow
   * job/step.
   * @param platform Target platform to build for
   * @returns Configuration string for the plugin
   */
  getConfigString: (platform: Platform) => Promise<string>;
};

export type Remote = {
  build(
    context: Context,
    inputs: BuildParams,
    spinner: Ora
  ): Promise<string | null>;
  cancelBuild(context: Context): Promise<void>;
  install(): Promise<number>;
};
