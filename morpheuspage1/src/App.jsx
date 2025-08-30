import { useCallback, useEffect, useState } from '@lynx-js/react'
import './App.css'
import lynxLogo from './assets/lynx-logo.png'

export function App(props) {
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Morpheus. How can I help you today?", isUser: false }
  ])
  const [inputText, setInputText] = useState('')
  const [isTiramisuMode, setIsTiramisuMode] = useState(false)
  useEffect(() => {
    // Component initialization
  }, [])
  
  props.onRender?.()

  // Handle input change for mobile
  const handleInput = useCallback((e) => {
    // For mobile/Lynx apps, try different event structures
    let value = ''
    if (e && typeof e === 'string') {
      value = e
    } else if (e && e.detail && typeof e.detail.value === 'string') {
      value = e.detail.value
    } else if (e && e.target && typeof e.target.value === 'string') {
      value = e.target.value
    } else if (e && typeof e.value === 'string') {
      value = e.value
    }
    
    setInputText(value)
  }, [])

  // Send message function optimized for mobile
  const sendMessage = useCallback(() => {
    let messageText = inputText.trim()
    
    if (!messageText) {
      return
    }
    
    // Add user message
    const newUserMessage = { text: messageText, isUser: true }
    setMessages(prevMessages => [...prevMessages, newUserMessage])
    
    // Check if message is about tiramisu
    const isTiramisu = messageText.toLowerCase().includes('tiramisu')
    setIsTiramisuMode(isTiramisu)
    
    // Clear input
    setInputText('')
    
    // Add AI response
    setTimeout(() => {
      let response
      if (isTiramisu) {
        response = "Tiramisu is a classic Italian dessert! It's made with coffee-soaked ladyfingers and creamy mascarpone. Would you like the recipe?"
      } else if (messageText.toLowerCase().includes('hello') || messageText.toLowerCase().includes('hi')) {
        response = "Hello! How can I assist you today?"
      } else if (messageText.toLowerCase().includes('thank')) {
        response = "You're welcome! Is there anything else you'd like to know?"
      } else {
        response = "That's interesting! Tell me more or ask me something else."
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }])
    }, 1000)
  }, [inputText])

  // Mobile-friendly key handler
  const handleKeyDown = useCallback((e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
      sendMessage()
    }
  }, [sendMessage])

  return (
    <view className={isTiramisuMode ? 'App tiramisu-mode' : 'App'}>
      <view className='Background' />
      <view className='ChatContainer'>
        <view className='ChatHeader'>
          <image src={lynxLogo} className='Logo' />
          <text className='Title'>Morpheus</text>
        </view>
        
        <view className='MessagesContainer'>
          {messages.map((message, index) => (
            <view key={index} className={message.isUser ? 'Message UserMessage' : 'Message AiMessage'}>
              <text className='MessageText'>{message.text}</text>
            </view>
          ))}
        </view>
        
        <view className='InputContainer'>
          <input 
            className='MessageInput' 
            value={inputText}
            bindinput={handleInput}
            onInput={handleInput}
            bindkeydown={handleKeyDown}
            onKeyDown={handleKeyDown}
            placeholder='Type your message...'
            adjustPosition="true"
            holdKeyboard="true"
          />
          <view 
            className='SendButton' 
            bindtap={sendMessage}
            catchtap={sendMessage}
          >
            <text className='SendButtonText'>Send</text>
          </view>
        </view>
      </view>
    </view>
  )
}