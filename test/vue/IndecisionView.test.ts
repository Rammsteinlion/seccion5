import ChatMessages from "@/components/chat/ChatMessages.vue";
import MessageBox from "@/components/chat/MessageBox.vue";
import IndecisionView from "@/views/IndecisionView.vue"
import { mount } from "@vue/test-utils"

const mockChatMessages = {
    template:'<div data-testid="mock-messages">Mock ChatMessage</div>',
};

describe('<IndecisionView/>', ()=>{

    test('renders chat messages and messageBox correly', ()=>{
        const wrapper = mount(IndecisionView);

        expect(wrapper.html()).toMatchSnapshot();

        //verificar quue lo componentes existan
        expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
        expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
    });

    test('calls onMessage when sending a message', async()=>{
        const wrapper = mount(IndecisionView, {
            global:{
                stubs:{
                    ChatMessages: mockChatMessages,
                }
            }
        });

        //simular el evento personalizado
        const messageboxComponent = wrapper.findComponent(MessageBox);

        messageboxComponent.vm.$emit('sendMessage', 'Hola Mundo');

        await new Promise((r) => setTimeout(r, 150));

        expect(wrapper.html()).toMatchSnapshot();
    });
})