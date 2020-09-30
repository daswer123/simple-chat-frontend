import React from "react"

const SendMessages = () => {
    return (
        <form action="/message" method="POST" className="send-form">
            <textarea placeholder="Введите ваше сообщение" name="message" rows="6"></textarea>
            <button type="submit">Отправить</button>
        </form>
        )
}

export default SendMessages