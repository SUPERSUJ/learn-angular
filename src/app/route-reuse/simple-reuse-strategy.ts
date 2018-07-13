// simple-reuse-strategy.ts
// tslint:disable
import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle, OutletContext } from '@angular/router';

export class SimpleReuseStrategy implements RouteReuseStrategy {

  public static _cacheRouters: { [key: string]: any } = {};

  // private deactivateOutlet(handle: DetachedRouteHandle): void {
  //   console.log('handle: ', handle);
  //   let contexts: Map<string, OutletContext> = handle['contexts'];
  //   contexts.forEach((context: OutletContext, key: string) => {
  //       if (context.outlet) {
  //           // Destroy the component
  //           context.outlet.deactivate();
  //           // Destroy the contexts for all the outlets that were in the component
  //           context.children.onOutletDeactivated();
  //       }
  //   });
  // }
  // shouldDetach 返回 boolean 来决定这个 router 是否需要缓存
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log('SimpleReuseStrategy._cacheRouters: ', SimpleReuseStrategy._cacheRouters);
    // 默认对所有路由复用 可通过给路由配置项增加data: { keep: true }来进行选择性使用
   // {path: 'search', component: SearchComponent, data: {keep: true}},
    if (!route.data.keep) {
      return false;
    } else {
      return true;
    }
  }
  // store router 离开的时候会触发这个沟通子函数，我们可以在这个函数吧路由快找缓存
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // 按path作为key存储路由快照&组件当前实例对象
    // path等同RouterModule.forRoot中的配置
    console.log('route.routeConfig.path: ', route.routeConfig.path);
    SimpleReuseStrategy._cacheRouters[route.routeConfig.path] = {
      snapshot: route,
      handle: handle
    };
  }
  // shouldAttach 是否使用已经缓存的路由快照
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // 在缓存中有的都认为允许还原路由
    return !!route.routeConfig && !!SimpleReuseStrategy._cacheRouters[route.routeConfig.path];
  }
  // retrieve 返回缓存的路由快照
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    // 从缓存中获取快照，若无则返回null
    if (!route.routeConfig || route.routeConfig.loadChildren || !SimpleReuseStrategy._cacheRouters[route.routeConfig.path]) return null;
    return SimpleReuseStrategy._cacheRouters[route.routeConfig.path].handle;
  }
  // shouldReuseRoute 进入路由触发，是否同一路由时复用路由
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // 同一路由时复用路由
    return future.routeConfig === curr.routeConfig;
  }

  public static deleteRouteSnapshot(name: string): void{
    if (SimpleReuseStrategy._cacheRouters[name]) {
      delete SimpleReuseStrategy._cacheRouters[name];
      console.log('delete SimpleReuseStrategy._cacheRouters[name]: ', SimpleReuseStrategy._cacheRouters[name]);
    }
  }
}