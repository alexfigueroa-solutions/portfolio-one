const contactArray = [
    {
        email: 'alexfiguroa.cybr@gmail.com',
        linked_in:''

    }
]
{
    contactArray.map(
        Contact => (
            <div class = "card">
                <div class = "send-email">
                    Send Email Form
                </div>
                <div class = "contact-btns">
                    <button href = {Contact.email}>Email</button>
                    <button href = {Contact.linked_in}>LinkedIn</button>
                </div>
            </div>
        )
    )
}