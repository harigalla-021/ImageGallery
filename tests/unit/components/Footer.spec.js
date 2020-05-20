import AppFooter from '@/components/Footer.vue'
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'


describe("Testing Footer.vue", ()=> {
    let footerWrapper;

    beforeEach(()=> {
        Vue.use(Vuetify)
        footerWrapper= shallowMount(AppFooter, {
            Vue
        })
    })

    afterEach(()=> {
        footerWrapper.destroy()
    })


    it('Testing if Footer is a vue component: ', ()=>{
        expect(footerWrapper.isVueInstance).toBeTruthy()
    })

    it('Should find v-footer stub', () => {
        expect(footerWrapper.html()).toContain("v-footer-stub")
    });

    it('should find v-card', () => {
        expect(footerWrapper.html()).toContain("v-card-text-stub")
    });

    it('it should have a strong tag', () => {
        expect(footerWrapper.find('strong').text()).toBe("Image Gallery")
    });
})
