import Home from '@/views/Home.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'


describe('Testing Home.vue', () => {
    let homeWrapper;
    const localVue= createLocalVue();
    beforeEach(() => {
        localVue.use(Vuetify)
        homeWrapper = shallowMount(Home, { localVue })
    })

    afterEach(() => {
        homeWrapper.destroy();
    })

    it('Testing if Home is a Vue component', () => {
        expect(homeWrapper.isVueInstance).toBeTruthy();
    })

    it('it should have a <v-btn-stub>', () => {
        expect(homeWrapper.html()).toContain("v-btn-stub")
    });

    it('it should have a <v-card-stub>', () => {
        expect(homeWrapper.html()).toContain("v-card-stub")
    });

    it('it should have a <v-img-stub>', () => {
        expect(homeWrapper.html()).toContain("v-img-stub")
    });

    it('it should have a span element', () => {
        expect(homeWrapper.find('h1').text()).toBe("The Image Gallery")
    });

    it('it should have a <v-btn-stub>', () => {
        expect(homeWrapper.html()).toContain("v-btn-stub")
    });

    it('existence of vbtn', () => {
        let btn = homeWrapper.find('.btn-1');
        expect(btn.exists()).toBe(true);
       // expect(btn.element.href).toMatch(/items\/\d+\/edit/);
    });
})