/**
 * Created by dattaram on 11/6/18.
 */
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
   throw new Error(`${moduleName} has already been loaded`);
  }

}
