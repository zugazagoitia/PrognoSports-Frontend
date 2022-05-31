import {defineStore} from "pinia";
import {User} from "@/types/User";
import {Community, ICommunity} from "@/types/Community";
import {isValidCommunity} from "@/utils";
import {useAuthStore} from "@/pinia/authStore";
import {communityService} from "@/_services";

export const useCommunityStore = defineStore('community', {
    state: () => ({
        community: new Community({id: 0} as ICommunity),
        communityId: Number.parseInt(localStorage.getItem('community') ?? '0') ?? 0,
    }),
    getters: {
        thereIsCurrentCommunity(): boolean {
            return isValidCommunity(this.community);
        },
        storedCommunityId(): number {
            return this.communityId;
        }
    },
    actions: {
        setCommunityFromUserRequest(user: User): void {
            if (this.communityId === 0) {
                this.communityId = user.currentCommunity.id;
            }
        },
        setCurrentCommunity(community: Community): void {
            this.community = community;
            this.communityId = community.id;
            const authStore = useAuthStore();
            authStore.setCurrentUserCommunity(community);
        },
        removeCurrentCommunity(): void {
            localStorage.removeItem('community');
            this.community = {id: 0} as Community;
            this.communityId = this.community.id;
            const authStore = useAuthStore();
            authStore.removeUserCurrentCommunity();
        },

        setCommunity(community: Community): void {
            localStorage.setItem('community', String(community.id ?? 0));
            this.setCurrentCommunity(community);
        },
        removeCommunity(): void {
            localStorage.removeItem('community');
            this.removeCurrentCommunity();
        },

        communityRequest(payload: { communityId: number }): Promise<Community> {
            let {communityId} = payload;

            return communityService.getCommunityById(communityId).then(
                community => {
                    this.setCommunity(community);
                    return Promise.resolve(community);
                },
                error => {
                    this.removeCurrentCommunity();
                    return Promise.reject(error);
                }
            );
        },
    }
});