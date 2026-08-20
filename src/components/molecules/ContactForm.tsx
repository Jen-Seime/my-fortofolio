import Button from "../atoms/Button"
import Input from "../atoms/Input"

const ContactForm = () => (
    <div className="bg-surface-container-lowest/80 backdrop-blur-[16px] border border-outline-variant/40 rounded-xl p-8 md:p-10 shadow-lg relative">

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <form className=" space-y-6 relative" action="">

            {/* form input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* name Input */}
                <Input title="dentifier (Name)" name="" type="text" placeholder="Enter Your Name"/>
                {/* email input */}
                <Input title="Return Address (Email)" name="" type="text" placeholder="[EMAIL_ADDRESS]"/>
            </div>

            {/* subject input */}
            <Input title="Subject Directive" name="" type="text" placeholder="roject Inquiry: Front-End Architecture"/>

            {/* message input */}
            <Input title="Payload (Message)" name="" type="text" placeholder="Detail your project requirements here..."/>

            {/* Submit Action */}

            <div className=" pt-4 flex justify-end">
                <Button icon="send" ukuran="sedang" variant="primary" positionIcon="left" posisi="kiri">
                    Execute Send
                </Button>
            </div>
            
        </form>
    </div>
)

export default ContactForm