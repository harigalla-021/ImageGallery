import ViewGallery from '@/views/ViewGallery.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify'


describe('Testing ViewGallery.vue', () => {

    let galleryWrapper;
    const localVue = createLocalVue();

    beforeEach(() => {
        localVue.use(Vuetify)
        galleryWrapper = shallowMount(ViewGallery, { localVue })
    })

    afterEach(() => {
        galleryWrapper.destroy();
    })

    it('Testing if View Gallery is a Vue component', () => {
        expect(galleryWrapper.isVueInstance).toBeTruthy();
    })

    it('it should have a <v-container-stub>', () => {
        expect(galleryWrapper.html()).toContain("v-container-stub")
    });

    it('it should have a <v-layout-stub>', () => {
        expect(galleryWrapper.html()).toContain("v-layout-stub")
    });

    it('it should have a <v-bottom-nav-stub>', () => {
        expect(galleryWrapper.find('span').text()).toContain("Back")
    });

    it('it should have a <v-row-stub>', () => {
        expect(galleryWrapper.html()).toContain("v-row-stub")
    });

    it('it should have a <v-btn-stub>', () => {
        expect(galleryWrapper.html()).toContain("v-btn-stub")
    });

    it('Testing the nextPage and previousPage method', () => {
        expect(galleryWrapper.vm.pageNo).toBe(1)
        galleryWrapper.vm.nextPage()
        expect(galleryWrapper.vm.pageNo).toBe(2)
        galleryWrapper.vm.previousPage()
        expect(galleryWrapper.vm.pageNo).toBe(1)
    })

    it('testing functions', () => {
        expect(galleryWrapper.vm.nextPage).toBeDefined();
        expect(galleryWrapper.vm.previousPage).toBeDefined();
        expect(galleryWrapper.vm.itemChange).toBeDefined();
    });

})