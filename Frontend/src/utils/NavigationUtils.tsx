export default class NavigationUtils {

    routeWithData = (navigationObj: any, next : string, data : object) => {
        navigationObj.navigate(next, data)
    }

    route = (navigationObj: any, next : string) => {
        navigationObj.navigate(next)
    }

}
