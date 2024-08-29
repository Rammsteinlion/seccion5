import MessageBox from "@/components/chat/MessageBox.vue"
import { mount } from "@vue/test-utils";


describe('<MessageBox>', ()=>{
    const wrapper = mount(MessageBox);


    test('renders input add button elements correly',()=>{
         expect(wrapper.html()).toMatchSnapshot(); // validar que al dia de manana el componente quede tal cual quedo organizado y funcionando
         expect(wrapper.find('input[type="text"]').exists()).toBe(true);
         expect(wrapper.find('button').exists()).toBe(true);
         expect(wrapper.find('button svg').exists()).toBe(true);
    });

    //probar emisiones
    test('emits sendMessages event when buttons is cliked with message', async ()=>{
        const message ='Hola Mundo';
        await wrapper.find('input[type="text"]').setValue(message);
        await wrapper.find('button').trigger("click");

        expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
        expect(wrapper.vm.message as any).toBe('');
    });

    //probar
    test('emits sendMessages event when keypress.enter is trigger with message', async ()=>{
        const message ='Hola Mundo';
    
        const input = wrapper.find('input');
        await input.setValue(message);
        await input.trigger('keypress.enter');

        expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    });

    test('emits sendMessages event when keypress.enter is trigger with message', async ()=>{
        const wrapper = mount(MessageBox);
        const input = wrapper.find('input');
    
        await input.trigger('keypress.enter');
        await wrapper.find('button').trigger("click");

        expect(wrapper.emitted('sendMessage')).toBeFalsy();
    });


})