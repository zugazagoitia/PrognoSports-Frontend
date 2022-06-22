import {NavigationGuardNext, RouteLocationNormalized} from "vue-router";
import {useCommunityStore} from "@/store/communityStore";

// Asegurar que el usuario está en una comunidad si esa ruta lo requiere
export default function checkCommunity(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const communityStore = useCommunityStore();
    if (to.matched.some(record => record.meta.requiresCommunity)) {
        // Si no está logged in y la ruta lo requiere, mandar al login
        let hasCommunity = communityStore.thereIsCurrentCommunity;
        if (!hasCommunity) {
            next({
                path: '/communities'
            });
        } else {
            next();
        }
    } else {
        next();
    }
}