import ChatMessages from "@/components/chat/ChatMessages.vue"
import type { ChatMessage } from "@/interfaces/chat-message.interface"
import { mount } from "@vue/test-utils"

const messages: ChatMessage[] =[
    {id:1, message:'Hola', itsMine:true},
    {id:2, message:'Mundo', itsMine:false, image: 'http://hola-mundo.jpg'},
]

describe('<ChatMessages/>', () =>{
    const wrapper = mount(ChatMessages, {
        props:{ messages:messages}
    });

    test('renders chat messages correctly', () =>{
        const chatBubbles = wrapper.findAllComponents({name: 'ChatBubble'});
        expect(chatBubbles.length).toBe(messages.length);
    });

    /*comprobar que cuanso alla llgado un nuevo mensaje comprobar que se active el scroll
    comprobar el tiempo sel seTimeout*/
    // test('scrolls down to the bottom after messages update', async() =>{
    //       /*
    //     mock e sun reemplazo de alguna funcion de existe
    //       es un espia estar pendiente de lo que sucede
    //     */
    //     const scrollToMock = vi.fn();

    //     const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
    //     chatRef.scrollTo = scrollToMock;

    //     await wrapper.setProps({
    //         messages: [...messages, {id:3, message:'Hey', itsMine:true}],
    //     });

    //     await new Promise((r) =>setTimeout(r, 150));

    //     expect(scrollToMock).toHaveBeenCalledTimes(1);
    //     expect(scrollToMock).toHaveBeenCalledWith({
    //         behavior: 'smooth',
    //         top: expect.any(Number),
    //     }); 
    // })
})