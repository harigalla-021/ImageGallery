import App from '@/App'
import { shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vue from 'vue'
import AppFooter from '@/components/Footer.vue'
import AppHeader from '@/components/Header.vue'
import Vuetify from 'vuetify'


describe('Testing App component', () => {
    let appWrapper;
    const router = new VueRouter({ path: "/", name: "Home" });

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter)
        appWrapper = shallowMount(App, {
            Vue,
            router
        });
    });

    afterEach(() => {
        appWrapper.destroy();
    });

    it('checking if it is a vue instance', () => {
        expect(appWrapper.isVueInstance).toBeTruthy();
    })

    it('it should have a content div', () => {
        expect(appWrapper.html()).toContain("v-content-stub")
    });


    describe('it should load AppHeader', () => {
        it('it should load AppHeader', () => {
            expect(AppHeader).toBeTruthy();
        });
    });

    describe('it should load AppFooter', () => {
        it('it should load AppFooter', () => {
            expect(AppFooter).toBeTruthy();
        });
    });

    it("it should have a <app-header-stub></app-header-stub>", () => {
        expect(appWrapper.html()).toContain("app-header-stub");
    });

    it("it should have a <app-footer-stub></app-footer-stub>", () => {
        expect(appWrapper.html()).toContain("app-footer-stub");
    });
})