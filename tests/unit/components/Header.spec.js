import AppHeader from '@/components/Header.vue'
import { shallowMount } from '@vue/test-utils';
import Vue from 'vue'
import { routes } from '@/router/index';
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'



describe('Inside Header.vue', () => {
    let headerWrapper;
    const router = new VueRouter({ routes });

    beforeEach(() => {
        Vue.use(Vuetify);
        Vue.use(VueRouter)
        headerWrapper = shallowMount(AppHeader, { Vue, router })
    })

    afterEach(() => {
        headerWrapper.destroy();
    })


    it('Testing if Header is a Vue component', () => {
        expect(headerWrapper.isVueInstance).toBeTruthy();
    })

    it('it should have a <v-app-bar-stub>', () => {
        expect(headerWrapper.html()).toContain("v-app-bar-stub")
    });

    it('it should have a <v-spacer-stub>', () => {
        expect(headerWrapper.html()).toContain("v-spacer-stub")
    });

    // it('it should have a <v-btn>', () => {
    //     const event = jest.fn()
    //     const button = headerWrapper.find('.v-btn')

    //     headerWrapper.vm.$on('action-btn:clicked', event)

    //     expect(event).toHaveBeenCalledTimes(0)

    //     button.trigger('click')

    //     expect(event).toHaveBeenCalledTimes(1)
    // });

    it('test existence of v-btn', () => {
        const button = headerWrapper.find('.v-btn')
        console.log(button)
        expect(headerWrapper.html()).toContain("v-btn-stub")
    })

    it('should find v-icon', () => {
        expect(headerWrapper.html()).toContain("v-icon-stub")
    });

    it('it should have a span element', () => {
        expect(headerWrapper.find('span').text()).toBe("View Gallery")
    });

    // it('renders a router-link tag with to home url', () => {
    //     expect(headerWrapper.vm.$route.path).toBe(routes[0].path);
    //   });
})